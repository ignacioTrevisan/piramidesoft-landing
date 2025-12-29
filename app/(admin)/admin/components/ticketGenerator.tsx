"use client";
import jsPDF from "jspdf";

interface TicketData {
  numeroRecibo: string;
  periodo: string;
  clienteNombre: string;
  clienteCUIT?: string;
  concepto: string;
  importe: number;
  fecha: string;
}

export class TicketGenerator {
  private pdf: jsPDF;
  private readonly MARGIN_LEFT = 20;
  private readonly MARGIN_TOP = 20;
  private readonly PAGE_WIDTH = 210; // A4 width in mm

  constructor() {
    this.pdf = new jsPDF({
      orientation: "portrait",
      unit: "mm",
      format: "a4",
    });
  }

  private async loadImage(url: string): Promise<string> {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.crossOrigin = "Anonymous";
      img.onload = () => {
        const canvas = document.createElement("canvas");
        canvas.width = img.width;
        canvas.height = img.height;
        const ctx = canvas.getContext("2d");
        if (ctx) {
          ctx.drawImage(img, 0, 0);
          resolve(canvas.toDataURL("image/png"));
        } else {
          reject(new Error("No se pudo crear el contexto del canvas"));
        }
      };
      img.onerror = () =>
        reject(new Error(`No se pudo cargar la imagen: ${url}`));
      img.src = url;
    });
  }

  private async drawHeader(numeroRecibo: string, periodo: string) {
    // Intentar cargar el logo
    try {
      const logoImg = await this.loadImage("/logo_2.png");
      // Ajusta el tamaño según tu logo (ancho, alto en mm)
      // Aumentado la altura de 15 a 25mm para que se vea menos comprimido
      this.pdf.addImage(
        logoImg,
        "PNG",
        this.MARGIN_LEFT,
        this.MARGIN_TOP - 5,
        50,
        55
      );
    } catch (error) {
      console.log(error);
      console.log("No se pudo cargar el logo, usando texto");
      // Fallback a texto si no se puede cargar la imagen
      this.pdf.setFontSize(20);
      this.pdf.setFont("helvetica", "bold");
      this.pdf.text("PIRAMIDE", this.MARGIN_LEFT, this.MARGIN_TOP);

      this.pdf.setFontSize(10);
      this.pdf.setFont("helvetica", "normal");
      this.pdf.text(
        "SOLUCIONES INFORMÁTICAS",
        this.MARGIN_LEFT,
        this.MARGIN_TOP + 7
      );
    }

    // Recuadro superior derecho
    const boxX = 130;
    const boxY = 10;
    const boxWidth = 65;
    const boxHeight = 25;

    // Borde del recuadro
    this.pdf.setLineWidth(0.5);
    this.pdf.rect(boxX, boxY, boxWidth, boxHeight);

    // "X" en la esquina
    this.pdf.setFontSize(16);
    this.pdf.setFont("helvetica", "bold");
    this.pdf.text("X", boxX + 5, boxY + 8);

    // Texto "DOC. NO VÁLIDO COMO FACTURA"
    this.pdf.setFontSize(7);
    this.pdf.setFont("helvetica", "normal");
    this.pdf.text("DOC. NO VÁLIDO COMO FACTURA", boxX + 15, boxY + 5);

    // "RECIBO"
    this.pdf.setFontSize(16);
    this.pdf.setFont("helvetica", "bold");
    const reciboText = "RECIBO";
    const reciboWidth = this.pdf.getTextWidth(reciboText);
    this.pdf.text(reciboText, boxX + (boxWidth - reciboWidth) / 2, boxY + 13);

    // Número de recibo
    this.pdf.setFontSize(10);
    this.pdf.setFont("helvetica", "normal");
    this.pdf.text("N°:", boxX + 10, boxY + 19);
    this.pdf.setFont("helvetica", "bold");
    this.pdf.text(numeroRecibo, boxX + 20, boxY + 19);

    // Periodo
    this.pdf.setFont("helvetica", "normal");
    this.pdf.text("Periodo:", boxX + 5, boxY + 24);
    this.pdf.setFont("helvetica", "bold");
    this.pdf.text(periodo, boxX + 25, boxY + 24);

    // Aumentar el margen superior para dar más espacio después del logo más alto
    return this.MARGIN_TOP + 65;
  }

  private drawBody(data: TicketData, startY: number) {
    let currentY = startY;

    // Recibí del Sr./a:
    this.pdf.setFontSize(11);
    this.pdf.setFont("helvetica", "normal");
    this.pdf.text("Recibí del Sr./a:", this.MARGIN_LEFT, currentY);

    this.pdf.setFont("helvetica", "bold");
    this.pdf.text(
      data.clienteNombre.toUpperCase(),
      this.MARGIN_LEFT + 35,
      currentY
    );

    currentY += 10;

    // La cantidad de
    this.pdf.setFont("helvetica", "normal");
    this.pdf.text("la cantidad de:", this.MARGIN_LEFT, currentY);

    // Convertir número a palabras
    const cantidadEnPalabras = this.numeroAPalabras(data.importe);
    this.pdf.setFont("helvetica", "bold");

    // Dividir texto largo en múltiples líneas si es necesario
    const maxWidth = this.PAGE_WIDTH - this.MARGIN_LEFT - 35 - 10; // Espacio disponible
    const lineasCantidad = this.pdf.splitTextToSize(
      cantidadEnPalabras.toUpperCase(),
      maxWidth
    );

    // Si el texto es muy largo, moverlo a la siguiente línea completa
    if (lineasCantidad.length > 1) {
      currentY += 7;
      this.pdf.text(lineasCantidad, this.MARGIN_LEFT, currentY);
      currentY += (lineasCantidad.length - 1) * 7; // Ajustar posición según líneas usadas
    } else {
      this.pdf.text(lineasCantidad[0], this.MARGIN_LEFT + 35, currentY);
    }

    currentY += 10;

    // En concepto de
    this.pdf.setFont("helvetica", "normal");
    this.pdf.text("en concepto de:", this.MARGIN_LEFT, currentY);

    this.pdf.setFont("helvetica", "bold");
    this.pdf.text(data.concepto, this.MARGIN_LEFT + 35, currentY);

    currentY += 15;

    // Recuadro del importe
    const importeBoxX = this.MARGIN_LEFT;
    const importeBoxY = currentY;
    const importeBoxWidth = 60;
    const importeBoxHeight = 12;

    this.pdf.setLineWidth(0.5);
    this.pdf.rect(importeBoxX, importeBoxY, importeBoxWidth, importeBoxHeight);

    this.pdf.setFontSize(10);
    this.pdf.setFont("helvetica", "normal");
    this.pdf.text("Importe: $", importeBoxX + 5, importeBoxY + 8);

    this.pdf.setFont("helvetica", "bold");
    this.pdf.setFontSize(12);
    this.pdf.text(
      this.formatMoney(data.importe),
      importeBoxX + 30,
      importeBoxY + 8
    );

    // Fecha (alineada a la derecha del importe)
    this.pdf.setFontSize(11);
    this.pdf.setFont("helvetica", "normal");
    this.pdf.text(
      "Fecha:",
      importeBoxX + importeBoxWidth + 20,
      importeBoxY + 8
    );

    this.pdf.setFont("helvetica", "bold");
    this.pdf.text(
      data.fecha,
      importeBoxX + importeBoxWidth + 35,
      importeBoxY + 8
    );

    currentY += importeBoxHeight + 15;

    return currentY;
  }

  private async drawFooter(startY: number) {
    // Línea punteada para la firma
    const signatureLineY = startY + 20;
    const signatureLineWidth = 60;
    const signatureLineX =
      this.PAGE_WIDTH - this.MARGIN_LEFT - signatureLineWidth;

    // Intentar cargar la imagen de firma
    try {
      const firmaImg = await this.loadImage("/firma.png");
      // Agregar imagen de firma encima de la línea
      this.pdf.addImage(
        firmaImg,
        "PNG",
        signatureLineX + 5,
        signatureLineY - 18,
        50,
        15
      );
    } catch (error) {
      console.log({ error });
      console.log("No se pudo cargar la imagen de firma");
    }

    // Dibujar línea punteada manualmente con puntos
    const dotSpacing = 2; // mm entre puntos
    for (
      let x = signatureLineX;
      x < signatureLineX + signatureLineWidth;
      x += dotSpacing
    ) {
      this.pdf.circle(x, signatureLineY, 0.2, "F"); // Radio de 0.2mm, 'F' = fill
    }

    // Texto "Firma"
    this.pdf.setFontSize(9);
    this.pdf.setFont("helvetica", "normal");
    const firmaText = "Firma";
    const firmaWidth = this.pdf.getTextWidth(firmaText);
    this.pdf.text(
      firmaText,
      signatureLineX + (signatureLineWidth - firmaWidth) / 2,
      signatureLineY + 5
    );

    // Nota al pie
    const noteY = 270; // Near bottom of page
    this.pdf.setFontSize(8);
    this.pdf.setFont("helvetica", "italic");
    this.pdf.text(
      "Sr/a.: Conserve este recibo como único comprobante de pago.",
      this.MARGIN_LEFT,
      noteY
    );
  }

  private formatMoney(amount: number): string {
    return amount.toLocaleString("es-AR", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  }

  private numeroAPalabras(num: number): string {
    const unidades = [
      "",
      "uno",
      "dos",
      "tres",
      "cuatro",
      "cinco",
      "seis",
      "siete",
      "ocho",
      "nueve",
    ];
    const decenas = [
      "",
      "diez",
      "veinte",
      "treinta",
      "cuarenta",
      "cincuenta",
      "sesenta",
      "setenta",
      "ochenta",
      "noventa",
    ];
    const especiales = [
      "diez",
      "once",
      "doce",
      "trece",
      "catorce",
      "quince",
      "dieciséis",
      "diecisiete",
      "dieciocho",
      "diecinueve",
    ];
    const centenas = [
      "",
      "ciento",
      "doscientos",
      "trescientos",
      "cuatrocientos",
      "quinientos",
      "seiscientos",
      "setecientos",
      "ochocientos",
      "novecientos",
    ];

    const entero = Math.floor(num);
    const decimales = Math.round((num - entero) * 100);

    let resultado = "";

    if (entero === 0) {
      resultado = "cero";
    } else if (entero < 10) {
      resultado = unidades[entero];
    } else if (entero < 20) {
      resultado = especiales[entero - 10];
    } else if (entero < 100) {
      const dec = Math.floor(entero / 10);
      const uni = entero % 10;
      resultado = decenas[dec] + (uni > 0 ? " y " + unidades[uni] : "");
    } else if (entero < 1000) {
      const cen = Math.floor(entero / 100);
      const resto = entero % 100;
      resultado = cen === 1 && resto === 0 ? "cien" : centenas[cen];
      if (resto > 0) {
        resultado += " " + this.numeroAPalabras(resto);
      }
    } else if (entero < 1000000) {
      const miles = Math.floor(entero / 1000);
      const resto = entero % 1000;
      resultado = miles === 1 ? "mil" : this.numeroAPalabras(miles) + " mil";
      if (resto > 0) {
        resultado += " " + this.numeroAPalabras(resto);
      }
    }

    // Construir texto de centavos
    let textoCentavos = "";
    if (decimales === 0) {
      textoCentavos = "";
    } else if (decimales === 1) {
      textoCentavos = " con un centavo";
    } else if (decimales < 10) {
      textoCentavos = ` con ${unidades[decimales]} centavos`;
    } else if (decimales < 20) {
      textoCentavos = ` con ${especiales[decimales - 10]} centavos`;
    } else {
      const dec = Math.floor(decimales / 10);
      const uni = decimales % 10;
      textoCentavos = ` con ${decenas[dec]}${
        uni > 0 ? " y " + unidades[uni] : ""
      } centavos`;
    }

    return `pesos ${resultado}${textoCentavos}`;
  }

  public async generateTicket(data: TicketData): Promise<void> {
    let currentY = await this.drawHeader(data.numeroRecibo, data.periodo);
    currentY = this.drawBody(data, currentY);
    await this.drawFooter(currentY);
  }

  public save(filename: string) {
    this.pdf.save(filename);
  }

  public getBlob(): Blob {
    return this.pdf.output("blob");
  }

  public getDataUrl(): string {
    return this.pdf.output("dataurlstring");
  }
}

// Función helper para generar ticket individual
export async function generarTicketCliente(
  cliente: {
    name: string;
    cuit?: string | null;
  },
  categoria: {
    name: string;
    value: number;
  },
  numeroRecibo: string,
  periodo: string = new Date()
    .toLocaleString("es-AR", {
      month: "short",
      year: "numeric",
    })
    .toUpperCase()
): Promise<Blob> {
  const generator = new TicketGenerator();

  const ticketData: TicketData = {
    numeroRecibo,
    periodo,
    clienteNombre: cliente.name,
    clienteCUIT: cliente.cuit || undefined,
    concepto: categoria.name,
    importe: categoria.value,
    fecha: new Date().toLocaleDateString("es-AR", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    }),
  };

  await generator.generateTicket(ticketData);
  return generator.getBlob();
}

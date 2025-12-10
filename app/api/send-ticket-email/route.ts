import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      to,
      userName,
      categoryName,
      amount,
      pdfBase64,
      numeroRecibo,
      periodo,
    } = body;

    // Validar datos
    if (
      !to ||
      !userName ||
      !categoryName ||
      !pdfBase64 ||
      !numeroRecibo ||
      !periodo
    ) {
      return NextResponse.json(
        { ok: false, error: "Faltan datos requeridos" },
        { status: 400 }
      );
    }

    // Configurar transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.gmail.com",
      port: parseInt(process.env.SMTP_PORT || "587"),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    // HTML del email
    const htmlContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            color: #333;
            margin: 0;
            padding: 0;
          }
          .container {
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
          }
          .header {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 30px;
            text-align: center;
            border-radius: 10px 10px 0 0;
          }
          .content {
            background: #f9fafb;
            padding: 30px;
            border-radius: 0 0 10px 10px;
          }
          .info-box {
            background: white;
            padding: 20px;
            border-radius: 8px;
            margin: 20px 0;
            border-left: 4px solid #667eea;
          }
          .info-row {
            display: flex;
            justify-content: space-between;
            padding: 10px 0;
            border-bottom: 1px solid #e5e7eb;
          }
          .info-row:last-child {
            border-bottom: none;
          }
          .label {
            font-weight: bold;
            color: #6b7280;
          }
          .value {
            color: #111827;
          }
          .amount {
            font-size: 24px;
            font-weight: bold;
            color: #667eea;
          }
          .footer {
            text-align: center;
            margin-top: 30px;
            padding-top: 20px;
            border-top: 2px solid #e5e7eb;
            color: #6b7280;
            font-size: 14px;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1 style="margin: 0;">🎫 Recibo de Pago</h1>
            <p style="margin: 10px 0 0 0; opacity: 0.9;">Tu comprobante está listo</p>
          </div>
          
          <div class="content">
            <p>Hola <strong>${userName}</strong>,</p>
            
            <p>Te enviamos el recibo correspondiente a tu categoría de cliente. Puedes encontrar todos los detalles en el archivo PDF adjunto.</p>
            
            <div class="info-box">
              <div class="info-row">
                <span class="label">Número de Recibo:</span>
                <span class="value">#${numeroRecibo}</span>
              </div>
              <div class="info-row">
                <span class="label">Período:</span>
                <span class="value">${periodo}</span>
              </div>
              <div class="info-row">
                <span class="label">Categoría:</span>
                <span class="value">${categoryName}</span>
              </div>
              <div class="info-row">
                <span class="label">Monto:</span>
                <span class="value amount">$${amount.toFixed(2)}</span>
              </div>
            </div>
            
            <p style="color: #6b7280; font-size: 14px;">
              📎 El recibo en formato PDF está adjunto a este correo electrónico.
            </p>
            
            <div class="footer">
              <p><strong>Piramide Soft</strong></p>
              <p>Este es un correo automático, por favor no responder.</p>
              <p style="font-size: 12px; margin-top: 10px;">
                Si tienes alguna pregunta, contáctanos a través de nuestros canales oficiales.
              </p>
            </div>
          </div>
        </div>
      </body>
      </html>
    `;

    // Convertir base64 a Buffer
    const pdfBuffer = Buffer.from(pdfBase64, "base64");

    // Enviar email
    const info = await transporter.sendMail({
      from: `"Piramide Soft" <${
        process.env.SMTP_FROM || process.env.SMTP_USER
      }>`,
      to: to,
      subject: `Recibo de Pago - ${periodo} - #${numeroRecibo}`,
      html: htmlContent,
      attachments: [
        {
          filename: `Recibo_${userName.replace(
            /\s+/g,
            "_"
          )}_${numeroRecibo}.pdf`,
          content: pdfBuffer,
          contentType: "application/pdf",
        },
      ],
    });

    console.log("Email enviado:", info.messageId);
    return NextResponse.json({ ok: true, messageId: info.messageId });
  } catch (error) {
    console.error("Error al enviar email:", error);
    return NextResponse.json(
      { ok: false, error: "Error al enviar el email" },
      { status: 500 }
    );
  }
}

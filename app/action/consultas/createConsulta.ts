"use server";

import prisma from "@/app/lib/prisma";
import { CreateConsultaData, ConsultaResponse } from "@/interfaces/consulta";
import { AddHistorial } from "../historial/addHistorial";

export async function createConsulta(data: CreateConsultaData): Promise<ConsultaResponse> {
  try {
    // Generar mes actual para stats
    const now = new Date();
    const month = String(now.getMonth() + 1).padStart(2, "0");
    const year = now.getFullYear();
    const statsMes = `${month}/${year}`;

    // Verificar/crear stats del mes actual
    await prisma.stats.upsert({
      where: { mes: statsMes },
      update: {},
      create: {
        mes: statsMes,
        cantidadDeProductos: 0,
        cantidadDeBlogs: 0,
      },
    });

    // Crear la consulta
    const consulta = await prisma.consultas.create({
      data: {
        nombre: data.nombre,
        descripcion: data.descripcion,
        email: data.email,
        numero: data.numero,
        productId: data.productId || null,
        statsMes: statsMes,
      },
      include: {
        product: {
          select: {
            id: true,
            titulo: true,
          }
        }
      }
    });

    // Registrar en historial
    const productInfo = consulta.product ? ` sobre "${consulta.product.titulo}"` : '';
    await AddHistorial(`Nueva consulta recibida de ${consulta.nombre}${productInfo}`);

    return {
      ok: true,
      data: {
        ...consulta,
        createdAt: consulta.createdAt.toISOString(),
        updatedAt: consulta.updatedAt.toISOString(),
      }
    };
  } catch (error) {
    console.error('Error creating consulta:', error);
    return { 
      ok: false, 
      error: "Error al enviar la consulta. Por favor, intenta nuevamente." 
    };
  }
}

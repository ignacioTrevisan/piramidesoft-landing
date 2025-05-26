"use server";

import prisma from "@/app/lib/prisma";
import { ConsultasListResponse } from "@/interfaces/consulta";

export async function getConsultas(): Promise<ConsultasListResponse> {
  try {
    const consultas = await prisma.consultas.findMany({
      include: {
        product: {
          select: {
            id: true,
            titulo: true,
          }
        }
      },
      orderBy: [
        { status: 'asc' }, // PENDIENTE primero
        { createdAt: 'desc' }
      ]
    });

    return {
      ok: true,
      data: consultas.map(consulta => ({
        ...consulta,
        createdAt: consulta.createdAt.toISOString(),
        updatedAt: consulta.updatedAt.toISOString(),
      }))
    };
  } catch (error) {
    console.error('Error fetching consultas:', error);
    return { 
      ok: false, 
      error: "Error al obtener las consultas" 
    };
  }
}

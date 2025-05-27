"use server";

import prisma from "@/app/lib/prisma";
import { ConsultaStats } from "@/app/interfaces/consulta";

export async function getConsultaStats(): Promise<{ ok: boolean; data?: ConsultaStats; error?: string }> {
  try {
    const total = await prisma.consultas.count();
    const pendientes = await prisma.consultas.count({
      where: { status: 'PENDIENTE' }
    });
    const atendidas = await prisma.consultas.count({
      where: { status: 'ATENDIDA' }
    });

    return {
      ok: true,
      data: {
        total,
        pendientes,
        atendidas
      }
    };
  } catch (error) {
    console.error('Error fetching consulta stats:', error);
    return { 
      ok: false, 
      error: "Error al obtener las estadísticas" 
    };
  }
}

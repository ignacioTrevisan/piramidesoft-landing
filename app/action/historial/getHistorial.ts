"use server";

import prisma from "@/app/lib/prisma";
import { ApiResponse } from "@/app/interfaces/apiResponse";

export interface HistorialEntry {
  id: string;
  descripcion: string;
  createdAt: Date;
}

export const getHistorial = async (
  limit: number = 10
): Promise<ApiResponse<HistorialEntry[]>> => {
  try {
    const historial = await prisma.historial.findMany({
      orderBy: {
        createdAt: 'desc'
      },
      take: limit
    });

    return {
      ok: true,
      data: historial
    };
  } catch (error) {
    console.log("Error obteniendo historial:", error);
    return {
      ok: false,
      msg: "Error al obtener el historial"
    };
  }
};

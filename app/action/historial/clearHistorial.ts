"use server";

import prisma from "@/app/lib/prisma";
import { ApiResponse } from "@/app/interfaces/apiResponse";

export const clearHistorial = async (): Promise<ApiResponse> => {
  try {
    await prisma.historial.deleteMany({});
    
    return {
      ok: true,
      msg: "Historial limpiado correctamente"
    };
  } catch (error) {
    console.log("Error limpiando historial:", error);
    return {
      ok: false,
      msg: "Error al limpiar el historial"
    };
  }
};

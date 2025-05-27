"use server";

import prisma from "@/app/lib/prisma";
import { ApiResponse } from "@/app/interfaces/apiResponse";

export const AddHistorial = async (
  descripcion: string
): Promise<ApiResponse> => {
  try {
    await prisma.historial.create({ data: { descripcion } });
    return {
      ok: true,
    };
  } catch (error) {
    console.log(error);
    return {
      ok: false,
      msg: "Ocurrio un error al intentar agregar un nuevo registro al historial",
    };
  }
};

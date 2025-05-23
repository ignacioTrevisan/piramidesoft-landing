"use server";
import prisma from "@/app/lib/prisma";
import { ApiResponse } from "@/interfaces/apiResponse";
import { StatsResponse } from "@/interfaces/stats";

export const getStats = async (
  mesaBuscar: string,
  mesAComparar: string
): Promise<ApiResponse<StatsResponse[]>> => {
  try {
    const data1 = await prisma.stats.findFirst({
      where: { mes: mesaBuscar },
      include: {
        userViews: true,
        cantidadDeConsultas: true,
      },
    });
    const data2 = await prisma.stats.findFirst({
      where: { mes: mesAComparar },
      include: {
        userViews: true,
        cantidadDeConsultas: true,
      },
    });
    if (data1 && data2) {
      return { ok: true, data: [data1, data2] };
    }
    return {
      ok: false,
      msg: "ocurrio un error al intentar traer las stats",
    };
  } catch (error) {
    console.log(error);
    return {
      ok: false,
      msg: "ocurrio un error al intentar traer las stats",
    };
  }
};

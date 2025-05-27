"use server";
import prisma from "@/app/lib/prisma";
import { ApiResponse } from "@/app/interfaces/apiResponse";
import { StatsResponse } from "@/app/interfaces/stats";

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
    
    const result: StatsResponse[] = [];
    
    if (data1) {
      result.push(data1);
    }
    
    if (data2) {
      result.push(data2);
    }
    
    return { ok: true, data: result };
  } catch (error) {
    console.log(error);
    return {
      ok: false,
      msg: "ocurrio un error al intentar traer las stats",
    };
  }
};

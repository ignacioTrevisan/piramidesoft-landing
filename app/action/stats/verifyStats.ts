"use server";
import { ApiResponse } from "@/interfaces/apiResponse";
import prisma from "../../lib/prisma";

export const verifyStats = async (mesABuscar: string): Promise<ApiResponse> => {
  try {
    let msgResp = "Hay un mes creado";
    const data = await prisma.stats.findFirst({ where: { mes: mesABuscar } });
    if (!data) {
      await prisma.stats.create({
        data: {
          cantidadDeBlogs: 0,
          cantidadDeProductos: 0,
          userViews: { create: [] },
          mes: mesABuscar,
        },
      });
      msgResp = "Mes creado correctamente";
    }
    return {
      ok: true,
      msg: msgResp,
    };
  } catch (error) {
    console.log(error);
    return {
      ok: false,
      msg: "Ocurrio un error al intentar verificar el mes",
    };
  }
};

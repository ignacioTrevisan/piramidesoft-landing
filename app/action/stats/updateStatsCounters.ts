"use server";
import { ApiResponse } from "@/interfaces/apiResponse";
import prisma from "../../lib/prisma";
import { verifyStats } from "./verifyStats";

export const updateStatsCounters = async (): Promise<ApiResponse> => {
  try {
    const now = new Date();
    const month = now.getMonth() + 1;
    const year = now.getFullYear();
    const currentMonth = `${String(month).padStart(2, "0")}/${year}`;

    // Verificar que existe el registro del mes
    await verifyStats(currentMonth);

    // Contar productos visibles
    const productCount = await prisma.product.count({
      where: {
        visible: true,
      },
    });

    // Contar blogs visibles
    const blogCount = await prisma.blog.count({
      where: {
        visible: true,
      },
    });

    // Actualizar las estadísticas
    await prisma.stats.update({
      where: { mes: currentMonth },
      data: {
        cantidadDeProductos: productCount,
        cantidadDeBlogs: blogCount,
      },
    });

    return {
      ok: true,
      msg: "Contadores actualizados correctamente",
    };
  } catch (error) {
    console.log("Error actualizando contadores:", error);
    return {
      ok: false,
      msg: "Error al actualizar contadores",
    };
  }
};

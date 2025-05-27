"use server";
import { ApiResponse } from "@/app/interfaces/apiResponse";
import prisma from "../../lib/prisma";

export const initializeMonthlyStats = async (): Promise<ApiResponse> => {
  try {
    const now = new Date();
    const currentMonth = now.getMonth() + 1;
    const currentYear = now.getFullYear();
    const monthString = `${String(currentMonth).padStart(2, "0")}/${currentYear}`;

    console.log("Inicializando stats para el mes:", monthString);

    // Verificar si ya existe el registro del mes actual
    let existingStats = await prisma.stats.findFirst({
      where: { mes: monthString },
    });

    // Contar productos y blogs actuales
    const productCount = await prisma.product.count({
      where: { visible: true },
    });

    const blogCount = await prisma.blog.count({
      where: { visible: true },
    });

    console.log("Conteos actuales - Productos:", productCount, "Blogs:", blogCount);

    if (!existingStats) {
      // Crear el registro de stats para el mes actual
      existingStats = await prisma.stats.create({
        data: {
          mes: monthString,
          cantidadDeProductos: productCount,
          cantidadDeBlogs: blogCount,
        },
      });

      console.log("Stats creadas:", existingStats);

      return {
        ok: true,
        msg: `Stats inicializadas para ${monthString}`,
      };
    } else {
      // Actualizar contadores en el registro existente
      const updatedStats = await prisma.stats.update({
        where: { mes: monthString },
        data: {
          cantidadDeProductos: productCount,
          cantidadDeBlogs: blogCount,
        },
      });

      console.log("Stats actualizadas:", updatedStats);

      return {
        ok: true,
        msg: `Stats actualizadas para ${monthString}`,
      };
    }
  } catch (error) {
    console.log("Error inicializando stats mensuales:", error);
    return {
      ok: false,
      msg: "Error al inicializar stats mensuales",
    };
  }
};

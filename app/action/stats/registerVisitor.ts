"use server";
import { ApiResponse } from "@/app/interfaces/apiResponse";
import prisma from "../../lib/prisma";
import { verifyStats } from "./verifyStats";

export const registerVisitor = async (ip: string): Promise<ApiResponse> => {
  try {
    const now = new Date();
    const month = now.getMonth() + 1;
    const year = now.getFullYear();
    const currentMonth = `${String(month).padStart(2, "0")}/${year}`;

    // Verificar que existe el registro del mes
    await verifyStats(currentMonth);

    // Buscar si ya existe un visitante con esa IP en este mes
    const existingVisitor = await prisma.userView.findFirst({
      where: {
        ip: ip,
        statsMes: currentMonth,
      },
    });

    // Si ya existe, no lo registramos de nuevo
    if (existingVisitor) {
      return {
        ok: true,
        msg: "Visitante ya registrado este mes",
      };
    }

    // Si no existe, crear nuevo registro de visita
    await prisma.userView.create({
      data: {
        ip: ip,
        statsMes: currentMonth,
      },
    });

    return {
      ok: true,
      msg: "Visitante registrado correctamente",
    };
  } catch (error) {
    console.log("Error registrando visitante:", error);
    return {
      ok: false,
      msg: "Error al registrar visitante",
    };
  }
};

"use server";

import prisma from "@/app/lib/prisma";
import {
  UpdateConsultaStatusData,
  ConsultaResponse,
} from "@/interfaces/consulta";
import { verifyToken, getToken } from "@/app/lib/auth/jwt";

export async function updateConsultaStatus(
  data: UpdateConsultaStatusData
): Promise<ConsultaResponse> {
  try {
    // Verificar que el usuario sea admin
    const token = await getToken();

    if (!token) {
      return { ok: false, error: "Usuario no autenticado" };
    }

    const payload = await verifyToken(token);

    if (!payload || payload.role !== "admin") {
      return {
        ok: false,
        error: "No tienes permisos para realizar esta acción",
      };
    }

    // Actualizar el estado de la consulta
    const consulta = await prisma.consultas.update({
      where: { id: data.id },
      data: {
        status: data.status,
        updatedAt: new Date(),
      },
      include: {
        product: {
          select: {
            id: true,
            titulo: true,
          },
        },
      },
    });

    return {
      ok: true,
      data: {
        ...consulta,
        productId: consulta.productId === null ? undefined : consulta.productId,
        product: consulta.product === null ? undefined : consulta.product,
        createdAt: consulta.createdAt.toISOString(),
        updatedAt: consulta.updatedAt.toISOString(),
      },
    };
  } catch (error) {
    console.error("Error updating consulta status:", error);
    return {
      ok: false,
      error: "Error al actualizar el estado de la consulta",
    };
  }
}

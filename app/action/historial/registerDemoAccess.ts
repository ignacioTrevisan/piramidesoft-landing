"use server";

import prisma from "@/app/lib/prisma";
import { ApiResponse } from "@/app/interfaces/apiResponse";
import { cookies } from "next/headers";

interface DemoAccessData {
  productId: string;
  productTitle: string;
  userId?: string;
  userName?: string;
}

export const registerDemoAccess = async ({
  productId,
  productTitle,
  userId,
  userName,
}: DemoAccessData): Promise<ApiResponse> => {
  try {
    // Si no se proporciona información del usuario, intentar obtenerla del token
    if (!userId || !userName) {
      try {
        const cookieStore = await cookies();
        const token = cookieStore.get("auth-token"); // Cambiado de "token" a "auth-token"

        if (token?.value) {
          // Usar la función de verificación existente
          const { verifyToken } = await import("@/app/lib/auth/jwt");
          const payload = await verifyToken(token.value);

          if (payload) {
            userId = payload.id;
            userName = payload.name || payload.email;
          }
        }
      } catch (error) {
        console.log("Error getting user info:", error);
      }
    }

    // Crear el mensaje de historial
    const descripcion = userName
      ? `El usuario ${userName} probó la demo de ${productTitle}`
      : `Un usuario anónimo probó la demo de ${productTitle}`;

    // Registrar en el historial
    await prisma.historial.create({
      data: { descripcion },
    });

    // Opcionalmente, también podríamos crear un registro más específico
    // en una tabla dedicada para analytics de demos si existiera

    return {
      ok: true,
      msg: "Acceso a demo registrado exitosamente",
    };
  } catch (error) {
    console.log("Error registering demo access:", error);
    return {
      ok: false,
      msg: "Error al registrar el acceso a la demo",
    };
  }
};

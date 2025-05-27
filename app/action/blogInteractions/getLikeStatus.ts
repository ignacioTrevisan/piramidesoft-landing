"use server";

import prisma from "@/app/lib/prisma";
import { verifyToken, getToken } from "@/app/lib/auth/jwt";

export async function getLikeStatus(
  blogId: string
): Promise<{
  ok: boolean;
  data?: { liked: boolean; totalLikes: number };
  error?: string;
}> {
  try {
    const token = await getToken();

    let liked = false;

    if (token) {
      try {
        const payload = await verifyToken(token);

        if (payload) {
          const existingLike = await prisma.blogLike.findUnique({
            where: {
              blogId_userId: {
                blogId,
                userId: payload.id,
              },
            },
          });

          liked = !!existingLike;
        }
      } catch (error) {
        console.log(error);
        // Token inválido, pero continuamos
        liked = false;
      }
    }

    // Contar total de likes
    const totalLikes = await prisma.blogLike.count({
      where: { blogId },
    });

    return {
      ok: true,
      data: {
        liked,
        totalLikes,
      },
    };
  } catch (error) {
    console.error("Error getting like status:", error);
    return { ok: false, error: "Error al obtener el estado del like" };
  }
}

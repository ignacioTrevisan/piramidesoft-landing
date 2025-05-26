"use server";

import prisma from "@/app/lib/prisma";
import { verifyToken, getToken } from "@/app/lib/auth/jwt";
import { LikeResponse } from "@/interfaces/blogInteractions";

export async function toggleLike(blogId: string): Promise<LikeResponse> {
  try {
    const token = await getToken();

    if (!token) {
      return { ok: false, error: "Usuario no autenticado" };
    }

    const payload = await verifyToken(token);
    
    if (!payload) {
      return { ok: false, error: "Token inválido" };
    }
    
    // Verificar que el blog existe
    const blog = await prisma.blog.findUnique({
      where: { id: blogId }
    });

    if (!blog) {
      return { ok: false, error: "Blog no encontrado" };
    }

    // Verificar si ya existe un like
    const existingLike = await prisma.blogLike.findUnique({
      where: {
        blogId_userId: {
          blogId,
          userId: payload.id
        }
      }
    });

    let liked = false;

    if (existingLike) {
      // Quitar like
      await prisma.blogLike.delete({
        where: { id: existingLike.id }
      });
      liked = false;
    } else {
      // Agregar like
      await prisma.blogLike.create({
        data: {
          blogId,
          userId: payload.id,
        }
      });
      liked = true;
    }

    // Contar total de likes
    const totalLikes = await prisma.blogLike.count({
      where: { blogId }
    });

    return { 
      ok: true, 
      data: {
        liked,
        totalLikes
      }
    };
  } catch (error) {
    console.error('Error toggling like:', error);
    return { ok: false, error: "Error al procesar el like" };
  }
}

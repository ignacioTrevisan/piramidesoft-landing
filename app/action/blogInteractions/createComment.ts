"use server";

import prisma from "@/app/lib/prisma";
import { verifyToken, getToken } from "@/app/lib/auth/jwt";
import { CommentResponse, CreateCommentData } from "@/interfaces/blogInteractions";

export async function createComment(data: CreateCommentData): Promise<CommentResponse> {
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
      where: { id: data.blogId }
    });

    if (!blog) {
      return { ok: false, error: "Blog no encontrado" };
    }

    // Crear el comentario
    const comment = await prisma.blogComment.create({
      data: {
        contenido: data.contenido,
        blogId: data.blogId,
        userId: payload.id,
      },
      include: {
        user: {
          select: {
            id: true,
            name: true,
            email: true,
          }
        }
      }
    });

    return { 
      ok: true, 
      data: {
        ...comment,
        createdAt: comment.createdAt.toISOString(),
        updatedAt: comment.updatedAt.toISOString(),
      }
    };
  } catch (error) {
    console.error('Error creating comment:', error);
    return { ok: false, error: "Error al crear el comentario" };
  }
}

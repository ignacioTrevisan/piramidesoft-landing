"use server";

import prisma from "@/app/lib/prisma";
import { BlogComment } from "@/app/interfaces/blogInteractions";

export async function getCommentsByBlogId(blogId: string): Promise<{ ok: boolean; data?: BlogComment[]; error?: string }> {
  try {
    const comments = await prisma.blogComment.findMany({
      where: { blogId },
      include: {
        user: {
          select: {
            id: true,
            name: true,
            email: true,
          }
        }
      },
      orderBy: {
        createdAt: 'desc'
      }
    });

    return { 
      ok: true, 
      data: comments.map(comment => ({
        ...comment,
        createdAt: comment.createdAt.toISOString(),
        updatedAt: comment.updatedAt.toISOString(),
      }))
    };
  } catch (error) {
    console.error('Error fetching comments:', error);
    return { ok: false, error: "Error al obtener los comentarios" };
  }
}

"use server";

import prisma from "@/app/lib/prisma";
import { ApiResponse } from "@/interfaces/apiResponse";

export async function getBlogById(id: string): Promise<ApiResponse<import("@/interfaces/blog").Blog | null>> {
  try {
    const blog = await prisma.blog.findUnique({
      where: { id },
    });
    
    if (!blog) {
      return { ok: false, msg: "Blog no encontrado" };
    }
    
    return {
      ok: true,
      data: {
        ...blog,
        createdAt: blog.createdAt.toISOString(),
        updatedAt: blog.updatedAt.toISOString(),
      },
    };
  } catch (error) {
    console.error("Error fetching blog by ID:", error);
    return { ok: false, error: "Error al cargar blog" };
  }
}

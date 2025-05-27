"use server";

import prisma from "@/app/lib/prisma";
import { ApiResponse } from "@/app/interfaces/apiResponse";
import { Blog, FormToCreateBlog } from "@/app/interfaces/blog";
import { revalidatePath } from "next/cache";

export async function updateBlog(
  id: string,
  data: FormToCreateBlog
): Promise<ApiResponse<Blog>> {
  try {
    const blog = await prisma.blog.update({
      where: { id },
      data: {
        titulo: data.titulo,
        contenido: data.contenido,
        resumen: data.resumen,
        imagen: data.imagen,
        visible: data.visible,
      },
    });

    revalidatePath("/admin");
    revalidatePath("/blogs");
    
    return {
      ok: true,
      data: {
        ...blog,
        createdAt: blog.createdAt.toISOString(),
        updatedAt: blog.updatedAt.toISOString(),
      },
    };
  } catch (error) {
    console.error("Error updating blog:", error);
    return { ok: false, msg: "Error al actualizar blog" };
  }
}

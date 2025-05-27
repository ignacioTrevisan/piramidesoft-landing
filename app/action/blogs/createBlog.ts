"use server";

import prisma from "@/app/lib/prisma";
import { ApiResponse } from "@/app/interfaces/apiResponse";
import { Blog, FormToCreateBlog } from "@/app/interfaces/blog";
import { revalidatePath } from "next/cache";
import { AddHistorial } from "../historial/addHistorial";

export async function createBlog(
  data: FormToCreateBlog
): Promise<ApiResponse<Blog>> {
  try {
    const blog = await prisma.blog.create({
      data: {
        titulo: data.titulo,
        contenido: data.contenido,
        resumen: data.resumen,
        imagen: data.imagen,
        visible: data.visible,
      },
    });

    // Registrar en historial
    await AddHistorial(`Blog creado: "${blog.titulo}"`);

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
    console.error("Error creating blog:", error);
    return { ok: false, msg: "Error al crear blog" };
  }
}

"use server";

import prisma from "@/app/lib/prisma";
import { ApiResponse } from "@/app/interfaces/apiResponse";
import { revalidatePath } from "next/cache";

export async function changeVisibilityBlog(id: string): Promise<ApiResponse<null>> {
  try {
    const blog = await prisma.blog.findUnique({
      where: { id },
      select: { visible: true },
    });

    if (!blog) {
      return { ok: false, msg: "Blog no encontrado" };
    }

    await prisma.blog.update({
      where: { id },
      data: {
        visible: !blog.visible,
      },
    });

    revalidatePath("/admin");
    revalidatePath("/blogs");
    
    return {
      ok: true,
      data: null,
    };
  } catch (error) {
    console.error("Error changing blog visibility:", error);
    return { ok: false, msg: "Error al cambiar visibilidad del blog" };
  }
}

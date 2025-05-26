"use server";

import prisma from "@/app/lib/prisma";
import { ApiResponse } from "@/interfaces/apiResponse";
import { revalidatePath } from "next/cache";

export async function deleteBlog(id: string): Promise<ApiResponse<null>> {
  try {
    await prisma.blog.delete({
      where: { id },
    });

    revalidatePath("/admin");
    revalidatePath("/blogs");
    
    return {
      ok: true,
      data: null,
    };
  } catch (error) {
    console.error("Error deleting blog:", error);
    return { ok: false, msg: "Error al eliminar blog" };
  }
}

"use server";
import prisma from "@/app/lib/prisma";
import { ApiResponse } from "@/interfaces/apiResponse";
import { revalidatePath } from "next/cache";

export async function changeVisibility(id: string): Promise<ApiResponse> {
  try {
    const product = await prisma.product.findUnique({
      where: { id },
    });

    if (!product) {
      return { ok: false, msg: "Producto no encontrado" };
    }

    const updatedProduct = await prisma.product.update({
      where: { id },
      data: {
        visible: !product.visible,
      },
      include: {
        tipo: true,
        modulos: true,
      },
    });

    revalidatePath("/admin");
    return { ok: true };
  } catch (error) {
    console.error("Error toggling product visibility:", error);
    return { ok: false, msg: "Error al cambiar visibilidad" };
  }
}

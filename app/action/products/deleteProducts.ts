"use server";
import prisma from "@/app/lib/prisma";
import { ApiResponse } from "@/interfaces/apiResponse";
import { revalidatePath } from "next/cache";

export async function deleteProduct(id: string): Promise<ApiResponse> {
  try {
    await prisma.modulo.deleteMany({ where: { productId: id } });
    await prisma.product.delete({
      where: { id },
    });

    revalidatePath("/admin");
    return { ok: true };
  } catch (error) {
    console.error("Error deleting product:", error);
    return { ok: false, msg: "Error al eliminar producto" };
  }
}

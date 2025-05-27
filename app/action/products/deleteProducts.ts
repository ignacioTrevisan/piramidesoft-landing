"use server";
import prisma from "@/app/lib/prisma";
import { ApiResponse } from "@/app/interfaces/apiResponse";
import { revalidatePath } from "next/cache";
import { AddHistorial } from "../historial/addHistorial";

export async function deleteProduct(id: string): Promise<ApiResponse> {
  try {
    // Obtener título antes de eliminar
    const product = await prisma.product.findUnique({
      where: { id },
      select: { titulo: true }
    });

    await prisma.modulo.deleteMany({ where: { productId: id } });
    await prisma.product.delete({
      where: { id },
    });

    // Registrar en historial
    if (product) {
      await AddHistorial(`Producto eliminado: "${product.titulo}"`);
    }

    revalidatePath("/admin");
    return { ok: true };
  } catch (error) {
    console.error("Error deleting product:", error);
    return { ok: false, msg: "Error al eliminar producto" };
  }
}

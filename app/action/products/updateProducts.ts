"use server";
import prisma from "@/app/lib/prisma";
import { ApiResponse } from "@/app/interfaces/apiResponse";
import { FormToCreateProducts, Products } from "@/app/interfaces/products";
import { revalidatePath } from "next/cache";
import { AddHistorial } from "../historial/addHistorial";

export async function updateProduct(
  id: string,
  data: FormToCreateProducts
): Promise<ApiResponse<Products>> {
  try {
    // Eliminar módulos existentes
    await prisma.modulo.deleteMany({
      where: { productId: id },
    });

    // Actualizar producto con nuevos módulos
    const product = await prisma.product.update({
      where: { id },
      data: {
        titulo: data.titulo,
        descripcion: data.descripcion,
        precioAntes: data.precioAntes ? data.precioAntes : null,
        precioAhora: data.precioAhora,
        imagenes: data.imagenes,
        video: data.video,
        url_demo: data.url_demo || null,
        url_full: data.url_full || null,
        visible: data.visible,
        tipoId: data.tipoId,
        modulos: {
          create: data.modulos.map((modulo) => ({
            titulo: modulo.titulo,
            subtitulos: modulo.subtitulos,
          })),
        },
      },
      include: {
        tipo: true,
        modulos: true,
      },
    });

    // Registrar en historial
    await AddHistorial(`Producto actualizado: "${product.titulo}"`);

    revalidatePath("/admin");
    revalidatePath("/");
    revalidatePath("/products");
    return {
      ok: true,
      data: {
        ...product,
        precioAntes:
          product.precioAntes !== null ? Number(product.precioAntes) : null,
        precioAhora: Number(product.precioAhora),
        createdAt: product.createdAt.toISOString(),
        updatedAt: product.updatedAt.toISOString(),
      },
    };
  } catch (error) {
    console.error("Error updating product:", error);
    return { ok: false, msg: "Error al actualizar producto" };
  }
}

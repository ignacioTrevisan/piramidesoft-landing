"use server";

import prisma from "@/app/lib/prisma";
import { ApiResponse } from "@/interfaces/apiResponse";
import { Products } from "@/interfaces/products";
import { revalidatePath } from "next/cache";

export async function getProducts() {
  try {
    const products = await prisma.product.findMany({
      include: {
        tipo: true,
        modulos: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });
    return {
      ok: true,
      data: products.map((p) => {
        return {
          ...p,
          precioAhora: +p.precioAhora,
          precioAntes: p.precioAntes ? +p.precioAntes : null,
        };
      }),
    };
  } catch (error) {
    console.error("Error fetching products:", error);
    return { ok: false, error: "Error al cargar productos" };
  }
}

export async function updateProduct(id: string, data: any) {
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
        precioAntes: data.precioAntes ? parseFloat(data.precioAntes) : null,
        precioAhora: parseFloat(data.precioAhora),
        imagenes: data.imagenes,
        video: data.video,
        url_demo: data.url_demo || null,
        url_full: data.url_full || null,
        visible: data.visible,
        tipoId: data.tipoId,
        modulos: {
          create: data.modulos.map((modulo: any) => ({
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

    revalidatePath("/admin");
    return { success: true, data: product };
  } catch (error) {
    console.error("Error updating product:", error);
    return { success: false, error: "Error al actualizar producto" };
  }
}

export async function deleteProduct(id: string) {
  try {
    await prisma.product.delete({
      where: { id },
    });

    revalidatePath("/admin");
    return { success: true };
  } catch (error) {
    console.error("Error deleting product:", error);
    return { success: false, error: "Error al eliminar producto" };
  }
}

export async function toggleProductVisibility(id: string) {
  try {
    const product = await prisma.product.findUnique({
      where: { id },
    });

    if (!product) {
      return { success: false, error: "Producto no encontrado" };
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
    return { success: true, data: updatedProduct };
  } catch (error) {
    console.error("Error toggling product visibility:", error);
    return { success: false, error: "Error al cambiar visibilidad" };
  }
}

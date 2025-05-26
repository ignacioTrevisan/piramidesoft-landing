"use server";

import prisma from "@/app/lib/prisma";
import { ApiResponse } from "@/interfaces/apiResponse";
import { FormToCreateProducts, Products } from "@/interfaces/products";
import { revalidatePath } from "next/cache";

export async function createProduct(
  data: FormToCreateProducts
): Promise<ApiResponse<Products>> {
  try {
    const product = await prisma.product.create({
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
    console.error("Error creating product:", error);
    return { ok: false, msg: "Error al crear producto" };
  }
}

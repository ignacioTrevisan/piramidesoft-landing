"use server";

import prisma from "@/app/lib/prisma";
import { FormToCreateProducts } from "@/interfaces/products";
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

"use server";

import prisma from "@/app/lib/prisma";
import { ApiResponse } from "@/app/interfaces/apiResponse";
import { revalidatePath } from "next/cache";

// Interface para las actualizaciones de orden
interface ProductOrderUpdate {
  id: string;
  orden: number;
}

/**
 * Actualiza el orden de múltiples productos en una sola transacción
 * @param updates Array de objetos con id y nuevo orden
 * @returns Promise con el resultado de la operación
 */
export async function updateProductsOrder(
  updates: ProductOrderUpdate[]
): Promise<ApiResponse<ProductOrderUpdate[]>> {
  try {
    // Validaciones básicas
    if (!updates || updates.length === 0) {
      return {
        ok: false,
        msg: "No se proporcionaron actualizaciones",
      };
    }

    // Validar que todos los updates tengan id y orden válidos
    const invalidUpdates = updates.filter(
      update => !update.id || 
      typeof update.orden !== 'number' || 
      update.orden < 1 ||
      !Number.isInteger(update.orden)
    );

    if (invalidUpdates.length > 0) {
      return {
        ok: false,
        msg: "Algunas actualizaciones tienen datos inválidos",
      };
    }

    // Verificar que no haya IDs duplicados en el array
    const ids = updates.map(u => u.id);
    const uniqueIds = new Set(ids);
    if (ids.length !== uniqueIds.size) {
      return {
        ok: false,
        msg: "Hay IDs duplicados en las actualizaciones",
      };
    }

    // Verificar que no haya órdenes duplicados
    const ordenes = updates.map(u => u.orden);
    const uniqueOrdenes = new Set(ordenes);
    if (ordenes.length !== uniqueOrdenes.size) {
      return {
        ok: false,
        msg: "Hay órdenes duplicados en las actualizaciones",
      };
    }

    // Verificar que todos los productos existen y son visibles
    const existingProducts = await prisma.product.findMany({
      where: {
        id: { in: ids },
        visible: true
      },
      select: { id: true, titulo: true, orden: true }
    });

    if (existingProducts.length !== updates.length) {
      const missingIds = ids.filter(id => 
        !existingProducts.some(p => p.id === id)
      );
      return {
        ok: false,
        msg: `Algunos productos no existen o no son visibles: ${missingIds.join(', ')}`,
      };
    }

    // Verificar que los órdenes estén en un rango válido (1 hasta el número total de productos visibles)
    const totalVisibleProducts = await prisma.product.count({
      where: { visible: true }
    });

    const invalidOrders = updates.filter(u => u.orden > totalVisibleProducts);
    if (invalidOrders.length > 0) {
      return {
        ok: false,
        msg: `Algunos órdenes exceden el máximo permitido (${totalVisibleProducts})`,
      };
    }

    // Ejecutar todas las actualizaciones en una transacción
    const result = await prisma.$transaction(async (tx) => {
      const updatedProducts: ProductOrderUpdate[] = [];

      // Ejecutar todas las actualizaciones
      for (const update of updates) {
        const updatedProduct = await tx.product.update({
          where: { id: update.id },
          data: { 
            orden: update.orden,
            updatedAt: new Date()
          },
          select: { id: true, orden: true }
        });

        updatedProducts.push({
          id: updatedProduct.id,
          orden: updatedProduct.orden
        });
      }

      return updatedProducts;
    });

    // Revalidar páginas que muestran productos
    revalidatePath("/admin");
    revalidatePath("/");
    revalidatePath("/products");

    // Log de la operación para auditoría
    console.log(`✅ Actualizado orden de ${result.length} productos:`, 
      result.map(p => `ID: ${p.id} -> Orden: ${p.orden}`).join(', ')
    );

    return {
      ok: true,
      msg: `Orden actualizado exitosamente para ${result.length} productos`,
      data: result,
    };

  } catch (error) {
    console.error("❌ Error al actualizar orden de productos:", error);
    
    return {
      ok: false,
      msg: "Error interno del servidor al actualizar el orden",
    };
  }
}

/**
 * Función auxiliar para validar y normalizar órdenes
 * Útil para corregir órdenes duplicados o faltantes
 */
export async function normalizeProductOrder(): Promise<ApiResponse<ProductOrderUpdate[]>> {
  try {
    // Obtener todos los productos visibles ordenados por createdAt
    const products = await prisma.product.findMany({
      where: { visible: true },
      orderBy: [
        { orden: 'asc' },
        { createdAt: 'asc' }
      ],
      select: { id: true, titulo: true, orden: true }
    });

    if (products.length === 0) {
      return {
        ok: true,
        msg: "No hay productos visibles para normalizar",
        data: []
      };
    }

    // Crear actualizaciones para normalizar órdenes (1, 2, 3, 4, ...)
    const updates: ProductOrderUpdate[] = products.map((product, index) => ({
      id: product.id,
      orden: index + 1
    }));

    // Aplicar las actualizaciones
    const result = await updateProductsOrder(updates);

    if (result.ok) {
      console.log(`✅ Normalizado orden de ${products.length} productos`);
    }

    return result;

  } catch (error) {
    console.error("❌ Error al normalizar orden de productos:", error);
    
    return {
      ok: false,
      msg: "Error interno del servidor al normalizar el orden",
    };
  }
}

/**
 * Función para obtener productos ordenados (útil para verificación)
 */
export async function getProductsWithOrder(): Promise<ApiResponse<{id: string;
    titulo: string;
    orden: number;
    tipo: {
        id: string;
        titulo: string;
    };}[]>> {
  try {
    const products = await prisma.product.findMany({
      where: { visible: true },
      orderBy: { orden: 'asc' },
      select: {
        id: true,
        titulo: true,
        orden: true,
        tipo: {
          select: {
            id: true,
            titulo: true
          }
        }
      }
    });

    return {
      ok: true,
      data: products
    };
  } catch (error) {
    console.error("❌ Error al obtener productos ordenados:", error);
    return {
      ok: false,
      msg: "Error al obtener productos ordenados",
    };
  }
}

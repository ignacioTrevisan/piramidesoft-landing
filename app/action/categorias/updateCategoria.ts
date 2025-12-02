"use server";
import { ApiResponse } from "@/app/interfaces/apiResponse";
import { categoryInterface } from "@/app/interfaces/categorias";
import prisma from "@/app/lib/prisma";

export async function UpdateCategoria(
  categoria: categoryInterface
): Promise<ApiResponse> {
  try {
    const categoriaSearch = await prisma.categoryClient.findFirst({
      where: { id: categoria.id },
    });
    if (!categoriaSearch) {
      return {
        ok: false,
        msg: `No se encontró la categoría con id ${categoria.id}`,
      };
    }
    const newCateogry = await prisma.categoryClient.update({
      where: { id: categoria.id },
      data: categoria,
    });

    return {
      ok: true,
      msg: "Actualización de categoria hecha correctamente.",
      data: newCateogry,
    };
  } catch (error) {
    console.log(error);
    return {
      ok: false,
      msg: "Ocurrio un error al intentar actualizar la categoria",
    };
  }
}

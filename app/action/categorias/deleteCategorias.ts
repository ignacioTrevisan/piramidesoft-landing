"use server";
import { ApiResponse } from "@/app/interfaces/apiResponse";
import prisma from "@/app/lib/prisma";

export async function DeleteCatetegoria(id: string): Promise<ApiResponse> {
  try {
    const categoria = await prisma.categoryClient.findFirst({
      where: { id },
    });
    if (!categoria) {
      return {
        ok: false,
        msg: `No se encontró la categoría con id ${id}`,
      };
    }
    await prisma.categoryClient.delete({ where: { id } });
    return {
      ok: true,
      msg: `categoria ${categoria.name} eliminada correctamente`,
    };
  } catch (error) {
    console.log(error);
    return {
      ok: false,
      msg: `Ocurrio un error al intentar eliminar la categoria con id ${id}`,
    };
  }
}

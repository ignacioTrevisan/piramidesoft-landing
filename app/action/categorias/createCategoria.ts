"use server";
import { ApiResponse } from "@/app/interfaces/apiResponse";
import { categoryInterface } from "@/app/interfaces/categorias";
import prisma from "@/app/lib/prisma";

export async function CreateCategoria(
  name: string,
  value: number
): Promise<ApiResponse<categoryInterface>> {
  try {
    const resp = await prisma.categoryClient.create({ data: { name, value } });

    return {
      ok: true,
      msg: `Categoria con id ${resp.id} creada correctamente`,
      data: resp,
    };
  } catch (error) {
    console.log(error);
    return {
      ok: false,
      msg: `Ocurrio un error al intentar crear la categoria`,
    };
  }
}

"use server";
import { ApiResponse } from "@/app/interfaces/apiResponse";
import prisma from "@/app/lib/prisma";

export async function createNewUserCategory(
  userId: string,
  categoryId: string
): Promise<ApiResponse> {
  try {
    await prisma.userCategory.create({
      data: { userId: userId, categoryClientId: categoryId },
    });

    return {
      ok: true,
    };
  } catch (error) {
    console.log(error);
    return {
      ok: false,
      msg: `Ocurrio un error al intentar traer todos los registros de la tabla intermedia entre usuarios y categorias`,
    };
  }
}

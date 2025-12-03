"use server";
import { ApiResponse } from "@/app/interfaces/apiResponse";
import { UserCategoryInterface } from "@/app/interfaces/userCategory";
import prisma from "@/app/lib/prisma";

export async function GetAllUserCategory(): Promise<
  ApiResponse<UserCategoryInterface[]>
> {
  try {
    const resp =
      (await prisma.userCategory.findMany()) as UserCategoryInterface[];
    return {
      ok: true,
      data: resp,
    };
  } catch (error) {
    console.log(error);
    return {
      ok: false,
      msg: `Ocurrio un error al intentar traer todos los registros de la tabla intermedia entre usuarios y categorias`,
    };
  }
}

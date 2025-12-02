"use server";
import { ApiResponse } from "@/app/interfaces/apiResponse";
import { categoryInterface } from "@/app/interfaces/categorias";
import prisma from "@/app/lib/prisma";

export async function GetCategorias(): Promise<
  ApiResponse<categoryInterface[]>
> {
  try {
    const resp = (await prisma.categoryClient.findMany({
      orderBy: {
        id: "asc",
      },
    })) as categoryInterface[];
    return {
      ok: true,
      data: resp,
    };
  } catch (error) {
    console.log(error);
    return {
      ok: false,
      msg: `Ocurrio un error al intentar traer las categorias`,
    };
  }
}

"use server";
import { ApiResponse } from "@/app/interfaces/apiResponse";
import prisma from "@/app/lib/prisma";

export async function RemoveClientToCategory(
  userId: string
): Promise<ApiResponse> {
  try {
    await prisma.userCategory.delete({
      where: { userId },
    });
    return {
      ok: true,
      msg: "Se le removio la categoria al cliente correctamente",
    };
  } catch (error) {
    console.log({ error });
    return {
      ok: false,
      msg: `Ocurrio un error al intentar remover la categoria al cliente con id ${userId}`,
    };
  }
}

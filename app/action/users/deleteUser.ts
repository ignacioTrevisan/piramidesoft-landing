"use server";

import { ApiResponse } from "@/app/interfaces/apiResponse";
import prisma from "@/app/lib/prisma";

export async function DeleteUser(id: string): Promise<ApiResponse> {
  try {
    await prisma.user.delete({ where: { id } });
    return {
      ok: true,
      msg: "Usuario eliminado correctamente",
    };
  } catch (error) {
    console.log(error);
    return {
      ok: false,
      msg: "Ocurrio un error al intentar eliminar el usuario",
    };
  }
}

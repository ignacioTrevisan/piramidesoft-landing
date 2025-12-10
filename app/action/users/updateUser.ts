"use server";

import { ApiResponse } from "@/app/interfaces/apiResponse";
import { userToCreate } from "@/app/interfaces/userInterface";
import prisma from "@/app/lib/prisma";

export async function UpdateUser(
  id: string,
  user: userToCreate
): Promise<ApiResponse> {
  try {
    await prisma.user.update({ where: { id }, data: user });
    return {
      ok: true,
      msg: `${user.name} modificado correctamente`,
    };
  } catch (error) {
    console.log(error);
    return {
      ok: false,
      msg: `Ocurrio un error al intentar modificar al usuario ${user.name}`,
    };
  }
}

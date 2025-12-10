"use server";

import { ApiResponse } from "@/app/interfaces/apiResponse";
import { userToCreate } from "@/app/interfaces/userInterface";
import prisma from "@/app/lib/prisma";

export async function createNewUser(user: userToCreate): Promise<ApiResponse> {
  try {
    await prisma.user.create({ data: user });
    return {
      ok: true,
    };
  } catch (error) {
    console.log(error);
    return {
      ok: false,
      msg: "Ocurrio un error al intentar registrar un nuevo usuario",
    };
  }
}

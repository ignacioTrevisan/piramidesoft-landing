"use server";
import { ApiResponse } from "@/app/interfaces/apiResponse";
import { UserInterface } from "@/app/interfaces/userInterface";
import prisma from "@/app/lib/prisma";

export async function GetAllUsers(): Promise<ApiResponse<UserInterface[]>> {
  try {
    const data = (await prisma.user.findMany()) as UserInterface[];
    console.log({ data });
    return {
      ok: true,
      data: data,
    };
  } catch (error) {
    console.log(error);
    return {
      ok: false,
      msg: `Ocurrio un error al intentar traer todos los usuarios`,
    };
  }
}

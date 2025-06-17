"use server";
import { ApiResponse } from "@/app/interfaces/apiResponse";
import prisma from "@/app/lib/prisma";
import { revalidatePath } from "next/cache";

export async function deleteTipos(id:string):Promise<ApiResponse> {
  try {
    await prisma.tipo.delete({where:{id}})
      revalidatePath("/");
        revalidatePath("/products");  
    return { ok:true};
  } catch (error) {
    console.error("Error fetching tipos:", error);
    return { ok: false, msg: "Error al cargar tipos" };
  }
}

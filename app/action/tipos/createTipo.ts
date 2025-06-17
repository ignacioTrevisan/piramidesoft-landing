"use server";
import { ApiResponse } from "@/app/interfaces/apiResponse";
import prisma from "@/app/lib/prisma";
import { revalidatePath } from "next/cache";

export async function createTipo(tipo:string):Promise<ApiResponse<{id:string, titulo:string}>> {
  try {
    const tipos = await prisma.tipo.create({data:{titulo:tipo}})
      revalidatePath("/");
        revalidatePath("/products");  
    return { ok:true, data:tipos};
  } catch (error) {
    console.error("Error adding new type", error);
    return { ok: false, msg: "Error adding a new type" };
  }
}

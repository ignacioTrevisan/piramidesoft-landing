"use server";
import prisma from "@/app/lib/prisma";

export async function getTipos() {
  try {
    const tipos = await prisma.tipo.findMany({
      orderBy: {
        titulo: "asc",
      },
    });
    return { success: true, data: tipos };
  } catch (error) {
    console.error("Error fetching tipos:", error);
    return { success: false, error: "Error al cargar tipos" };
  }
}

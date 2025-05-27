import { NextRequest, NextResponse } from "next/server";
import prisma from "@/app/lib/prisma";

export async function POST(request: NextRequest) {
  try {
    const { month } = await request.json();

    if (!month) {
      return NextResponse.json(
        { ok: false, msg: "Mes requerido" },
        { status: 400 }
      );
    }

    const stats = await prisma.stats.findFirst({
      where: { mes: month },
      include: {
        userViews: true,
        cantidadDeConsultas: true,
      },
    });

    return NextResponse.json({
      ok: true,
      stats: stats || {
        cantidadDeProductos: 0,
        cantidadDeBlogs: 0,
        userViews: [],
        cantidadDeConsultas: [],
      },
    });
  } catch (error) {
    console.error("Error obteniendo estadísticas actuales:", error);
    return NextResponse.json(
      { ok: false, msg: "Error interno del servidor" },
      { status: 500 }
    );
  }
}

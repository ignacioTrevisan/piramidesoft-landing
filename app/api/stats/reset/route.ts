import { NextRequest, NextResponse } from "next/server";
import prisma from "@/app/lib/prisma";

export async function POST(request: NextRequest) {
  try {
    const now = new Date();
    const currentMonth = now.getMonth() + 1;
    const currentYear = now.getFullYear();
    const monthString = `${String(currentMonth).padStart(2, "0")}/${currentYear}`;

    console.log("Resetting stats for month:", monthString);

    // Eliminar todas las UserViews del mes actual
    await prisma.userView.deleteMany({
      where: {
        statsMes: monthString,
      },
    });

    // Eliminar el registro de Stats del mes actual
    await prisma.stats.deleteMany({
      where: {
        mes: monthString,
      },
    });

    console.log("Stats reset completed");

    // Contar productos y blogs actuales
    const productCount = await prisma.product.count({
      where: { visible: true },
    });

    const blogCount = await prisma.blog.count({
      where: { visible: true },
    });

    // Recrear el registro de stats
    const newStats = await prisma.stats.create({
      data: {
        mes: monthString,
        cantidadDeProductos: productCount,
        cantidadDeBlogs: blogCount,
      },
    });

    console.log("New stats created:", newStats);

    return NextResponse.json({
      ok: true,
      msg: "Stats reseteadas y recreadas correctamente",
      data: newStats,
    });
  } catch (error) {
    console.error("Error resetting stats:", error);
    return NextResponse.json(
      { ok: false, msg: "Error interno del servidor" },
      { status: 500 }
    );
  }
}

import { NextRequest, NextResponse } from "next/server";
import { registerVisitor } from "@/app/action/stats/registerVisitor";

export async function POST(request: NextRequest) {
  try {
    // Obtener la IP del visitante
    const forwarded = request.headers.get("x-forwarded-for");
    const real = request.headers.get("x-real-ip");
    const ip = forwarded?.split(",")[0] || real || "unknown";

    // Registrar el visitante
    const result = await registerVisitor(ip);

    return NextResponse.json(result);
  } catch (error) {
    console.error("Error en la API de visitantes:", error);
    return NextResponse.json(
      { ok: false, msg: "Error interno del servidor" },
      { status: 500 }
    );
  }
}

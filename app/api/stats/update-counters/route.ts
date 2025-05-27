import { NextResponse } from "next/server";
import { updateStatsCounters } from "@/app/action/stats/updateStatsCounters";

export async function POST() {
  try {
    // Actualizar los contadores de stats
    const result = await updateStatsCounters();

    return NextResponse.json(result);
  } catch (error) {
    console.error("Error en la API de actualización de contadores:", error);
    return NextResponse.json(
      { ok: false, msg: "Error interno del servidor" },
      { status: 500 }
    );
  }
}

import { NextResponse } from "next/server";
import { initializeMonthlyStats } from "@/app/action/stats/initializeMonthlyStats";

export async function POST() {
  try {
    console.log("Manual initialization called");

    const result = await initializeMonthlyStats();

    console.log("Manual initialization result:", result);

    return NextResponse.json(result);
  } catch (error) {
    console.error("Error en inicialización manual:", error);
    return NextResponse.json(
      { ok: false, msg: "Error interno del servidor" },
      { status: 500 }
    );
  }
}

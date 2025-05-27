import { NextRequest, NextResponse } from "next/server";
import { debugStats } from "@/app/action/stats/debugStats";

export async function GET(request: NextRequest) {
  try {
    const result = await debugStats();
    return NextResponse.json(result);
  } catch (error) {
    console.error("Error en debug API:", error);
    return NextResponse.json(
      { error: "Error interno del servidor" },
      { status: 500 }
    );
  }
}

import { NextRequest, NextResponse } from "next/server";
import { verifyToken } from "@/app/lib/auth/jwt";

export async function GET(request: NextRequest) {
  try {
    const token = request.cookies.get("auth-token")?.value;

    if (!token) {
      return NextResponse.json(
        { success: false, error: "No autenticado" },
        { status: 401 }
      );
    }

    const payload = await verifyToken(token);

    if (!payload) {
      const response = NextResponse.json(
        { success: false, error: "Token inválido" },
        { status: 401 }
      );
      response.cookies.delete("auth-token");
      return response;
    }

    return NextResponse.json({
      success: true,
      id: payload.id,
      email: payload.email,
      name: payload.name,
      role: payload.role,
    });
  } catch (error) {
    console.error("Get user error:", error);
    return NextResponse.json(
      { success: false, error: "Error interno del servidor" },
      { status: 500 }
    );
  }
}

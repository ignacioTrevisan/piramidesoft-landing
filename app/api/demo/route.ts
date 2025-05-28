import { NextRequest, NextResponse } from "next/server";
import { registerDemoAccess } from "@/app/action/historial/registerDemoAccess";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { productId, productTitle } = body;

    if (!productId || !productTitle) {
      return NextResponse.json(
        { error: "Product ID and title are required" },
        { status: 400 }
      );
    }

    // Registrar el acceso a la demo
    const result = await registerDemoAccess({
      productId,
      productTitle
    });

    if (result.ok) {
      return NextResponse.json({ success: true, message: result.msg });
    } else {
      return NextResponse.json(
        { error: result.msg },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error("Error in demo access API:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

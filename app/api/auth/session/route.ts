import { NextResponse } from "next/server";
import { checkSession } from "@/app/action/session/checkSession";

export async function GET() {
  try {
    console.log("🔎 API Session check called");
    const session = await checkSession();
    console.log("📦 Session result:", session);

    if (!session) {
      console.log("❌ No session found");
      return NextResponse.json(
        { user: null },
        {
          status: 200,
          headers: {
            "Cache-Control":
              "no-store, no-cache, must-revalidate, proxy-revalidate",
            Pragma: "no-cache",
            Expires: "0",
          },
        }
      );
    }

    const userResponse = {
      user: {
        id: session.id,
        email: session.email,
        name: session.name,
        role: session.role,
      },
    };

    console.log("✅ Returning user:", userResponse);
    return NextResponse.json(userResponse, {
      status: 200,
      headers: {
        "Cache-Control":
          "no-store, no-cache, must-revalidate, proxy-revalidate",
        Pragma: "no-cache",
        Expires: "0",
      },
    });
  } catch (error) {
    console.error("🚨 Session check error:", error);
    return NextResponse.json(
      { user: null },
      {
        status: 200,
        headers: {
          "Cache-Control":
            "no-store, no-cache, must-revalidate, proxy-revalidate",
          Pragma: "no-cache",
          Expires: "0",
        },
      }
    );
  }
}

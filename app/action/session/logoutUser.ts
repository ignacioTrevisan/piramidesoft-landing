"use server";

import { cookies } from "next/headers";
import { ApiResponse } from "@/interfaces/apiResponse";

export async function logoutUser(): Promise<ApiResponse> {
  try {
    const cookieStore = await cookies();
    cookieStore.delete('auth-token');
    
    return { 
      ok: true, 
      msg: "Sesión cerrada correctamente" 
    };
  } catch (error) {
    console.error('Logout error:', error);
    return { 
      ok: false, 
      error: "Error al cerrar sesión" 
    };
  }
}

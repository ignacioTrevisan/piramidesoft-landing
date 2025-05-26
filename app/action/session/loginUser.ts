"use server";

import prisma from "@/app/lib/prisma";
import { verifyPassword } from "@/app/lib/auth/password";
import { signToken } from "@/app/lib/auth/jwt";
import { cookies } from "next/headers";
import { ApiResponse } from "@/interfaces/apiResponse";

interface LoginData {
  id: string;
  email: string;
  name: string;
  role: 'admin' | 'user';
}

export async function loginUser(email: string, password: string): Promise<ApiResponse<LoginData>> {
  try {
    // Normalizar email
    const normalizedEmail = email.toLowerCase().trim();
    
    // Buscar usuario por email
    const user = await prisma.user.findUnique({
      where: { email: normalizedEmail }
    });

    if (!user) {
      return { 
        ok: false, 
        error: "Credenciales inválidas" 
      };
    }

    // Verificar contraseña
    const isValidPassword = await verifyPassword(password, user.password);
    
    if (!isValidPassword) {
      return { 
        ok: false, 
        error: "Credenciales inválidas" 
      };
    }

    // Crear token JWT
    const token = await signToken({
      id: user.id,
      email: user.email,
      role: user.role,
      name: user.name
    });

    // Configurar cookie
    const cookieStore = await cookies();
    cookieStore.set('auth-token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 60 * 60 * 24 * 7, // 7 días
      path: '/',
    });

    return { 
      ok: true, 
      data: {
        id: user.id,
        email: user.email,
        name: user.name,
        role: user.role
      }
    };
  } catch (error) {
    console.error('Login error:', error);
    return { 
      ok: false, 
      error: "Error interno del servidor" 
    };
  }
}

"use server";

import prisma from "@/app/lib/prisma";
import { hashPassword } from "@/app/lib/auth/password";
import { signToken } from "@/app/lib/auth/jwt";
import { cookies } from "next/headers";
import { ApiResponse } from "@/app/interfaces/apiResponse";

interface RegisterData {
  id: string;
  email: string;
  name: string;
  role: 'admin' | 'user';
}

export async function registerUser(
  name: string,
  email: string,
  password: string
): Promise<ApiResponse<RegisterData>> {
  try {
    // Normalizar email
    const normalizedEmail = email.toLowerCase().trim();
    
    // Verificar si el usuario ya existe
    const existingUser = await prisma.user.findUnique({
      where: { email: normalizedEmail }
    });

    if (existingUser) {
      return { 
        ok: false, 
        error: "Ya existe un usuario con este email" 
      };
    }

    // Validaciones básicas
    if (!name || name.trim().length < 2) {
      return { 
        ok: false, 
        error: "El nombre debe tener al menos 2 caracteres" 
      };
    }

    if (!email || !email.includes('@')) {
      return { 
        ok: false, 
        error: "Email inválido" 
      };
    }

    if (!password || password.length < 6) {
      return { 
        ok: false, 
        error: "La contraseña debe tener al menos 6 caracteres" 
      };
    }

    // Hash de la contraseña
    const hashedPassword = await hashPassword(password);

    // Crear el usuario con rol 'user' por defecto
    const newUser = await prisma.user.create({
      data: {
        name: name.trim(),
        email: normalizedEmail,
        password: hashedPassword,
        role: 'user' // Siempre será user para registros públicos
      }
    });

    // Crear token JWT
    const token = await signToken({
      id: newUser.id,
      email: newUser.email,
      role: newUser.role,
      name: newUser.name
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
        id: newUser.id,
        email: newUser.email,
        name: newUser.name,
        role: newUser.role
      }
    };
  } catch (error) {
    console.error('Register error:', error);
    return { 
      ok: false, 
      error: "Error interno del servidor" 
    };
  }
}

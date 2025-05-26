import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/app/lib/prisma';
import { verifyPassword } from '@/app/lib/auth/password';
import { signToken, setToken } from '@/app/lib/auth/jwt';

export async function loginAction(email: string, password: string) {
  try {
    // Buscar usuario por email
    const user = await prisma.user.findUnique({
      where: { email }
    });

    if (!user) {
      return { 
        success: false, 
        error: 'Credenciales inválidas' 
      };
    }

    // Verificar contraseña
    const isValidPassword = await verifyPassword(password, user.password);
    
    if (!isValidPassword) {
      return { 
        success: false, 
        error: 'Credenciales inválidas' 
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
    await setToken(token);

    return { 
      success: true, 
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
        role: user.role
      }
    };
  } catch (error) {
    console.error('Login error:', error);
    return { 
      success: false, 
      error: 'Error interno del servidor' 
    };
  }
}

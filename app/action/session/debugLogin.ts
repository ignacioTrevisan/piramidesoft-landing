"use server";

import prisma from "@/app/lib/prisma";
import { verifyPassword } from "@/app/lib/auth/password";

export async function debugLoginUser(email: string, password: string) {
  try {
    const normalizedEmail = email.toLowerCase().trim();
    console.log("🔍 Debug Login - Email original:", email);
    console.log("🔍 Debug Login - Email normalizado:", normalizedEmail);

    // Buscar usuario por email
    const user = await prisma.user.findUnique({
      where: { email: normalizedEmail },
    });

    console.log("👤 Usuario encontrado:", user ? "SÍ" : "NO");

    if (!user) {
      console.log("❌ No existe usuario con email:", normalizedEmail);
      return {
        ok: false,
        error: "Usuario no encontrado",
        debug: { userExists: false, email: normalizedEmail },
      };
    }

    console.log("📧 Email en DB:", user.email);
    console.log("👤 Nombre en DB:", user.name);
    console.log("🎭 Rol en DB:", user.role);
    console.log(
      "🔒 Hash en DB (primeros 20 chars):",
      user.password.substring(0, 20)
    );
    console.log("🔑 Password recibido:", password);

    // Verificar contraseña
    const isValidPassword = await verifyPassword(password, user.password);
    console.log("✅ Contraseña válida:", isValidPassword);

    if (!isValidPassword) {
      return {
        ok: false,
        error: "Contraseña incorrecta",
        debug: {
          userExists: true,
          email: user.email,
          passwordCheck: false,
          hashPreview: user.password.substring(0, 20),
        },
      };
    }

    return {
      ok: true,
      data: {
        id: user.id,
        email: user.email,
        name: user.name,
        role: user.role,
      },
      debug: {
        userExists: true,
        passwordCheck: true,
        email: user.email,
      },
    };
  } catch (error) {
    console.error("🚨 Debug Login error:", error);
    return {
      ok: false,
      error: "Error interno del servidor",
    };
  }
}

export async function getAllUsers() {
  try {
    const users = await prisma.user.findMany({
      select: {
        id: true,
        email: true,
        name: true,
        role: true,
        password: true, // Solo para debug
      },
    });

    console.log("📋 Usuarios en la base de datos:");
    users.forEach((user, index) => {
      console.log(
        `${index + 1}. Email: ${user.email}, Nombre: ${user.name}, Rol: ${
          user.role
        }`
      );
      console.log(`   Hash: ${user.password.substring(0, 30)}...`);
    });

    return {
      ok: true,
      data: users.map((user) => ({
        ...user,
        password: `${user.password.substring(0, 30)}...`, // Ocultar hash completo
      })),
    };
  } catch (error) {
    console.error("Error al obtener usuarios:", error);
    return {
      ok: false,
    };
  }
}

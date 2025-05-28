"use server";
import { PrismaClient } from "@/data";
import { revalidatePath } from "next/cache";

const prisma = new PrismaClient();

// Productos

// Tipos

// Blogs
export async function getBlogs() {
  try {
    const blogs = await prisma.blog.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
    return { success: true, data: blogs };
  } catch (error) {
    console.error("Error fetching blogs:", error);
    return { success: false, error: "Error al cargar blogs" };
  }
}

interface blog {
  titulo: string;
  contenido: string;
  resumen: string;
  imagen: string;
  visible: boolean;
}
export async function createBlog(data: blog) {
  try {
    const blog = await prisma.blog.create({
      data: {
        titulo: data.titulo,
        contenido: data.contenido,
        resumen: data.resumen,
        imagen: data.imagen,
        visible: data.visible,
      },
    });

    revalidatePath("/admin");
    return { success: true, data: blog };
  } catch (error) {
    console.error("Error creating blog:", error);
    return { success: false, error: "Error al crear blog" };
  }
}

export async function updateBlog(id: string, data: blog) {
  try {
    const blog = await prisma.blog.update({
      where: { id },
      data: {
        titulo: data.titulo,
        contenido: data.contenido,
        resumen: data.resumen,
        imagen: data.imagen,
        visible: data.visible,
      },
    });

    revalidatePath("/admin");
    return { success: true, data: blog };
  } catch (error) {
    console.error("Error updating blog:", error);
    return { success: false, error: "Error al actualizar blog" };
  }
}

export async function deleteBlog(id: string) {
  try {
    await prisma.blog.delete({
      where: { id },
    });

    revalidatePath("/admin");
    return { success: true };
  } catch (error) {
    console.error("Error deleting blog:", error);
    return { success: false, error: "Error al eliminar blog" };
  }
}

export async function toggleBlogVisibility(id: string) {
  try {
    const blog = await prisma.blog.findUnique({
      where: { id },
    });

    if (!blog) {
      return { success: false, error: "Blog no encontrado" };
    }

    const updatedBlog = await prisma.blog.update({
      where: { id },
      data: {
        visible: !blog.visible,
      },
    });

    revalidatePath("/admin");
    return { success: true, data: updatedBlog };
  } catch (error) {
    console.error("Error toggling blog visibility:", error);
    return { success: false, error: "Error al cambiar visibilidad" };
  }
}

// Consultas
export async function getConsultas() {
  try {
    const consultas = await prisma.consultas.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
    return { success: true, data: consultas };
  } catch (error) {
    console.error("Error fetching consultas:", error);
    return { success: false, error: "Error al cargar consultas" };
  }
}

export async function deleteConsulta(id: string) {
  try {
    await prisma.consultas.delete({
      where: { id },
    });

    revalidatePath("/admin");
    return { success: true };
  } catch (error) {
    console.error("Error deleting consulta:", error);
    return { success: false, error: "Error al eliminar consulta" };
  }
}

// Estadísticas del Dashboard
export async function getDashboardStats() {
  try {
    const [totalProducts, activeProducts, totalBlogs, totalConsultas] =
      await Promise.all([
        prisma.product.count(),
        prisma.product.count({ where: { visible: true } }),
        prisma.blog.count(),
        prisma.consultas.count(),
      ]);

    return {
      success: true,
      data: {
        totalProducts,
        activeProducts,
        totalBlogs,
        totalConsultas,
      },
    };
  } catch (error) {
    console.error("Error fetching dashboard stats:", error);
    return { success: false, error: "Error al cargar estadísticas" };
  }
}

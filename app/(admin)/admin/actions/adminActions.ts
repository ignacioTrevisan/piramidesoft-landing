"use server";
import { PrismaClient } from "@/app/generated/prisma";
import { revalidatePath } from "next/cache";

const prisma = new PrismaClient();

// Productos
export async function getProducts() {
  try {
    const products = await prisma.product.findMany({
      include: {
        tipo: true,
        modulos: true,
      },
      orderBy: {
        createdAt: 'desc'
      }
    });
    return { success: true, data: products };
  } catch (error) {
    console.error("Error fetching products:", error);
    return { success: false, error: "Error al cargar productos" };
  }
}

export async function createProduct(data: any) {
  try {
    const product = await prisma.product.create({
      data: {
        titulo: data.titulo,
        descripcion: data.descripcion,
        precioAntes: data.precioAntes ? parseFloat(data.precioAntes) : null,
        precioAhora: parseFloat(data.precioAhora),
        imagenes: data.imagenes,
        video: data.video,
        url_demo: data.url_demo || null,
        url_full: data.url_full || null,
        visible: data.visible,
        tipoId: data.tipoId,
        modulos: {
          create: data.modulos.map((modulo: any) => ({
            titulo: modulo.titulo,
            subtitulos: modulo.subtitulos,
          }))
        }
      },
      include: {
        tipo: true,
        modulos: true,
      }
    });
    
    revalidatePath('/admin');
    return { success: true, data: product };
  } catch (error) {
    console.error("Error creating product:", error);
    return { success: false, error: "Error al crear producto" };
  }
}

export async function updateProduct(id: string, data: any) {
  try {
    // Eliminar módulos existentes
    await prisma.modulo.deleteMany({
      where: { productId: id }
    });

    // Actualizar producto con nuevos módulos
    const product = await prisma.product.update({
      where: { id },
      data: {
        titulo: data.titulo,
        descripcion: data.descripcion,
        precioAntes: data.precioAntes ? parseFloat(data.precioAntes) : null,
        precioAhora: parseFloat(data.precioAhora),
        imagenes: data.imagenes,
        video: data.video,
        url_demo: data.url_demo || null,
        url_full: data.url_full || null,
        visible: data.visible,
        tipoId: data.tipoId,
        modulos: {
          create: data.modulos.map((modulo: any) => ({
            titulo: modulo.titulo,
            subtitulos: modulo.subtitulos,
          }))
        }
      },
      include: {
        tipo: true,
        modulos: true,
      }
    });
    
    revalidatePath('/admin');
    return { success: true, data: product };
  } catch (error) {
    console.error("Error updating product:", error);
    return { success: false, error: "Error al actualizar producto" };
  }
}

export async function deleteProduct(id: string) {
  try {
    await prisma.product.delete({
      where: { id }
    });
    
    revalidatePath('/admin');
    return { success: true };
  } catch (error) {
    console.error("Error deleting product:", error);
    return { success: false, error: "Error al eliminar producto" };
  }
}

export async function toggleProductVisibility(id: string) {
  try {
    const product = await prisma.product.findUnique({
      where: { id }
    });

    if (!product) {
      return { success: false, error: "Producto no encontrado" };
    }

    const updatedProduct = await prisma.product.update({
      where: { id },
      data: {
        visible: !product.visible
      },
      include: {
        tipo: true,
        modulos: true,
      }
    });
    
    revalidatePath('/admin');
    return { success: true, data: updatedProduct };
  } catch (error) {
    console.error("Error toggling product visibility:", error);
    return { success: false, error: "Error al cambiar visibilidad" };
  }
}

// Tipos
export async function getTipos() {
  try {
    const tipos = await prisma.tipo.findMany({
      orderBy: {
        titulo: 'asc'
      }
    });
    return { success: true, data: tipos };
  } catch (error) {
    console.error("Error fetching tipos:", error);
    return { success: false, error: "Error al cargar tipos" };
  }
}

// Blogs
export async function getBlogs() {
  try {
    const blogs = await prisma.blog.findMany({
      orderBy: {
        createdAt: 'desc'
      }
    });
    return { success: true, data: blogs };
  } catch (error) {
    console.error("Error fetching blogs:", error);
    return { success: false, error: "Error al cargar blogs" };
  }
}

export async function createBlog(data: any) {
  try {
    const blog = await prisma.blog.create({
      data: {
        titulo: data.titulo,
        contenido: data.contenido,
        resumen: data.resumen,
        imagen: data.imagen,
        visible: data.visible,
      }
    });
    
    revalidatePath('/admin');
    return { success: true, data: blog };
  } catch (error) {
    console.error("Error creating blog:", error);
    return { success: false, error: "Error al crear blog" };
  }
}

export async function updateBlog(id: string, data: any) {
  try {
    const blog = await prisma.blog.update({
      where: { id },
      data: {
        titulo: data.titulo,
        contenido: data.contenido,
        resumen: data.resumen,
        imagen: data.imagen,
        visible: data.visible,
      }
    });
    
    revalidatePath('/admin');
    return { success: true, data: blog };
  } catch (error) {
    console.error("Error updating blog:", error);
    return { success: false, error: "Error al actualizar blog" };
  }
}

export async function deleteBlog(id: string) {
  try {
    await prisma.blog.delete({
      where: { id }
    });
    
    revalidatePath('/admin');
    return { success: true };
  } catch (error) {
    console.error("Error deleting blog:", error);
    return { success: false, error: "Error al eliminar blog" };
  }
}

export async function toggleBlogVisibility(id: string) {
  try {
    const blog = await prisma.blog.findUnique({
      where: { id }
    });

    if (!blog) {
      return { success: false, error: "Blog no encontrado" };
    }

    const updatedBlog = await prisma.blog.update({
      where: { id },
      data: {
        visible: !blog.visible
      }
    });
    
    revalidatePath('/admin');
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
        createdAt: 'desc'
      }
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
      where: { id }
    });
    
    revalidatePath('/admin');
    return { success: true };
  } catch (error) {
    console.error("Error deleting consulta:", error);
    return { success: false, error: "Error al eliminar consulta" };
  }
}

// Estadísticas del Dashboard
export async function getDashboardStats() {
  try {
    const [totalProducts, activeProducts, totalBlogs, totalConsultas] = await Promise.all([
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
      }
    };
  } catch (error) {
    console.error("Error fetching dashboard stats:", error);
    return { success: false, error: "Error al cargar estadísticas" };
  }
}

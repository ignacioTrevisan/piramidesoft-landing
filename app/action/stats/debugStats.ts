"use server";
import prisma from "@/app/lib/prisma";

export const debugStats = async () => {
  try {
    console.log("=== DEBUG STATS ===");
    
    // Verificar productos
    const productos = await prisma.product.findMany({
      select: {
        id: true,
        titulo: true,
        visible: true,
      },
    });
    console.log("Productos encontrados:", productos.length);
    console.log("Productos visibles:", productos.filter(p => p.visible).length);
    
    // Verificar blogs
    const blogs = await prisma.blog.findMany({
      select: {
        id: true,
        titulo: true,
        visible: true,
      },
    });
    console.log("Blogs encontrados:", blogs.length);
    console.log("Blogs visibles:", blogs.filter(b => b.visible).length);
    
    // Verificar stats del mes actual
    const now = new Date();
    const currentMonth = `${String(now.getMonth() + 1).padStart(2, "0")}/${now.getFullYear()}`;
    console.log("Mes actual:", currentMonth);
    
    const stats = await prisma.stats.findFirst({
      where: { mes: currentMonth },
      include: {
        userViews: true,
        cantidadDeConsultas: true,
      },
    });
    
    console.log("Stats encontradas:", stats);
    
    if (stats) {
      console.log("Visitantes registrados:", stats.userViews.length);
      console.log("Consultas:", stats.cantidadDeConsultas.length);
    }
    
    // Verificar todos los registros de stats
    const allStats = await prisma.stats.findMany({
      include: {
        userViews: true,
        cantidadDeConsultas: true,
      },
    });
    console.log("Todos los stats:", allStats);
    
    return {
      productos: productos.length,
      productosVisibles: productos.filter(p => p.visible).length,
      blogs: blogs.length,
      blogsVisibles: blogs.filter(b => b.visible).length,
      currentMonth,
      stats,
      allStats,
    };
  } catch (error) {
    console.error("Error en debug:", error);
    return { error: error.message };
  }
};

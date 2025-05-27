"use server";

import prisma from "@/app/lib/prisma";
import { ApiResponse } from "@/app/interfaces/apiResponse";

export async function getVisibleBlogs(): Promise<ApiResponse<import("@/app/interfaces/blog").Blog[]>> {
  try {
    const blogs = await prisma.blog.findMany({
      where: {
        visible: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });
    
    return {
      ok: true,
      data: blogs.map((blog) => ({
        ...blog,
        createdAt: blog.createdAt.toISOString(),
        updatedAt: blog.updatedAt.toISOString(),
      })),
    };
  } catch (error) {
    console.error("Error fetching visible blogs:", error);
    return { ok: false, error: "Error al cargar blogs" };
  }
}

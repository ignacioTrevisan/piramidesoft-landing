import { getVisibleBlogs } from "@/app/action/blogs";
import { BlogList } from "./blogList";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog Tecnológico",
  description: "Lee nuestros artículos sobre tecnología, desarrollo de software, tendencias digitales y consejos para empresas. Manténete actualizado con las últimas novedades del sector tecnológico.",
  keywords: ["blog tecnológico", "desarrollo software", "tendencias digitales", "tecnología empresarial", "innovación"],
  openGraph: {
    title: "Blog Tecnológico - Piramide Soft",
    description: "Artículos sobre tecnología, desarrollo de software y tendencias digitales para empresas.",
    images: ["/logo_2.png"],
  },
};

export default async function BlogsPage() {
  const response = await getVisibleBlogs();
  const blogs = response.ok && response.data ? response.data : [];

  return <BlogList initialBlogs={blogs} />;
}

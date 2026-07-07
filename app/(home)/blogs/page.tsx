import { getVisibleBlogs } from "@/app/action/blogs";
import { BlogList } from "./blogList";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog de Tecnología y Software en Entre Ríos",
  description:
    "Artículos sobre desarrollo de software, transformación digital, sistemas de gestión, e-commerce y tendencias tecnológicas para empresas de Entre Ríos y Argentina.",
  keywords: [
    "blog tecnología Entre Ríos",
    "desarrollo de software Argentina",
    "transformación digital pymes",
    "noticias tecnología Entre Ríos",
    "tendencias software",
  ],
  alternates: { canonical: "/blogs" },
  openGraph: {
    title: "Blog de Tecnología y Software en Entre Ríos | Piramide Soft",
    description:
      "Artículos sobre desarrollo de software, transformación digital y tendencias tecnológicas para empresas de Entre Ríos.",
    url: "https://piramidesoluciones.com/blogs",
    images: ["/logo_2.png"],
    type: "website",
    locale: "es_AR",
  },
};

export default async function BlogsPage() {
  const response = await getVisibleBlogs();
  const blogs = response.ok && response.data ? response.data : [];

  return <BlogList initialBlogs={blogs} />;
}

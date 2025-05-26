import { getBlogById } from "@/app/action/blogs";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import ShareButton from "./ShareButton";

interface BlogPageProps {
  params: {
    id: string;
  };
}

export default async function BlogPage({ params }: BlogPageProps) {
  const response = await getBlogById(params.id);

  if (!response.ok || !response.data) {
    notFound();
  }

  const blog = response.data;

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("es-AR", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <article className="container mx-auto px-4 py-12 max-w-4xl">
      {/* Navigation */}
      <nav className="mb-8">
        <Link
          href="/blogs"
          className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium transition-colors"
        >
          <svg
            className="w-4 h-4 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Volver al blog
        </Link>
      </nav>

      {/* Header */}
      <header className="mb-8">
        <div className="text-sm text-gray-500 mb-4">
          {formatDate(blog.createdAt)}
        </div>

        <h1 className="text-4xl font-bold text-gray-900 mb-6">{blog.titulo}</h1>

        <p className="text-xl text-gray-600 leading-relaxed">{blog.resumen}</p>
      </header>

      {/* Featured Image */}
      <div className="relative w-full h-96 mb-8 rounded-xl overflow-hidden">
        <Image
          src={blog.imagen}
          alt={blog.titulo}
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Content */}
      <div className="prose prose-lg max-w-none">
        <div
          className="text-gray-700 leading-relaxed"
          style={{ whiteSpace: "pre-wrap" }}
        >
          {blog.contenido}
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-12 pt-8 border-t border-gray-200">
        <div className="text-sm text-gray-500 mb-4">
          Publicado el {formatDate(blog.createdAt)}
          {blog.updatedAt !== blog.createdAt && (
            <span> • Actualizado el {formatDate(blog.updatedAt)}</span>
          )}
        </div>

        <div className="flex items-center justify-between">
          <Link
            href="/blogs"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
          >
            Ver más artículos
          </Link>

          {/* Componente de compartir se renderiza solo en el cliente */}
          <ShareButton blog={blog} />
        </div>
      </footer>
    </article>
  );
}

export async function generateMetadata({ params }: BlogPageProps) {
  const response = await getBlogById(params.id);

  if (!response.ok || !response.data) {
    return {
      title: "Blog no encontrado",
    };
  }

  const blog = response.data;

  return {
    title: blog.titulo,
    description: blog.resumen,
    openGraph: {
      title: blog.titulo,
      description: blog.resumen,
      images: [blog.imagen],
      type: "article",
      publishedTime: blog.createdAt,
      modifiedTime: blog.updatedAt,
    },
    twitter: {
      card: "summary_large_image",
      title: blog.titulo,
      description: blog.resumen,
      images: [blog.imagen],
    },
  };
}

"use client";

import React, { useEffect, useRef, useState } from "react";
import { Blog } from "@/interfaces/blog";
import Link from "next/link";
import Image from "next/image";
import { BlogStats } from "./BlogStats";

interface BlogListProps {
  initialBlogs: Blog[];
}

const BlogCard: React.FC<{ blog: Blog; index: number; isVisible: boolean }> = ({
  blog,
  index,
  isVisible,
}) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("es-AR", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const formatReadTime = (content: string) => {
    const words = content.split(" ").length;
    const readTime = Math.ceil(words / 200); // Asumiendo 200 palabras por minuto
    return `${readTime} min de lectura`;
  };

  return (
    <article
      className={`bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-500 ease-out overflow-hidden group ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{
        transitionDelay: `${index * 100}ms`,
      }}
    >
      <div className="relative h-64 w-full overflow-hidden">
        {!imageLoaded && (
          <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center">
            <svg
              className="w-12 h-12 text-gray-400"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        )}
        <Image
          src={blog.imagen}
          alt={blog.titulo}
          fill
          className={`object-cover transition-all duration-500 group-hover:scale-110 ${
            imageLoaded ? "opacity-100" : "opacity-0"
          }`}
          onLoad={() => setImageLoaded(true)}
          onError={(e) => {
            (e.target as HTMLImageElement).src = "/placeholder-blog.jpg";
            setImageLoaded(true);
          }}
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-gray-700">
          {formatDate(blog.createdAt)}
        </div>

        <div className="absolute bottom-4 left-4 bg-[#2563EB]/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {formatReadTime(blog.contenido)}
        </div>
      </div>

      <div className="p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-[#2563EB] transition-colors duration-300">
          {blog.titulo}
        </h2>

        <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed">
          {blog.resumen}
        </p>

        {/* Estadísticas de interacción */}
        <div className="mb-6">
          <BlogStats blogId={blog.id} />
        </div>

        <Link
          href={`/blogs/${blog.id}`}
          className="inline-flex items-center text-[#2563EB] hover:text-[#1E40AF] font-semibold transition-all duration-300 group-hover:translate-x-1"
        >
          Leer artículo completo
          <svg
            className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </Link>
      </div>
    </article>
  );
};

export const BlogList: React.FC<BlogListProps> = ({ initialBlogs }) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  if (initialBlogs.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 flex items-center justify-center">
        <div className="text-center py-12 max-w-md mx-auto">
          <div className="w-24 h-24 mx-auto mb-6 bg-gray-200 rounded-full flex items-center justify-center">
            <svg
              className="w-12 h-12 text-gray-400"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            No hay blogs disponibles
          </h3>
          <p className="text-gray-600 mb-6">
            Estamos trabajando en nuevo contenido. ¡Vuelve pronto!
          </p>
          <Link
            href="/"
            className="inline-flex items-center bg-[#2563EB] hover:bg-[#1E40AF] text-white px-6 py-3 rounded-lg font-medium transition-colors"
          >
            Volver al inicio
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <div ref={sectionRef} className="container mx-auto px-4 md:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex justify-between space-x-8 mb-10">
            <hr
              className={`w-full border-[#2563EB] border-1 transition-all duration-1000 ease-out ${
                isVisible ? "opacity-100 scale-x-100" : "opacity-50 scale-x-0"
              }`}
              style={{ transformOrigin: "left" }}
            />
            <hr
              className={`w-full border-[#2563EB] border-1 transition-all duration-1000 ease-out ${
                isVisible ? "opacity-100 scale-x-100" : "opacity-50 scale-x-0"
              }`}
              style={{ transformOrigin: "right" }}
            />
          </div>

          <h1
            className={`text-4xl md:text-5xl lg:text-6xl font-bold text-[#2563EB] mb-6 transition-all duration-700 ease-out ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-5"
            }`}
            style={{ transitionDelay: "300ms" }}
          >
            Nuestro <span className="text-gray-800">Blog</span>
          </h1>

          <p
            className={`text-xl text-gray-600 max-w-3xl mx-auto transition-all duration-700 ease-out ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-5"
            }`}
            style={{ transitionDelay: "450ms" }}
          >
            Descubre las últimas tendencias en tecnología y software
            empresarial. Artículos escritos por nuestro equipo de expertos.
          </p>

          <div
            className={`mt-6 text-gray-500 transition-all duration-700 ease-out ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-5"
            }`}
            style={{ transitionDelay: "600ms" }}
          >
            {initialBlogs.length}{" "}
            {initialBlogs.length === 1
              ? "artículo disponible"
              : "artículos disponibles"}
          </div>
        </div>

        {/* Grid de blogs */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {initialBlogs.map((blog, index) => (
            <BlogCard
              key={blog.id}
              blog={blog}
              index={index}
              isVisible={isVisible}
            />
          ))}
        </div>

        {/* Botón volver al inicio */}
        <div
          className={`text-center mt-16 transition-all duration-700 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
          style={{ transitionDelay: `${initialBlogs.length * 100 + 200}ms` }}
        >
          <Link
            href="/"
            className="inline-flex items-center bg-gray-600 hover:bg-gray-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg group"
          >
            <svg
              className="w-5 h-5 mr-3 transition-transform duration-300 group-hover:-translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M7 16l-4-4m0 0l4-4m-4 4h18"
              />
            </svg>
            Volver al inicio
          </Link>
        </div>
      </div>
    </div>
  );
};

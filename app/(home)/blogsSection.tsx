"use client";

import React, { useEffect, useRef, useState } from "react";
import { getVisibleBlogs } from "@/app/action/blogs";
import { Blog } from "@/interfaces/blog";
import Link from "next/link";
import Image from "next/image";

interface BlogCardProps {
  blog: Blog;
  index: number;
  isVisible: boolean;
}

const BlogCard: React.FC<BlogCardProps> = ({ blog, index, isVisible }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('es-AR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <article
      className={`bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-500 ease-out overflow-hidden group ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ 
        transitionDelay: `${600 + (index * 150)}ms` 
      }}
    >
      {/* Imagen del blog */}
      <div className="relative h-48 w-full overflow-hidden">
        {!imageLoaded && (
          <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center">
            <svg className="w-12 h-12 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
            </svg>
          </div>
        )}
        <Image
          src={blog.imagen}
          alt={blog.titulo}
          fill
          className={`object-cover transition-all duration-500 group-hover:scale-110 ${
            imageLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          onLoad={() => setImageLoaded(true)}
          onError={(e) => {
            (e.target as HTMLImageElement).src = "/placeholder-blog.jpg";
            setImageLoaded(true);
          }}
        />
        
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        {/* Fecha flotante */}
        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-gray-700">
          {formatDate(blog.createdAt)}
        </div>
      </div>
      
      {/* Contenido de la carta */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-[#2563EB] transition-colors duration-300">
          {blog.titulo}
        </h3>
        
        <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed">
          {blog.resumen}
        </p>
        
        <Link
          href={`/blogs/${blog.id}`}
          className="inline-flex items-center text-[#2563EB] hover:text-[#1E40AF] font-semibold transition-all duration-300 group-hover:translate-x-1"
        >
          Leer artículo completo
          <svg
            className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1"
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

export const BlogsSection = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);
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
        rootMargin: "0px 0px -50px 0px"
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

  useEffect(() => {
    const loadBlogs = async () => {
      try {
        const response = await getVisibleBlogs();
        if (response.ok && response.data) {
          // Mostrar solo los últimos 3 blogs para el preview
          setBlogs(response.data.slice(0, 3));
        }
      } catch (error) {
        console.error("Error loading blogs:", error);
      } finally {
        setLoading(false);
      }
    };

    loadBlogs();
  }, []);

  if (loading) {
    return (
      <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-[#2563EB] mb-4">
              Últimos <span className="text-gray-800">Artículos</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Mantente al día con las últimas tendencias tecnológicas
            </p>
          </div>
          
          {/* Loading skeleton */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white rounded-xl shadow-md overflow-hidden animate-pulse">
                <div className="h-48 bg-gray-200"></div>
                <div className="p-6">
                  <div className="h-4 bg-gray-200 rounded mb-3"></div>
                  <div className="h-6 bg-gray-200 rounded mb-3"></div>
                  <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (blogs.length === 0) {
    return null; // No mostrar la sección si no hay blogs
  }

  return (
    <section 
      id="blogs"
      ref={sectionRef}
      className="py-16 bg-gradient-to-br from-gray-50 to-blue-50 overflow-hidden"
    >
      <div className="container mx-auto px-4 md:px-8">
        {/* Divisores animados */}
        <div className="flex justify-between space-x-8 mb-10">
          <hr 
            className={`w-full border-[#2563EB] border-1 transition-all duration-1000 ease-out ${
              isVisible ? 'opacity-100 scale-x-100' : 'opacity-50 scale-x-0'
            }`}
            style={{ transformOrigin: 'left' }}
          />
          <hr 
            className={`w-full border-[#2563EB] border-1 transition-all duration-1000 ease-out ${
              isVisible ? 'opacity-100 scale-x-100' : 'opacity-50 scale-x-0'
            }`}
            style={{ transformOrigin: 'right' }}
          />
        </div>

        {/* Título animado */}
        <div className="text-center mb-12">
          <h2 
            className={`text-4xl md:text-5xl lg:text-6xl font-bold text-[#2563EB] mb-4 transition-all duration-700 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
            }`}
            style={{ transitionDelay: '300ms' }}
          >
            Últimos <span className="text-gray-800">Artículos</span>
          </h2>
          <p 
            className={`text-xl text-gray-600 max-w-3xl mx-auto transition-all duration-700 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
            }`}
            style={{ transitionDelay: '450ms' }}
          >
            Mantente al día con las últimas tendencias en tecnología y software empresarial
          </p>
        </div>

        {/* Grid de blogs */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {blogs.map((blog, index) => (
            <BlogCard 
              key={blog.id} 
              blog={blog} 
              index={index} 
              isVisible={isVisible}
            />
          ))}
        </div>

        {/* Botón para ver todos los blogs */}
        <div 
          className={`text-center transition-all duration-700 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          }`}
          style={{ transitionDelay: `${600 + (blogs.length * 150) + 200}ms` }}
        >
          <Link
            href="/blogs"
            className="inline-flex items-center bg-[#2563EB] hover:bg-[#1E40AF] text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg group"
          >
            Ver todos los artículos
            <svg
              className="w-5 h-5 ml-3 transition-transform duration-300 group-hover:translate-x-1"
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
      </div>
    </section>
  );
};

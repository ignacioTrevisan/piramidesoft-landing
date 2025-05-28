"use client";

import Image from "next/image";
import { useState } from "react";

interface BlogImageProps {
  src: string | null | undefined;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  fill?: boolean;
  priority?: boolean;
}

export const BlogImage: React.FC<BlogImageProps> = ({
  src,
  alt,
  className = "",
  width,
  height,
  fill = false,
  priority = false,
}) => {
  const [imageError, setImageError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Si no hay src o hubo error, mostrar placeholder
  if (!src || imageError) {
    return (
      <div className={`bg-gray-200 flex items-center justify-center ${className}`}>
        <div className="text-center p-4">
          <svg
            className="w-16 h-16 text-gray-400 mx-auto mb-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
          <p className="text-gray-500 text-sm">Imagen no disponible</p>
        </div>
      </div>
    );
  }

  // Para producción, usar img directamente para evitar el optimizador de Next.js
  if (process.env.NODE_ENV === 'production') {
    return (
      <div className={`relative overflow-hidden ${className}`}>
        {isLoading && (
          <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center">
            <div className="w-8 h-8 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin"></div>
          </div>
        )}
        <img
          src={src}
          alt={alt}
          className={`w-full h-full object-cover transition-opacity duration-300 ${
            isLoading ? 'opacity-0' : 'opacity-100'
          }`}
          onLoad={() => {
            setIsLoading(false);
            console.log('Blog image loaded successfully:', src);
          }}
          onError={(e) => {
            console.error('Error loading blog image:', src);
            setImageError(true);
            setIsLoading(false);
          }}
          style={width && height ? { width, height } : {}}
        />
      </div>
    );
  }

  // En desarrollo, usar el componente Image de Next.js
  return (
    <div className={`relative overflow-hidden ${className}`}>
      {isLoading && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center z-10">
          <div className="w-8 h-8 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin"></div>
        </div>
      )}
      <Image
        src={src}
        alt={alt}
        fill={fill}
        width={!fill ? width : undefined}
        height={!fill ? height : undefined}
        className={`object-cover transition-opacity duration-300 ${
          isLoading ? 'opacity-0' : 'opacity-100'
        }`}
        priority={priority}
        onLoad={() => {
          setIsLoading(false);
          console.log('Blog image loaded successfully:', src);
        }}
        onError={(e) => {
          console.error('Error loading blog image:', src);
          setImageError(true);
          setIsLoading(false);
        }}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
    </div>
  );
};

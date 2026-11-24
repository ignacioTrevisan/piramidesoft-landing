"use client";

import Image from "next/image";
import React, { useState, useRef } from "react";

interface Props {
  name: string;
  text: string;
  image: string;
  Roles: string[];
}

export const NosotrosCard = ({ name, text, image, Roles }: Props) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  return (
    <article
      ref={cardRef}
      className="nosotros-card w-full h-full flex flex-col bg-white dark:bg-gray-900 rounded-2xl p-6 md:p-8 border border-gray-200/70 dark:border-gray-800 shadow-sm hover:shadow-xl hover:border-[#2563EB]/30 dark:hover:border-blue-500/30 relative overflow-hidden transition-all duration-300 ease-out hover:-translate-y-1 group"
    >
      {/* Barra decorativa superior - gradient */}
      <div
        aria-hidden="true"
        className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#2563EB] via-blue-400 to-[#2563EB] opacity-80 group-hover:opacity-100 transition-opacity"
      />

      {/* Patron decorativo esquina */}
      <div
        aria-hidden="true"
        className="absolute top-0 right-0 w-32 h-32 opacity-5 dark:opacity-10"
        style={{
          backgroundImage:
            "radial-gradient(circle at 70% 30%, #2563EB 1px, transparent 1px)",
          backgroundSize: "12px 12px",
        }}
      />

      <div className="flex-grow flex flex-col relative z-10">
        {/* Imagen - redonda con glow sutil */}
        <div className="relative mx-auto mb-5">
          <div
            className={`transition-all duration-500 ${
              imageLoaded ? "opacity-100 scale-100" : "opacity-0 scale-95"
            }`}
          >
            <Image
              src={image}
              alt={`Foto de ${name}`}
              width={140}
              height={140}
              className="rounded-full object-cover ring-4 ring-blue-100 dark:ring-blue-900/40 mx-auto transition-all duration-300 group-hover:ring-[#2563EB]/40 dark:group-hover:ring-blue-500/40 group-hover:scale-105"
              onLoad={() => setImageLoaded(true)}
            />
          </div>
          {/* Glow */}
          <div
            aria-hidden="true"
            className="absolute -inset-1 rounded-full blur-md bg-gradient-to-r from-blue-200 to-indigo-200 dark:from-blue-900/50 dark:to-indigo-900/50 opacity-40 -z-10 transition-opacity duration-300 group-hover:opacity-60"
          />
          {/* Placeholder mientras carga */}
          {!imageLoaded && (
            <div
              className="absolute inset-0 bg-gray-200 dark:bg-gray-700 rounded-full animate-pulse mx-auto"
              style={{ width: 140, height: 140 }}
            />
          )}
        </div>

        {/* Nombre */}
        <h3 className="text-xl md:text-2xl text-center font-bold text-gray-900 dark:text-gray-100 group-hover:text-[#2563EB] dark:group-hover:text-blue-400 transition-colors duration-300">
          {name}
        </h3>

        {/* Descripción */}
        <p className="text-center text-gray-600 dark:text-gray-400 text-sm md:text-base mt-3 mb-5 leading-relaxed">
          {text}
        </p>

        {/* Roles - chips */}
        <div className="flex flex-wrap justify-center gap-1.5 mt-auto">
          {Roles.map((role, index) => (
            <span
              key={index}
              className="bg-blue-50 dark:bg-blue-950/40 text-[#2563EB] dark:text-blue-300 text-xs px-2.5 py-1 rounded-md font-medium border border-blue-100 dark:border-blue-900/50 transition-all duration-300 hover:bg-blue-100 dark:hover:bg-blue-900/50"
            >
              {role}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
};

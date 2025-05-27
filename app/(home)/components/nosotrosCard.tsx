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
    <div 
      ref={cardRef}
      className="nosotros-card w-full flex flex-col h-full bg-white rounded-xl mt-3 p-8 shadow-md relative overflow-hidden transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-xl group"
    >
      {/* Background accent con animación */}
      <div className="absolute top-0 right-0 h-16 w-1/4 bg-blue-50 rotate-45 transform origin-top-right -translate-y-6 translate-x-2 transition-all duration-300 group-hover:bg-blue-100"></div>

      <div className="flex-grow flex flex-col relative z-10">
        {/* Imagen con efectos de carga */}
        <div className="relative mx-auto mb-4 transition-all duration-300">
          <div className={`transition-all duration-500 ${imageLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
            <Image
              src={image}
              alt={`${name} image`}
              width={160}
              height={160}
              className="rounded-full object-cover border-2 border-gray-200 mx-auto transition-all duration-300 group-hover:border-blue-300 group-hover:scale-105"
              onLoad={() => setImageLoaded(true)}
            />
          </div>
          {/* Glow effect */}
          <div className="absolute -inset-0.5 rounded-full blur-sm bg-gradient-to-r from-blue-200 to-indigo-200 opacity-30 -z-10 transition-opacity duration-300 group-hover:opacity-50"></div>
          
          {/* Loading placeholder */}
          {!imageLoaded && (
            <div className="absolute inset-0 bg-gray-200 rounded-full animate-pulse mx-auto" style={{width: 160, height: 160}}></div>
          )}
        </div>

        {/* Nombre con animación de aparición */}
        <h1 className="text-2xl md:text-3xl text-center font-bold text-[#2563EB] transition-colors duration-300 group-hover:text-[#1E40AF]">
          {name}
        </h1>

        {/* Descripción */}
        <p className="text-center text-gray-600 text-base mt-3 mb-5 transition-colors duration-300 group-hover:text-gray-700">
          {text}
        </p>

        {/* Roles con animación individual */}
        <div className="flex flex-wrap justify-center gap-1 mt-2 mb-4">
          {Roles.map((role, index) => (
            <span
              key={index}
              className="bg-blue-50 text-[#2563EB] text-sm px-3 py-1 rounded-md transition-all duration-300 hover:bg-blue-100 hover:scale-105"
              style={{
                animationDelay: `${index * 100}ms`
              }}
            >
              {role}
            </span>
          ))}
        </div>
      </div>

      {/* Botón con efectos mejorados */}
      <div className="mt-auto pt-3">
        <button className="bg-[#2563EB] hover:bg-[#1E40AF] text-white py-2 px-4 rounded-lg w-full transition-all duration-300 text-base font-medium hover:scale-105 hover:shadow-lg active:scale-95 relative overflow-hidden group/btn">
          {/* Efecto de brillo en hover */}
          <div className="absolute inset-0 bg-white opacity-0 group-hover/btn:opacity-10 transition-opacity duration-300"></div>
          <span className="relative z-10">Ver perfil</span>
        </button>
      </div>
    </div>
  );
};

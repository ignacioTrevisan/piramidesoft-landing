"use client";

import React, { useEffect, useRef, useState } from "react";
import { NosotrosCard } from "./components/nosotrosCard";

export const SobreNosotros = () => {
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

  const nosotros = [
    {
      name: "Danilo Ariel Vadino",
      text: "Magister en Sistemas de Informacion. Licenciado en Sistemas de informacion. Analista de Sistemas. Analista programador",
      image: "/Danilo_1.jpeg",
      Roles: [
        "Director",
        "Auditor/Perito",
        "Investigador",
        "Analisis/Diseño",
        "Desarrollo",
      ],
    },
    {
      name: "Gonzalo Rene Jaquet",
      text: "Licenciado en sistemas informáticos. Analista de sistemas informaticos",
      image: "/Gonzalo_1.jpeg",
      Roles: ["Desarrollo/programacion(Desktop, WEb y Movil)"],
    },
    {
      name: "Ariel Enrique Vadino",
      text: "Estudiante de Sistemas",
      image: "/Ariel_1.jpeg",
      Roles: ["Servicio Técnico PC", "Redes"],
    },
    {
      name: "Ignacio Gabriel Trevisan",
      text: "Tecnico en computacion. Tecnico superior en desarrollo de software",
      image:
        "https://res.cloudinary.com/nachotrevisan/image/upload/v1747752241/nacho_tid42o.jpg",
      Roles: ["Desarrollo/programacion(Desktop, WEb y Movil)"],
    },
  ];

  return (
    <div
      id="sobre-nosotros"
      ref={sectionRef}
      className="flex flex-col w-full h-auto px-4 md:px-8 py-12 overflow-x-hidden"
    >
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
      <h1 
        className={`text-4xl md:text-5xl lg:text-6xl text-center mb-10 text-[#2563EB] font-bold px-4 relative z-10 transition-all duration-700 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
        }`}
        style={{ transitionDelay: '300ms' }}
      >
        Nuestro <span className="text-gray-800">Equipo</span>
        <div className="absolute -z-10 inset-0 blur-md bg-gray-100 opacity-50 transform scale-150"></div>
      </h1>
      
      {/* Grid de cartas con animación escalonada */}
      <div className="grid sm:grid-cols-2 grid-cols-1 gap-10 md:gap-12">
        {nosotros.map((n, index) => (
          <div 
            key={n.name} 
            className={`nosotros-card transition-all duration-600 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ 
              transitionDelay: `${600 + (index * 150)}ms` 
            }}
          >
            <NosotrosCard {...n} />
          </div>
        ))}
      </div>
    </div>
  );
};

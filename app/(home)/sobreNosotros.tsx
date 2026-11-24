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
    <section
      id="sobre-nosotros"
      ref={sectionRef}
      className="relative flex flex-col w-full h-auto px-4 md:px-8 py-16 md:py-20 overflow-x-hidden bg-gradient-to-b from-white to-blue-50/30 dark:from-gray-950 dark:to-blue-950/10"
    >
      {/* Header con eyebrow */}
      <div className="text-center max-w-3xl mx-auto mb-12 px-4">
        <span
          className={`inline-block text-xs font-semibold tracking-widest text-[#2563EB] dark:text-blue-400 uppercase mb-3 transition-all duration-700 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
          }`}
        >
          Quiénes somos
        </span>

        <h2
          className={`text-3xl md:text-4xl lg:text-5xl text-center mb-4 font-bold text-gray-900 dark:text-gray-100 transition-all duration-700 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          }`}
          style={{ transitionDelay: '150ms' }}
        >
          Nuestro <span className="text-[#2563EB] dark:text-blue-400">Equipo</span>
        </h2>

        <div
          className={`w-16 h-1 bg-[#2563EB] dark:bg-blue-400 rounded-full mx-auto mb-5 transition-all duration-700 ease-out origin-center ${
            isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
          }`}
          style={{ transitionDelay: '250ms' }}
        />

        <p
          className={`text-center text-gray-600 dark:text-gray-400 leading-relaxed transition-all duration-700 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          }`}
          style={{ transitionDelay: '350ms' }}
        >
          Equipo de desarrolladores y analistas de sistemas con base en{' '}
          <strong className="text-gray-800 dark:text-gray-200">Colón y Villaguay, Entre Ríos</strong>,
          dedicado al desarrollo de software a medida, sistemas de gestión,
          páginas web y aplicaciones móviles para empresas de toda la provincia:
          Paraná, Concordia, Concepción del Uruguay, Gualeguaychú y más.
        </p>
      </div>
      
      {/* Grid de cartas con animación escalonada - items-stretch para altura uniforme */}
      <div className="max-w-5xl mx-auto grid sm:grid-cols-2 grid-cols-1 gap-6 md:gap-8 items-stretch">
        {nosotros.map((n, index) => (
          <div
            key={n.name}
            className={`h-full transition-all duration-700 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{
              transitionDelay: `${500 + (index * 100)}ms`
            }}
          >
            <NosotrosCard {...n} />
          </div>
        ))}
      </div>
    </section>
  );
};

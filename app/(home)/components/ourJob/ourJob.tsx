"use client";
import React from "react";
import { useEffect, useRef, useState } from "react";

export const OurJob = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  const imgRef = useRef<HTMLImageElement>(null);
  const sectionRef2 = useRef<HTMLDivElement>(null);
  const [isVisible2, setIsVisible2] = useState(false);

  // Observer para la primera sección
  useEffect(() => {
    const section = sectionRef.current;
    const video = videoRef.current;
    if (!section || !video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          setTimeout(() => {
            video.play();
          }, 1200);
        } else {
          setIsVisible(false);
          video.pause();
          video.currentTime = 0;
        }
      },
      { threshold: 0.4 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  // Observer para la segunda sección
  useEffect(() => {
    const section = sectionRef2.current;
    const img = imgRef.current;
    if (!section || !img) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible2(true);
          setTimeout(() => {
            img.classList.add("opacity-100");
          }, 1200);
        } else {
          setIsVisible2(false);
          img.classList.remove("opacity-100");
        }
      },
      { threshold: 0.4 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Primera sección: Video arriba en móvil, Texto izquierda/Video derecha en desktop */}
      <div
        ref={sectionRef}
        className="grid min-h-screen w-full grid-cols-1 lg:grid-cols-2 items-center overflow-hidden p-10"
      >
        {/* Video - aparece primero en móvil (order-1), segundo en desktop (lg:order-2) */}
        <div
          className={`h-64 sm:h-80 md:h-96 lg:h-full order-1 lg:order-2 transition-all duration-700 ease-out delay-150 px-6 sm:px-8 md:px-12 py-6 sm:py-8 ${
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-20"
          }`}
        >
          <video
            ref={videoRef}
            className="h-full w-full object-cover"
            src="/clip_programando2.mov"
            muted
            loop
            playsInline
          />
        </div>

        {/* Texto - aparece segundo en móvil (order-2), primero en desktop (lg:order-1) */}
        <div
          className={`flex flex-col gap-4 sm:gap-6 order-2 lg:order-1 transition-all duration-700 ease-out ${
            isVisible
              ? "opacity-100 translate-x-0"
              : "opacity-0 -translate-x-20"
          }`}
        >
          <div className="flex flex-col gap-2">
            <span className="text-[#2563eb] font-semibold text-base sm:text-lg">
              El software como servicio
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
              Sobre nuestros <span className="text-[#2563eb]">Servicios</span>
            </h2>
          </div>

          <div className="flex flex-col gap-3 sm:gap-4 text-gray-700 text-balance leading-relaxed w-full">
            <p style={{ fontSize: "14px" }}>
              <span className="text-[#2563eb] font-semibold">
                Gestión comercial inteligente:
              </span>{" "}
              software listo para usar y diseñado para tu equipo. Con una
              trayectoria centrada en el{" "}
              <span className="text-[#2563eb] font-semibold">
                software de gestión comercial
              </span>
              , ofrecemos soluciones robustas y listas para ser implementadas
              desde el primer momento.
            </p>

            <p style={{ fontSize: "14px" }}>
              Nuestra filosofía de desarrollo se basa en un pilar fundamental:
              la{" "}
              <span className="text-[#2563eb] font-semibold">
                utilidad real y facilidad de uso
              </span>
              . Creamos herramientas tan intuitivas que cualquier integrante de
              tu equipo, incluso quienes no tienen experiencia con la
              tecnología, podrá utilizarlas desde el{" "}
              <span className="text-[#2563eb] font-semibold">primer día</span>.
            </p>

            <p style={{ fontSize: "14px" }}>
              Sabemos que cada empresa tiene su propia dinámica; por eso, además
              de un producto listo, ofrecemos{" "}
              <span className="text-[#2563eb] font-semibold">
                desarrollo y personalización
              </span>{" "}
              de software para que se adapte exactamente a las{" "}
              <span className="text-[#2563eb] font-semibold">
                necesidades de tu negocio
              </span>
              .
            </p>

            <p style={{ fontSize: "14px" }}>
              Todo esto está respaldado por una{" "}
              <span className="text-[#2563eb] font-semibold">
                atención constante e inmediata
              </span>{" "}
              brindada por personas reales. Nuestro soporte humano te permite
              trabajar con tranquilidad, sabiendo que siempre habrá un
              especialista disponible para resolver tus dudas y asegurar que tu
              operación{" "}
              <span className="text-[#2563eb] font-semibold">
                nunca se detenga
              </span>
              .
            </p>
          </div>
        </div>
      </div>

      {/* Segunda sección: Imagen izquierda + Descripción con grid 2x2 a la derecha */}
      <div
        ref={sectionRef2}
        className="grid min-h-screen w-full grid-cols-1 lg:grid-cols-2 items-center overflow-hidden mt-6 sm:mt-10 p-10 gap-8"
      >
        {/* Imagen - aparece primero tanto en móvil como en desktop */}
        <div
          className={`h-64 sm:h-80 md:h-96 lg:h-[500px] transition-all duration-700 ease-out ${
            isVisible2
              ? "opacity-100 translate-x-0"
              : "opacity-0 -translate-x-20"
          }`}
        >
          <img
            ref={imgRef}
            className="h-full w-full object-cover rounded-lg shadow-lg"
            src="/piramidesoft_lugar.png"
            alt="Nuestras instalaciones"
          />
        </div>

        {/* Contenido derecho - Descripción breve + Grid 2x2 */}
        <div
          className={`flex flex-col gap-6 sm:gap-8 transition-all duration-700 ease-out delay-150 ${
            isVisible2
              ? "opacity-100 translate-x-0"
              : "opacity-0 translate-x-20"
          }`}
        >
          {/* Breve descripción */}
          <div className="flex flex-col gap-2">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
              Nuestra <span className="text-[#2563eb]">trayectoria </span>
            </h2>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              Durante todos estos años hemos crecido y no solo en clientes, sino
              en conocimientos y experiencias
            </p>
          </div>

          {/* Grid 2x2 de subtítulos */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Subtítulo 1 */}
            <div className="flex flex-col gap-2">
              <h3 className="text-lg sm:text-xl font-semibold text-[#2563eb]">
                Clientes
              </h3>
              <p
                className="text-gray-600 text-sm leading-relaxed"
                style={{ fontSize: "16px" }}
              >
                Contamos con más de{" "}
                <span className="font-bold text-[#2563eb]">400</span> clientes
                al rededor de toda la argentina.
              </p>
            </div>

            {/* Subtítulo 2 */}
            <div className="flex flex-col gap-2">
              <h3 className="text-lg font-semibold text-[#2563eb]">
                Años en el rubro
              </h3>
              <p
                className="text-gray-600 text-sm leading-relaxed"
                style={{ fontSize: "16px" }}
              >
                Contamos con más de{" "}
                <span className="font-bold text-[#2563eb]">30 </span> años
                trabajando en el desarrollo de software.
              </p>
            </div>

            {/* Subtítulo 3 */}
            <div className="flex flex-col gap-2">
              <h3 className="text-lg sm:text-xl font-semibold text-[#2563eb]">
                Sistemas disponibles
              </h3>
              <p
                className="text-gray-600 text-sm leading-relaxed"
                style={{ fontSize: "16px" }}
              >
                Contamos con más de{" "}
                <span className="font-bold text-[#2563eb]">35 {""}</span>{" "}
                sistemas funcionando y listos para ser instalados
              </p>
            </div>

            {/* Subtítulo 4 */}
            <div className="flex flex-col gap-2">
              <h3 className="text-lg sm:text-xl font-semibold text-[#2563eb]">
                Ramas de servicios
              </h3>
              <p
                className="text-gray-600 text-sm leading-relaxed"
                style={{ fontSize: "16px" }}
              >
                Actualmente manejamos{" "}
                <span className="font-bold text-[#2563eb]"> 3</span> ramas en
                desarrollo de software{" "}
                <span className="font-bold text-[#2563eb]">
                  Web, Android, Escritorio {""}
                </span>{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

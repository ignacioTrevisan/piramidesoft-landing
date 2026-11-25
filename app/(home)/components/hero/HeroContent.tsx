"use client";

import { useRef, useEffect, useState } from "react";
import Link from "next/link";
import TrustedByClients from "../conoceNuestroClientesBotton";

export default function HeroContent() {
  // NO crear ref para el título si no lo vamos a animar
  const subtitleRef = useRef<HTMLHeadingElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const highlightRefs = useRef<HTMLSpanElement[]>([]);

  // Estado para el efecto de máquina de escribir
  const [displayedText, setDisplayedText] = useState("");
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  // Textos que se alternarán
  const texts = [
    "Más de 30 Años impulsando el **futuro Digital**",
    "Más de **400 empresas** de todo el país confiaron en nosotros para digitalizar sus **negocios**",
  ];

  // Create refs for each highlight span

  // Función para renderizar texto con negritas
  const renderTextWithBold = (text: string) => {
    const parts = text.split(/(\*\*.*?\*\*)/g);
    return parts.map((part, index) => {
      if (part.startsWith("**") && part.endsWith("**")) {
        const boldText = part.slice(2, -2);
        return (
          <strong key={index} className="font-bold text-[#2563EB]">
            {boldText}
          </strong>
        );
      }
      return part;
    });
  };

  // Efecto de máquina de escribir
  useEffect(() => {
    const currentText = texts[currentTextIndex];
    const cleanText = currentText.replace(/\*\*/g, ""); // Remover asteriscos para el conteo

    const typeSpeed = 40; // Velocidad de escritura (ms) - más rápido
    const deleteSpeed = 30; // Velocidad de borrado (ms) - más rápido
    const pauseTime = 4000; // Pausa entre textos (ms) - más tiempo

    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          // Escribiendo
          if (displayedText.length < cleanText.length) {
            const nextChar = cleanText[displayedText.length];
            setDisplayedText((prev) => prev + nextChar);
          } else {
            // Terminó de escribir, pausa y luego borra
            setTimeout(() => setIsDeleting(true), pauseTime);
          }
        } else {
          // Borrando
          if (displayedText.length > 0) {
            setDisplayedText((prev) => prev.slice(0, -1));
          } else {
            // Terminó de borrar, cambia al siguiente texto
            setIsDeleting(false);
            setCurrentTextIndex((prev) => (prev + 1) % texts.length);
          }
        }
      },
      isDeleting ? deleteSpeed : typeSpeed
    );

    return () => clearTimeout(timeout);
  }, [displayedText, currentTextIndex, isDeleting]);

  // Load GSAP dynamically only on client
  useEffect(() => {
    const loadAnimations = async () => {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");

      if (typeof window !== "undefined") {
        gsap.registerPlugin(ScrollTrigger);
      }

      // Hero animations - SOLO para subtitle y text
      const tl = gsap.timeline({ defaults: { ease: "power2.out" } });

      tl.fromTo(
        subtitleRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6 }
      ).fromTo(
        textRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6 },
        "-=0.3"
      );

      // Text highlight animation
      if (highlightRefs.current.length > 0) {
        highlightRefs.current.forEach((element, index) => {
          gsap.to(element, {
            scrollTrigger: {
              trigger: element,
              start: "top bottom-=50",
              once: true, // dispara una sola vez, sin pestañear al scrollear arriba/abajo
            },
            color: "#2563EB",
            fontWeight: "bold",
            duration: 0.4,
            delay: index * 0.1,
            ease: "power1.out",
          });
        });
      }
    };

    loadAnimations();

    return () => {
      // Clean up ScrollTrigger instances
      import("gsap/ScrollTrigger").then(({ ScrollTrigger }) => {
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      });
    };
  }, []);

  // Función para generar el texto mostrado con formato
  const getFormattedDisplayText = () => {
    const currentFullText = texts[currentTextIndex];

    if (displayedText.length === 0) return "";

    // Crear una versión del texto original que mapee posiciones
    let result = "";
    let cleanIndex = 0;
    let i = 0;

    while (i < currentFullText.length && cleanIndex < displayedText.length) {
      if (currentFullText.substr(i, 2) === "**") {
        // Encontramos un marcador de negrita
        result += "**";
        i += 2;

        // Buscar el cierre de la negrita
        let boldContent = "";

        while (
          i < currentFullText.length &&
          currentFullText.substr(i, 2) !== "**"
        ) {
          if (cleanIndex < displayedText.length) {
            boldContent += currentFullText[i];
            cleanIndex++;
          }
          i++;
        }

        result += boldContent;

        // Si hemos completado la palabra en negrita, agregar el cierre
        if (
          i < currentFullText.length &&
          currentFullText.substr(i, 2) === "**" &&
          cleanIndex <= displayedText.length
        ) {
          result += "**";
          i += 2;
        }
      } else {
        // Carácter normal
        result += currentFullText[i];
        cleanIndex++;
        i++;
      }
    }

    return result;
  };

  return (
    <div className="w-full justify-center items-center flex flex-col gap-y-2">
      <h1 className="sr-only">
        Piramide Soft - Desarrollo de Software, Sistemas de Gestión y Páginas
        Web en Entre Ríos, Argentina
      </h1>

      {/* Badge "+30 años" */}
      <div className="mb-4 flex justify-center">
        <span className="inline-flex items-center gap-2 bg-blue-50 dark:bg-blue-950/50 border border-blue-200 dark:border-blue-800/50 text-[#2563EB] dark:text-blue-300 px-4 py-1.5 rounded-full text-xs md:text-sm font-semibold shadow-sm">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#2563EB] opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#2563EB]" />
          </span>
          Más de 30 años en Entre Ríos
        </span>
      </div>

      <div>
        {/* Título SIN ref, completamente aislado de GSAP */}
        <p
          aria-hidden="true"
          style={{ letterSpacing: "0.11em" }}
          className="xl:text-8xl lg:text-6xl md:text-5xl sm:text-5xl text-3xl text-center md:text-left mb-4 text-[#2563EB] dark:text-blue-400 claseConFuenteFea"
        >
          PIRAMIDE SOFT
        </p>
      </div>

      <div className="w-full flex flex-col items-center">
        <h2
          ref={subtitleRef}
          className="w-full text-xl md:text-2xl mb-3 text-center text-gray-700 dark:text-gray-300 min-h-[3rem] md:min-h-[4rem]"
        >
          {renderTextWithBold(getFormattedDisplayText())}
          <span className="animate-pulse text-[#2563EB] dark:text-blue-400">|</span>
        </h2>
      </div>

      {/* CTAs principales */}
      <div className="flex flex-col sm:flex-row items-center gap-3 mb-6 mt-2">
        <Link
          href="/productos"
          className="inline-flex items-center gap-2 bg-[#2563EB] hover:bg-[#1d4ed8] text-white font-semibold px-6 py-3 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 group"
        >
          Ver nuestros productos
          <svg
            className="w-4 h-4 transition-transform group-hover:translate-x-0.5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2.5}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </Link>
        <Link
          href="#contacto"
          className="inline-flex items-center gap-2 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-800 dark:text-gray-100 font-semibold px-6 py-3 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-all duration-300"
        >
          Contactanos
        </Link>
      </div>

      <div ref={textRef}>
        <TrustedByClients />
      </div>
    </div>
  );
}

"use client";

import { useRef, useEffect, useState } from "react";
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
  const addToHighlightRefs = (el: HTMLSpanElement | null) => {
    if (el && !highlightRefs.current.includes(el)) {
      highlightRefs.current.push(el);
    }
  };

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
              toggleActions: "play none none reverse",
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
    const cleanCurrentText = currentFullText.replace(/\*\*/g, "");

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
        let boldStart = i;

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
    <div className="w-full pt-10 justify-center items-center flex flex-col gap-y-2 md:mb-0">
      <div>
        {/* Título SIN ref, completamente aislado de GSAP */}
        <h1
          style={{ letterSpacing: "0.11em" }}
          className="xl:text-8xl lg:text-6xl md:text-5xl sm:text-5xl lg:mt-7 md:mt-9 text-3xl text-center md:text-left mb-4 text-[#2563EB] claseConFuenteFea"
        >
          PIRAMIDE SOFT
        </h1>
      </div>
      <div className="w-full flex flex-col items-center">
        <h2
          ref={subtitleRef}
          className="w-full text-xl md:text-2xl mb-3
          text-center text-gray-700 bg-gradient-to-r from-white to-[#2563EB]
          bg-clip-text text-transparent min-h-[3rem] md:min-h-[4rem]"
        >
          {renderTextWithBold(getFormattedDisplayText())}
          <span className="animate-pulse text-[#2563EB]">|</span>
        </h2>
      </div>
      <div ref={textRef}>
        <TrustedByClients />
      </div>
    </div>
  );
}

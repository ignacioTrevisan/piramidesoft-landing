"use client";

import Image from "next/image";
import TrustedByClients from "./components/conoceNuestroClientesBotton";
import { SobreNosotros } from "./sobreNosotros";
import PiramideSoftLanding from "./components/PiramideSoftLanding";
import ScrollProgress from "./components/ScrollProgress";
import ScrollToSections from "./components/ScrollToSections";
import { useRef } from "react";
import {
  useHeroAnimation,
  useTextHighlightAnimation,
} from "./components/animations/gsapAnimations";

export default function Home() {
  const titleRef = useRef<HTMLHeadingElement>(
    null
  ) as React.RefObject<HTMLHeadingElement>;
  const subtitleRef = useRef<HTMLHeadingElement>(
    null
  ) as React.RefObject<HTMLHeadingElement>;
  const textRef = useRef<HTMLParagraphElement>(
    null
  ) as React.RefObject<HTMLParagraphElement>;
  const imageRef = useRef<HTMLDivElement>(
    null
  ) as React.RefObject<HTMLDivElement>;
  const highlightRefs = useRef<HTMLSpanElement[]>([]);

  // Create refs for each highlight span
  const addToHighlightRefs = (el: HTMLSpanElement | null) => {
    if (el && !highlightRefs.current.includes(el)) {
      highlightRefs.current.push(el);
    }
  };

  // Use custom hook for hero animations
  useHeroAnimation(titleRef, subtitleRef, textRef, imageRef);

  // Use custom hook for text highlight animations
  useTextHighlightAnimation(highlightRefs);

  return (
    <>
      <ScrollProgress />
      <ScrollToSections />
      <div
        id="hero"
        className="w-full flex flex-col md:flex-row justify-around h-auto md:h-screen items-center px-4 py-8 md:py-0 overflow-x-hidden"
      >
        <div className="w-full md:w-1/2 gap-y-2 md:mb-0">
          <h1
            ref={titleRef}
            className="lg:text-8xl sm:text-6xl text-3xl text-center font-bold md:text-left mb-4 text-[#2563EB]"
          >
            PiramideSoft
          </h1>
          <h2
            ref={subtitleRef}
            className="text-xl md:text-2xl mb-3 text-center md:text-left"
          >
            Más de 30 Años impulsando el futuro Digital
          </h2>
          <p
            ref={textRef}
            className="text-gray-700 text-center md:text-left text-lg md:text-xl"
          >
            En PiramideSoft desarrollamos sistemas{" "}
            <span ref={addToHighlightRefs} className="font-bold text-[#2563EB]">
              confiables
            </span>{" "}
            y{" "}
            <span ref={addToHighlightRefs} className="font-bold text-[#2563EB]">
              adaptados
            </span>{" "}
            a pequeñas y medianas empresas. Te ayudamos a gestionar
            <span ref={addToHighlightRefs} className="font-bold text-[#2563EB]">
              {" "}
              stock
            </span>
            ,{" "}
            <span ref={addToHighlightRefs} className="font-bold text-[#2563EB]">
              ventas
            </span>{" "}
            y{" "}
            <span ref={addToHighlightRefs} className="font-bold text-[#2563EB]">
              digitalizar
            </span>{" "}
            tu negocio con soluciones{" "}
            <span ref={addToHighlightRefs} className="font-bold text-[#2563EB]">
              robustas
            </span>{" "}
            y asesoramiento{" "}
            <span ref={addToHighlightRefs} className="font-bold text-[#2563EB]">
              personalizado
            </span>
            .
          </p>
          <div>
            <TrustedByClients />
          </div>
        </div>
        <div ref={imageRef} className="w-full md:w-1/2 flex justify-center">
          <div className="relative blob-animation">
            <Image
              src="/hero-image-sin-fondo.png"
              alt="home-hero"
              width={600}
              height={600}
              className="w-4/5 md:w-full max-w-[600px] h-auto"
              priority
            />
          </div>
        </div>
      </div>
      <SobreNosotros />
      <PiramideSoftLanding />
    </>
  );
}

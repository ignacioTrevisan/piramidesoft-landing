"use client";

import { useRef, useEffect } from "react";
import TrustedByClients from "../conoceNuestroClientesBotton";

export default function HeroContent() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLHeadingElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const highlightRefs = useRef<HTMLSpanElement[]>([]);

  // Create refs for each highlight span
  const addToHighlightRefs = (el: HTMLSpanElement | null) => {
    if (el && !highlightRefs.current.includes(el)) {
      highlightRefs.current.push(el);
    }
  };

  // Load GSAP dynamically only on client
  useEffect(() => {
    const loadAnimations = async () => {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      
      if (typeof window !== "undefined") {
        gsap.registerPlugin(ScrollTrigger);
      }
      
      // Hero animations
      const tl = gsap.timeline({ defaults: { ease: "power2.out" } });
      tl.fromTo(
        titleRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6 }
      )
        .fromTo(
          subtitleRef.current,
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6 },
          "-=0.3"
        )
        .fromTo(
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

  return (
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
  );
}

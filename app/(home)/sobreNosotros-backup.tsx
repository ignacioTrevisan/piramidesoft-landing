"use client";

import React, { useRef, useEffect, useState } from "react";
import { NosotrosCard } from "./components/nosotrosCard";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const SobreNosotros = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const cardsContainerRef = useRef<HTMLDivElement>(null);
  const dividerLeftRef = useRef<HTMLHRElement>(null);
  const dividerRightRef = useRef<HTMLHRElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    // Registrar ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);

    // Limpiar animaciones previas
    ScrollTrigger.killAll();

    const timer = setTimeout(() => {
      if (
        !sectionRef.current ||
        !titleRef.current ||
        !cardsContainerRef.current
      )
        return;

      // Establecer estados iniciales
      gsap.set(titleRef.current, { opacity: 0, y: 20 });
      gsap.set([dividerLeftRef.current, dividerRightRef.current], {
        width: 0,
        opacity: 0.5,
      });

      // Animar título
      gsap.to(titleRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.5,
        delay: 0.3,
        ease: "power2.out",
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top bottom-=100",
          toggleActions: "play none none reverse",
        },
      });

      // Animar dividers
      gsap.to([dividerLeftRef.current, dividerRightRef.current], {
        width: "100%",
        opacity: 1,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom-=50",
          toggleActions: "play none none reverse",
        },
      });

      // Animar cartas
      const cards = gsap.utils.toArray(".nosotros-card");
      if (cards.length > 0) {
        gsap.set(cards, { y: 30, opacity: 0 });
        gsap.to(cards, {
          y: 0,
          opacity: 1,
          stagger: 0.15,
          duration: 0.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: cardsContainerRef.current,
            start: "top bottom-=50",
            toggleActions: "play none none reverse",
          },
        });
      }

      ScrollTrigger.refresh();
    }, 100);

    return () => {
      clearTimeout(timer);
      ScrollTrigger.killAll();
    };
  }, [mounted]);

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
      <div className="flex justify-between space-x-8 mb-10">
        <hr
          ref={dividerLeftRef}
          className="divider-left w-full border-[#2563EB] border-1"
        />
        <hr
          ref={dividerRightRef}
          className="divider-right w-full border-[#2563EB] border-1"
        />
      </div>
      <h1
        ref={titleRef}
        className="text-4xl md:text-5xl lg:text-6xl text-center mb-10 text-[#2563EB] font-bold px-4 relative z-10"
      >
        Nuestro <span className="text-gray-800">Equipo</span>
        <div className="absolute -z-10 inset-0 blur-md bg-gray-100 opacity-50 transform scale-150"></div>
      </h1>
      <div
        ref={cardsContainerRef}
        className="grid sm:grid-cols-2 grid-cols-1 gap-10 md:gap-12"
      >
        {nosotros.map((n) => (
          <div key={n.name} className="nosotros-card">
            <NosotrosCard {...n} />
          </div>
        ))}
      </div>
    </div>
  );
};

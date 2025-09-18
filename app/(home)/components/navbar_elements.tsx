"use client";
import { useState, useRef, useEffect } from "react";
import styles from "./navbar.module.css";
import { gsap } from "gsap";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface ElementoNavbar {
  titulo: string;
  isFocus: boolean;
  url: string;
}

export const Navbar_elements = () => {
  const elementos: ElementoNavbar[] = [
    { titulo: "Inicio", isFocus: true, url: "/" },
    { titulo: "Blogs", isFocus: true, url: "/blogs" },
    { titulo: "Productos", isFocus: true, url: "/productos" },
  ];

  const pathname = usePathname();
  const currentSection = pathname === "/" ? "inicio" : pathname.split("/")[1];

  const [elementHovered, setElementHovered] = useState("");
  const containerRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Función para agregar refs
  const addToItemRefs = (el: HTMLDivElement | null, index: number) => {
    itemRefs.current[index] = el;
  };

  useEffect(() => {
    // Asegurar que el array tenga el tamaño correcto
    itemRefs.current = itemRefs.current.slice(0, elementos.length);

    if (!containerRef.current || itemRefs.current.some((item) => !item)) return;

    // Animación inicial para los elementos del navbar
    gsap.fromTo(
      itemRefs.current.filter(Boolean), // Solo elementos que existen
      {
        y: -20,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.5,
        stagger: 0.05,
        delay: 0.3,
        ease: "power2.out",
      }
    );
  }, [elementos.length]);

  // Función para determinar si la sección está activa
  const isActiveSection = (titulo: string): boolean => {
    return currentSection.toLowerCase() === titulo.toLowerCase();
  };

  // Función para obtener las clases de color del texto
  const getTextColorClasses = (titulo: string): string => {
    const isActive = isActiveSection(titulo);
    const isHovered = elementHovered === titulo;

    if (isHovered && isActive) {
      return "text-[#2563eb]"; // Azul si está activo y hover
    } else if (isHovered) {
      return "text-white"; // Blanco si solo hover
    } else if (isActive) {
      return "text-[#2563eb]"; // Azul si solo activo
    }
    return "text-white/80"; // Blanco semi-transparente por defecto
  };

  // Función para obtener las clases de background
  const getBackgroundClasses = (titulo: string): string => {
    const isActive = isActiveSection(titulo);
    const isHovered = elementHovered === titulo;

    if (isActive) {
      return "bg-white shadow-sm"; // Fondo blanco para sección activa
    } else if (isHovered) {
      return "bg-white/10"; // Fondo semi-transparente en hover
    }
    return ""; // Sin fondo por defecto
  };

  return (
    <div ref={containerRef} className="flex h-full gap-4 items-center">
      {elementos.map((elemento, index) => (
        <Link
          key={elemento.titulo}
          href={elemento.url}
          ref={(el) => addToItemRefs(el as any, index)}
          onMouseEnter={() => setElementHovered(elemento.titulo)}
          onMouseLeave={() => setElementHovered("")}
          className={`
            relative rounded-full px-3 py-1.5 transition-all duration-200 block
            ${getBackgroundClasses(elemento.titulo)}
            ${getTextColorClasses(elemento.titulo)}
          `}
          style={{
            outline: "none !important",
            boxShadow: "none !important",
            border: "none !important",
            textDecoration: "none",
          }}
        >
          <span className="text-sm font-medium transition-colors duration-200">
            {elemento.titulo}
          </span>
        </Link>
      ))}
    </div>
  );
};

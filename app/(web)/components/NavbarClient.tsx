"use client";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { SessionButton } from "./SessionButton";
import { SessionDebug } from "./SessionDebug";

// Register ScrollTrigger
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const MobileNavbarElements = () => {
  const elementos = [
    { titulo: "Inicio", url: "/" },
    { titulo: "Blogs", url: "/blogs" },
    { titulo: "Productos", url: "/products" },
  ];

  return (
    <div className="flex flex-col gap-4">
      {elementos.map((e) => (
        <Link key={e.titulo} href={e.url}>
          <div className="cursor-pointer py-2 border-b border-gray-100 text-gray-800 hover:text-gray-600">
            {e.titulo}
          </div>
        </Link>
      ))}
    </div>
  );
};

export const NavbarClient = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navbarRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollYRef = useRef(0);
  const ticking = useRef(false);

  useEffect(() => {
    if (!navbarRef.current || !logoRef.current || !buttonRef.current) return;

    // Initial animation
    const tl = gsap.timeline({ defaults: { ease: "power2.out" } });
    tl.fromTo(
      navbarRef.current,
      { y: -50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6 }
    )
      .fromTo(
        logoRef.current,
        { scale: 0.8, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.4 },
        "-=0.3"
      )
      .fromTo(
        buttonRef.current,
        { x: 10, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.4 },
        "-=0.3"
      );

    // Función para manejar el scroll - SIMPLIFICADA
    const handleScroll = () => {
      if (!ticking.current) {
        requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;

          // Si estamos cerca del top, siempre mostrar
          if (currentScrollY < 100) {
            setIsVisible(true);
          } else {
            // Solo cambiar estado si hay una diferencia significativa
            const scrollDiff = currentScrollY - lastScrollYRef.current;

            if (scrollDiff > 50) {
              // Bajando más de 50px - ocultar
              setIsVisible(false);
              lastScrollYRef.current = currentScrollY;
            } else if (scrollDiff < -50) {
              // Subiendo más de 50px - mostrar
              setIsVisible(true);
              lastScrollYRef.current = currentScrollY;
            }
          }

          ticking.current = false;
        });

        ticking.current = true;
      }
    };

    // Agregar listener de scroll
    window.addEventListener("scroll", handleScroll, { passive: true });

    // Button container hover animation
    const handleMouseEnter = () => {
      if (buttonRef.current) {
        gsap.to(buttonRef.current, {
          scale: 1.02,
          duration: 0.2,
        });
      }
    };

    const handleMouseLeave = () => {
      if (buttonRef.current) {
        gsap.to(buttonRef.current, {
          scale: 1,
          duration: 0.2,
        });
      }
    };

    const currentButtonRef = buttonRef.current;
    if (currentButtonRef) {
      currentButtonRef.addEventListener("mouseenter", handleMouseEnter);
      currentButtonRef.addEventListener("mouseleave", handleMouseLeave);
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (currentButtonRef) {
        currentButtonRef.removeEventListener("mouseenter", handleMouseEnter);
        currentButtonRef.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, []); // Dependencias vacías para evitar conflictos

  // Efecto para animar la navbar basado en isVisible
  useEffect(() => {
    if (!navbarRef.current) return;

    gsap.to(navbarRef.current, {
      y: isVisible ? 0 : -100,
      duration: 0.3,
      ease: "power2.out",
    });
  }, [isVisible]);

  return (
    <div
      ref={navbarRef}
      className={`w-full fixed flex items-center justify-between md:justify-around top-0 py-4 px-6 md:px-10  navbar-glass border-b border-gray-100 z-50`}
    >
      <Link href="/">
        <div ref={logoRef} className="cursor-pointer relative group">
          <Image
            src={"/logo_sin_fondo.png"}
            height={60}
            width={60}
            alt="logo de piramide soft"
            className="transition-all duration-300 group-hover:scale-110"
          />
          <div className="absolute -inset-2 rounded-full blur-sm bg-gray-100 opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
        </div>
      </Link>

      <div className="block md:hidden">
        <button
          className="p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
        {mobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-white shadow-md py-4 px-4">
            <MobileNavbarElements />
            <div className="mt-4">
              <SessionButton isMobile={true} />
            </div>
          </div>
        )}
      </div>

      <div ref={buttonRef} className="hidden md:block">
        <SessionButton />
      </div>
      
      {/* Debug temporal */}
      <SessionDebug />
    </div>
  );
};

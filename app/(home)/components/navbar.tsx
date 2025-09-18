"use client";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { Navbar_elements } from "./navbar_elements";
import { SessionButton } from "./SessionButton";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";

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
    <div className="flex flex-col gap-3">
      {elementos.map((e) => (
        <Link key={e.titulo} href={e.url}>
          <div className="cursor-pointer py-1.5 border-b border-gray-100 text-sm text-gray-800 hover:text-gray-600">
            {e.titulo}
          </div>
        </Link>
      ))}
    </div>
  );
};

export const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navbarRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const navElementsRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollYRef = useRef(0);
  const ticking = useRef(false);

  useEffect(() => {
    if (
      !navbarRef.current ||
      !logoRef.current ||
      !navElementsRef.current ||
      !buttonRef.current
    )
      return;

    // Initial animation
    const tl = gsap.timeline({ defaults: { ease: "power2.out" } });
    tl.fromTo(
      navbarRef.current,
      { y: -50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6 }
    )
      .fromTo(
        logoRef.current,
        { x: -20, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.4 },
        "-=0.3"
      )
      .fromTo(
        navElementsRef.current,
        { y: -10, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.4 },
        "-=0.3"
      )
      .fromTo(
        buttonRef.current,
        { x: 20, opacity: 0 },
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
    currentButtonRef.addEventListener("mouseenter", handleMouseEnter);
    currentButtonRef.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (currentButtonRef) {
        currentButtonRef.removeEventListener("mouseenter", handleMouseEnter);
        currentButtonRef.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, []);

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
    <div ref={navbarRef} className="w-full fixed top-0 py-3 px-4 md:px-6 z-50">
      <div className="w-full flex items-center">
        {/* Logo - Izquierda */}
        <div className="flex-shrink-0">
          <Link href="/">
            <div ref={logoRef} className="cursor-pointer relative group">
              <Image
                src={"/logo_2.png"}
                height={40}
                width={40}
                alt="logo de piramide soft"
                className="transition-all duration-300 group-hover:scale-110"
              />
              <div className="absolute -inset-1 rounded-full blur-sm bg-gray-100 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            </div>
          </Link>
        </div>

        {/* Navbar Elements - Centro absoluto */}
        <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2">
          <div
            ref={navElementsRef}
            className="bg-[#2563eb] px-2 py-1 rounded-full"
          >
            <Navbar_elements />
          </div>
        </div>

        {/* Session Button - Derecha */}
        <div className="ml-auto flex-shrink-0">
          <div className="hidden md:block">
            <div ref={buttonRef}>
              <SessionButton />
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="block md:hidden">
            <button
              className="p-1.5"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-md py-3 px-4 mx-2 rounded-lg mt-1">
          <MobileNavbarElements />
          <div className="mt-3 pt-3 border-t border-gray-100">
            <SessionButton isMobile={true} />
          </div>
        </div>
      )}
    </div>
  );
};

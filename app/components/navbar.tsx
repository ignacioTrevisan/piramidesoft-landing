"use client";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import styles from "./navbar.module.css";
import { Navbar_elements } from "./navbar_elements";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const MobileNavbarElements = () => {
  const elementos = [
    { titulo: "Inicio", url: "/" },
    { titulo: "Blogs", url: "/blog" },
    { titulo: "Productos", url: "/products" },
  ];
  
  return (
    <div className="flex flex-col gap-4">
      {elementos.map((e) => (
        <div 
          key={e.titulo}
          className="cursor-pointer py-2 border-b border-gray-100 text-gray-800 hover:text-gray-600"
        >
          {e.titulo}
        </div>
      ))}
    </div>
  );
};

export const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navbarRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  
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
    
    // Scroll animation
    const showAnim = gsap.from(navbarRef.current, {
      yPercent: -100,
      paused: true,
      duration: 0.2,
    }).progress(1);
    
    ScrollTrigger.create({
      start: "top top",
      end: "max",
      onUpdate: (self) => {
        self.direction === -1 ? showAnim.play() : showAnim.reverse();
      },
    });
    
    // Button hover animation
    buttonRef.current.addEventListener("mouseenter", () => {
      gsap.to(buttonRef.current, {
      scale: 1.03,
      backgroundColor: "#1E40AF", // Azul más oscuro para hover
      duration: 0.2,
      });
    });
    
    buttonRef.current.addEventListener("mouseleave", () => {
      gsap.to(buttonRef.current, {
      scale: 1,
      backgroundColor: "#2563EB", // Azul principal
      duration: 0.2,
      });
    });
    
    return () => {
      // Cleanup
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      if (buttonRef.current) {
        buttonRef.current.removeEventListener("mouseenter", () => {});
        buttonRef.current.removeEventListener("mouseleave", () => {});
      }
    };
  }, []);
  
  return (
    <div
      ref={navbarRef}
      className={`w-full fixed flex items-center justify-between md:justify-around top-0 py-4 px-6 md:px-10 ${styles.navbar} navbar-glass border-b border-gray-100 z-50`}
    >
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
      <div className="hidden md:block">
        <Navbar_elements />
      </div>
      <div className="block md:hidden">
        <button className="p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
        {mobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-white shadow-md py-4 px-4">
            <MobileNavbarElements />
            <button className="bg-[#2563EB] hover:bg-[#1E40AF] transition-all text-white p-2 px-5 w-full rounded-lg cursor-pointer mt-4 text-sm">
              Ingresar
            </button>
          </div>
        )}
      </div>
      <button 
        ref={buttonRef}
        className="hidden md:block bg-[#2563EB] hover:bg-[#1E40AF] transition-all text-white py-2.5 px-6 w-auto rounded-lg cursor-pointer shadow-sm hover:shadow-md text-base font-medium"
      >
        Ingresar
      </button>
    </div>
  );
};
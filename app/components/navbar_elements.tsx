"use client";
import { useState, useRef, useEffect } from "react";
import styles from "./navbar.module.css";
import { gsap } from "gsap";

interface elementos_navbar {
  titulo: string;
  isFocus: boolean;
  url: string;
}

export const Navbar_elements = () => {
  const elementos: elementos_navbar[] = [
    { titulo: "Inicio", isFocus: true, url: "/" },
    { titulo: "Blogs", isFocus: true, url: "/blog" },
    { titulo: "Productos", isFocus: true, url: "/products" },
  ];
  const [elementHovered, setElementHovered] = useState("");
  const containerRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  
  // Reset itemRefs array
  itemRefs.current = [];
  
  // Add or update ref in the array
  const addToItemRefs = (el: HTMLDivElement | null, index: number) => {
    if (el && !itemRefs.current[index]) {
      itemRefs.current[index] = el;
    }
  };
  
  useEffect(() => {
    if (!containerRef.current || itemRefs.current.length === 0) return;
    
    // Initial animation for navbar items
    gsap.fromTo(
      itemRefs.current,
      { y: -20, opacity: 0 },
      { 
        y: 0, 
        opacity: 1, 
        duration: 0.5, 
        stagger: 0.1,
        delay: 0.3,
        ease: "power2.out" 
      }
    );
    
    // Add hover animation for each item
    itemRefs.current.forEach((item) => {
      if (!item) return;
      
      item.addEventListener("mouseenter", () => {
        gsap.to(item, {
          y: -2,
          duration: 0.2,
          ease: "power1.out"
        });
      });
      
      item.addEventListener("mouseleave", () => {
        gsap.to(item, {
          y: 0,
          duration: 0.2,
          ease: "power1.out"
        });
      });
    });
    
    return () => {
      // Cleanup event listeners
      itemRefs.current.forEach((item) => {
        if (!item) return;
        item.removeEventListener("mouseenter", () => {});
        item.removeEventListener("mouseleave", () => {});
      });
    };
  }, []);

  return (
    <div ref={containerRef} className="flex h-full gap-8 items-center">
      {elementos.map((e, i) => (
        <div 
          ref={(el) => addToItemRefs(el, i)}
          className="relative" 
          key={e.titulo}
        >
          <div
            className="cursor-pointer"
            onMouseEnter={() => setElementHovered(e.titulo)}
            onMouseLeave={() => setElementHovered("")}
          >
            <span className="text-gray-800 text-lg font-medium transition-colors duration-300 hover:text-[#2563EB]">
              {e.titulo}
            </span>
          </div>
          <div className="absolute w-full h-[2px] bottom-[-4px]">
            <div
              className={`bg-[#2563EB] ${
                elementHovered === e.titulo ? "w-full" : "w-0"
              } ${styles.hr} transition-all duration-300 h-full`}
            />
          </div>
        </div>
      ))}
    </div>
  );
};
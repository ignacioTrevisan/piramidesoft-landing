"use client";

import Image from "next/image";
import { useRef, useEffect } from "react";

export default function HeroImage() {
  const imageRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Solo cargar GSAP en el cliente
    const loadGsapAnimation = async () => {
      const { gsap } = await import("gsap");
      
      gsap.fromTo(
        imageRef.current,
        { x: 30, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.8, ease: "power1.out" }
      );
    };
    
    loadGsapAnimation();
  }, []);

  return (
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
  );
}

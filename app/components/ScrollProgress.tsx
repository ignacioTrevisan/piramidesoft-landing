"use client";

import { useEffect, useState } from "react";

export default function ScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Calcular el progreso del scroll global
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = scrollTop / docHeight;
      setScrollProgress(scrollPercent);
    };

    // Escuchar eventos de scroll
    window.addEventListener("scroll", handleScroll);

    // Limpiar evento al desmontar
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="fixed bottom-0 left-0 w-full h-1 bg-gray-200 z-40 pointer-events-none">
      <div
        className="h-full bg-[#2563EB]"
        style={{ width: `${scrollProgress * 100}%` }}
      ></div>
    </div>
  );
}

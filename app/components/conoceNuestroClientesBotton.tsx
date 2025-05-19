"use client";
import { useState } from "react";
import Image from "next/image";

export default function ClientLogosSection() {
  const logosRow1 = [
    "/1-sin-fondo.png",
    "/1-sin-fondo.png",
    "/1-sin-fondo.png",
    "/1-sin-fondo.png",
    "/1-sin-fondo.png",
  ];

  const logosRow2 = [
    "/1-sin-fondo.png",
    "/1-sin-fondo.png",
    "/1-sin-fondo.png",
    "/1-sin-fondo.png",
    "/1-sin-fondo.png",
  ];

  return (
    <section className="bg-gray-50 rounded-xl py-6 px-4 sm:py-8 md:py-10 md:px-6 w-full max-w-4xl mx-auto mt-6 sm:mt-8 md:mt-16 shadow-sm">
      {/* Vertical en móvil, horizontal en xl (1280px) */}
      <div className="flex flex-col xl:flex-row items-center xl:items-start xl:justify-between gap-6">
        {/* Contenedor de logos */}
        <div className="w-full xl:w-auto">
          {/* Primera fila de logos */}
          <div className="flex justify-center xl:justify-start -space-x-1 sm:-space-x-2 md:-space-x-3">
            {logosRow1.map((src, i) => (
              <Image
                key={i}
                src={src}
                alt={`Logo ${i + 1}`}
                width={40}
                height={40}
                className="rounded-full border border-gray-200 bg-white p-1 w-10 h-10 sm:w-12 sm:h-12"
              />
            ))}
          </div>

          {/* Segunda fila de logos */}
          <div className="flex justify-center xl:justify-start -space-x-1 sm:-space-x-2 md:-space-x-3 mt-2 ml-0 xl:ml-6">
            {logosRow2.map((src, i) => (
              <Image
                key={i}
                src={src}
                alt={`Logo ${i + 6}`}
                width={40}
                height={40}
                className="rounded-full border border-gray-200 bg-white p-1 w-10 h-10 sm:w-12 sm:h-12"
              />
            ))}
          </div>
        </div>

        {/* Texto y CTA */}
        <div className="text-center xl:text-left w-full xl:w-auto xl:max-w-sm mt-6 xl:mt-0">
          <p className="text-gray-800 font-medium text-sm sm:text-base mb-4 ml-4 sm:mb-3">
            Más de <span className="font-bold">300</span> personas confiaron en
            nosotros para digitalizar sus negocios.
          </p>
          <button className=" bg-gray-800 rounded-2xl text-white px-4 py-2 hover:bg-gray-700 transition-all cursor-pointer text-sm sm:text-base block mx-auto  xl:ml-12 ">
            Conocé a nuestros clientes
          </button>
        </div>
      </div>
    </section>
  );
}

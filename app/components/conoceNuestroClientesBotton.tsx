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
    <section className="bg-gray-50 rounded-xl py-8 px-4 md:py-10 md:px-6 max-w-full md:max-w-4xl mx-auto mt-8 md:mt-16 shadow-sm">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Logos en dos filas */}
        <div className="flex flex-col gap-2 w-full md:w-auto">
          <div className="flex -space-x-4 justify-center md:justify-start">
            {logosRow1.map((src, i) => (
              <Image
                key={i}
                src={src}
                alt={`Logo ${i + 1}`}
                width={48}
                height={48}
                className="rounded-full border border-gray-200 bg-white p-1"
              />
            ))}
          </div>
          <div className="flex -space-x-4 ml-6 justify-center md:justify-start">
            {logosRow2.map((src, i) => (
              <Image
                key={i}
                src={src}
                alt={`Logo ${i + 6}`}
                width={48}
                height={48}
                className="rounded-full border border-gray-200 bg-white p-1"
              />
            ))}
          </div>
        </div>

        {/* Texto y CTA */}
        <div className="text-center md:text-left max-w-full md:max-w-md mt-6 md:mt-0">
          <p className="text-gray-800 font-medium text-sm md:text-base mb-2 mx-auto md:ml-4 max-w-xs md:max-w-none">
            Más de <span className="font-bold">300</span> personas confiaron en
            nosotros para digitalizar sus negocios.
          </p>
          <button className="bg-gray-800 rounded-2xl text-white px-4 py-2 mx-auto md:ml-10 hover:bg-gray-700 transition-all cursor-pointer block md:inline-block">
            Conocé a nuestros clientes
          </button>
        </div>
      </div>
    </section>
  );
}

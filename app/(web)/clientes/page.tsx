"use client";

import { useRef, useEffect } from "react";

interface Cliente {
  nombre: string;
  ubicacion: string;
  contacto: string;
}

const clientesData: Cliente[] = [
  {
    nombre: "Comercial San Martín",
    ubicacion: "Buenos Aires, Argentina",
    contacto: "contacto@comercialsanmartin.com",
  },
  {
    nombre: "Distribuidora El Sol",
    ubicacion: "Córdoba, Argentina",
    contacto: "ventas@elsol.com.ar",
  },
  {
    nombre: "Autopartes Norte",
    ubicacion: "Rosario, Santa Fe",
    contacto: "info@autopartesnorte.com",
  },
  {
    nombre: "Ferretería Central",
    ubicacion: "Mendoza, Argentina",
    contacto: "administracion@ferreteriacentral.com",
  },
  {
    nombre: "Textiles La Victoria",
    ubicacion: "Tucumán, Argentina",
    contacto: "consultas@textilesvictoria.com",
  },
  {
    nombre: "Mayorista del Valle",
    ubicacion: "Salta, Argentina",
    contacto: "pedidos@mayoristadelvalle.com",
  },
  {
    nombre: "Distribuidora Patagonia",
    ubicacion: "Bariloche, Río Negro",
    contacto: "contacto@distripatagonia.com",
  },
  {
    nombre: "Electrónica Moderna",
    ubicacion: "La Plata, Buenos Aires",
    contacto: "ventas@electronicamoderna.com",
  },
  {
    nombre: "Supermercado Familiar",
    ubicacion: "San Juan, Argentina",
    contacto: "gerencia@superfamiliar.com.ar",
  },
  {
    nombre: "Librería Universitaria",
    ubicacion: "Santa Fe, Argentina",
    contacto: "info@libreriauniversitaria.com",
  },
];

export default function ClientesPage() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const tableRef = useRef<HTMLTableElement>(null);

  useEffect(() => {
    const loadAnimations = async () => {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");

      if (typeof window !== "undefined") {
        gsap.registerPlugin(ScrollTrigger);
      }

      // Animaciones de entrada
      const tl = gsap.timeline({ defaults: { ease: "power2.out" } });

      tl.fromTo(
        titleRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8 }
      )
        .fromTo(
          descriptionRef.current,
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6 },
          "-=0.4"
        )
        .fromTo(
          tableRef.current,
          { y: 40, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8 },
          "-=0.2"
        );

      // Animación de las filas de la tabla
      const rows = tableRef.current?.querySelectorAll("tbody tr");
      if (rows) {
        gsap.fromTo(
          rows,
          { x: -20, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 0.5,
            stagger: 0.1,
            delay: 0.5,
            ease: "power1.out",
          }
        );
      }
    };

    loadAnimations();

    return () => {
      import("gsap/ScrollTrigger").then(({ ScrollTrigger }) => {
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      });
    };
  }, []);

  return (
    <div className="min-h-screen mt-20 bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1
            ref={titleRef}
            className="text-4xl md:text-5xl font-bold text-[#2563EB] mb-6 claseConFuenteFea"
          >
            Nuestros Clientes
          </h1>
          <p
            ref={descriptionRef}
            className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed"
          >
            Más de 300 empresas han confiado en PiramideSoft para digitalizar
            sus negocios. Aquí puedes conocer algunos de nuestros clientes
            destacados y cómo contactarlos.
          </p>
        </div>

        {/* Tabla de clientes */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <table ref={tableRef} className="w-full">
            <thead className="bg-[#2563EB] text-white">
              <tr>
                <th className="px-6 py-4 text-left text-lg font-semibold">
                  Nombre
                </th>
                <th className="px-6 py-4 text-left text-lg font-semibold">
                  Ubicación
                </th>
                <th className="px-6 py-4 text-left text-lg font-semibold">
                  Contacto
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {clientesData.map((cliente, index) => (
                <tr
                  key={index}
                  className="hover:bg-gray-50 transition-colors duration-200"
                >
                  <td className="px-6 py-4">
                    <div className="text-lg font-medium text-gray-900">
                      {cliente.nombre}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-gray-700 flex items-center">
                      <svg
                        className="w-4 h-4 mr-2 text-[#2563EB]"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {cliente.ubicacion}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <a
                      href={`mailto:${cliente.contacto}`}
                      className="text-[#2563EB] hover:text-blue-800 transition-colors duration-200 flex items-center"
                    >
                      <svg
                        className="w-4 h-4 mr-2"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                      </svg>
                      {cliente.contacto}
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

"use client";

import { useRef, useEffect } from "react";
import { useRouter } from "next/navigation";

interface Cliente {
  nombre: string;
  ubicacion: string;
  contacto: string;
}

const clientesData: Cliente[] = [
  {
    nombre: "𝐷𝐼𝑆𝑇𝑅𝐼𝐵𝑈𝐼𝐷𝑂𝑅𝐴 𝑁𝐴𝑇𝑈𝑅𝐴𝐿",
    ubicacion: "Colon, Entre Rios",
    contacto: "3447 551926",
  },
  {
    nombre: "Kioscos Pinocho",
    ubicacion: "Villaguay, Entre Rios",
    contacto: "3455 54-2713",
  },
  {
    nombre: "Metalurgica Constructora Estrumax",
    ubicacion: "San Jose, Entre Rios",
    contacto: "03446 544450",
  },
  {
    nombre: `EMER "Emergencias Médicas Entre Rios SRL `,
    ubicacion: "Colon, Entre Rios",
    contacto: "3447 423346",
  },
  {
    nombre: "La Buena Pasta Colón",
    ubicacion: "Colon, Entre Rios",
    contacto: "@labuenapasta.er",
  },
  {
    nombre: "Pizzeria Me Gusta",
    ubicacion: "Concepcion del Uruguay, Entre Rios",
    contacto: "3442 429806",
  },
  {
    nombre: "Zona informatica",
    ubicacion: "Concepcion del Uruguay, Entre Rios",
    contacto: "3442 431000",
  },
  {
    nombre: "Veterinaria Fisiovet",
    ubicacion: "Concepcion del Uruguay, Entre Rios",
    contacto: "3442 498143",
  },
  {
    nombre: "Bonnin Hnos",
    ubicacion: "Colon, Entre Rios",
    contacto: "@bonninhnos",
  },
  {
    nombre: "Autoservicio Bouvier",
    ubicacion: "San Jose, Entre Rios",
    contacto: "3447 400191",
  },
  {
    nombre: "Autoservicio Bouvier",
    ubicacion: "San Jose, Entre Rios",
    contacto: "3447 400191",
  },
  {
    nombre: "Bonato Accesorios",
    ubicacion: "Colon, Entre Rios",
    contacto: "3447 423477",
  },
  {
    nombre: "Mi Pueblo Autoservicio",
    ubicacion: "Colon, Entre Rios",
    contacto: "@mipueblo.autoservicio",
  },
  {
    nombre: "Bocatto",
    ubicacion: "Colon, Entre Rios",
    contacto: "03447 542756",
  },
  {
    nombre: "Ultraneumáticos",
    ubicacion: "Colon, Entre Rios",
    contacto: "3447 572482",
  },
  {
    nombre: "CORRALON FORESTAL",
    ubicacion: "Buenos Aires, Buenos Aires",
    contacto: "011 5155-0603",
  },
  {
    nombre: "Barraca Llumarc S.R.L.",
    ubicacion: "Colon, Entre Rios",
    contacto: "3447 477616",
  },
  {
    nombre: "Refrigeración Moreno",
    ubicacion: "Moreno, Buenos Aires",
    contacto: "0237 466-5918",
  },
  {
    nombre: "OXFORD POLO CLUB",
    ubicacion: "Esperanza, Santa Fe",
    contacto: "342 5304765",
  },
  {
    nombre: "Chic Soul",
    ubicacion: "Colon, Entre Rios",
    contacto: "@chicsoulddc",
  },
  {
    nombre: "Cantera Crepy ",
    ubicacion: "Colon, Entre Rios",
    contacto: "03442 15-58-8244",
  },
  {
    nombre: "Lubricentro 2mil3",
    ubicacion: "Colon, Entre Rios",
    contacto: "03447 42-7001",
  },
  {
    nombre: "Corralon Martin  ",
    ubicacion: "San Fernando Del Valle, Catamarca",
    contacto: "0383 445-4853",
  },
  {
    nombre: "Punto13 Distribuidora ",
    ubicacion: " Colon, Entre Rios",
    contacto: "punto13dis@gmail.com",
  },
  {
    nombre: "Dermasur ",
    ubicacion: "Neuquen, Argentina",
    contacto: "299 524 9649",
  },
  {
    nombre: "AUTOSERVIO MA-BRI",
    ubicacion: "San Jose, Entre Rios",
    contacto: "3447 45-5225",
  },
  {
    nombre: "Arenera Durand",
    ubicacion: "Villa Elisa, Entre Rios",
    contacto: "03447 48-0500",
  },
  {
    nombre: "Viejo Almacen",
    ubicacion: "Colon, Entre Rios",
    contacto: "@restauranteviejoalmacen",
  },
  {
    nombre: "El Yugo",
    ubicacion: "Concepcion Del Uruguay, Entre Rios",
    contacto: "03442 441600",
  },
  {
    nombre: "Don Goyo",
    ubicacion: "Colon, Entre Rios",
    contacto: "03447 417745",
  },
  {
    nombre: "Servicentro San José",
    ubicacion: "San Jose, Entre Rios",
    contacto: "0345 421-6966",
  },
  {
    nombre: "Autopartes Daniel",
    ubicacion: "San Cipriano, Entre Rios",
    contacto: "03442 416180",
  },
  {
    nombre: "C & G Distribuciones S.r.l.",
    ubicacion: "Colon, Entre Rios",
    contacto: "03447 64-3631",
  },
];

export default function ClientesPage() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const tableRef = useRef<HTMLTableElement>(null);
  const backButtonRef = useRef<HTMLButtonElement>(null);
  const router = useRouter();

  const handleGoBack = () => {
    router.push("/");
  };

  useEffect(() => {
    // Manejar la tecla ESC
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        handleGoBack();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    const loadAnimations = async () => {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");

      if (typeof window !== "undefined") {
        gsap.registerPlugin(ScrollTrigger);
      }

      // Animaciones de entrada
      const tl = gsap.timeline({ defaults: { ease: "power2.out" } });

      tl.fromTo(
        backButtonRef.current,
        { y: -20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6 }
      )
        .fromTo(
          titleRef.current,
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8 },
          "-=0.4"
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
      document.removeEventListener("keydown", handleKeyDown);
      import("gsap/ScrollTrigger").then(({ ScrollTrigger }) => {
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      });
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 pt-24 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Botón de salir - Ahora con z-index alto y más espaciado */}
        <div className="mb-8 relative z-40">
          <button
            ref={backButtonRef}
            onClick={handleGoBack}
            className="flex items-center gap-3 bg-[#2563EB] text-white px-6 py-3 rounded-xl shadow-lg hover:shadow-xl hover:bg-blue-700 transition-all duration-200 group font-semibold"
          >
            <svg
              className="w-5 h-5 transition-transform group-hover:-translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            Volver al inicio
            <span className="text-xs bg-blue-600 px-2 py-1 rounded-md ml-2">
              ESC
            </span>
          </button>
        </div>

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

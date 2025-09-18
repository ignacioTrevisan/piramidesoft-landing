"use client";
import Image from "next/image";
import { useRef, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function ClientLogosSection() {
  const router = useRouter();
  const sliderRef1 = useRef<HTMLDivElement>(null);
  const sliderRef2 = useRef<HTMLDivElement>(null);

  const handleClientesClick = () => {
    router.push("/clientes");
  };

  // Datos de clientes con logos e información
  const clientsData = [
    {
      logo: "/logos_clientes/1.jpeg",
      name: "Nombre de negocio",
      description: "Soluciones tecnológicas",
    },
    {
      logo: "/logos_clientes/2.jpeg",
      name: "Nombre de negocio",
      description: "Software empresarial",
    },
    {
      logo: "/logos_clientes/3.jpeg",
      name: "Nombre de negocio",
      description: "Análisis de datos",
    },
    {
      logo: "/logos_clientes/4.jpeg",
      name: "Nombre de negocio",
      description: "Servicios en la nube",
    },
    {
      logo: "/logos_clientes/5.jpeg",
      name: "Nombre de negocio",
      description: "Desarrollo web",
    },
    {
      logo: "/logos_clientes/6.jpeg",
      name: "Nombre de negocio",
      description: "Apps móviles",
    },
    {
      logo: "/logos_clientes/7.jpeg",
      name: "Nombre de negocio",
      description: "Marketing digital",
    },
    {
      logo: "/logos_clientes/8.jpeg",
      name: "Nombre de negocio",
      description: "Sistemas inteligentes",
    },
    {
      logo: "/logos_clientes/9.jpeg",
      name: "NetWork Nombre de negocio",
      description: "Redes y conectividad",
    },
    {
      logo: "/logos_clientes/10.jpeg",
      name: "Nombre de negocio",
      description: "Desarrollo de software",
    },
  ];

  // Dividir clientes en dos grupos
  const firstRowClients = clientsData.slice(0, 5);
  const secondRowClients = clientsData.slice(5);

  useEffect(() => {
    const loadAnimations = async () => {
      const { gsap } = await import("gsap");

      if (!sliderRef1.current || !sliderRef2.current) return;

      // Animación infinita para la primera fila (derecha a izquierda)
      gsap.set(sliderRef1.current, { x: 0 });
      gsap.to(sliderRef1.current, {
        x: "-50%",
        duration: 25,
        repeat: -1,
        ease: "none",
      });

      // Animación infinita para la segunda fila (izquierda a derecha)
      gsap.set(sliderRef2.current, { x: "-50%" });
      gsap.to(sliderRef2.current, {
        x: "0%",
        duration: 25,
        repeat: -1,
        ease: "none",
      });
    };

    loadAnimations();

    return () => {
      import("gsap").then(({ gsap }) => {
        gsap.killTweensOf(sliderRef1.current);
        gsap.killTweensOf(sliderRef2.current);
      });
    };
  }, []);

  const renderClientCard = (client: (typeof clientsData)[0], key: string) => (
    <div
      key={key}
      className="flex items-center gap-2 sm:gap-3 md:gap-4 p-2 sm:p-3 md:p-4 w-[140px] sm:w-[160px] md:w-[180px] lg:w-[200px] flex-shrink-0"
    >
      <div className="flex-shrink-0">
        <Image
          src={client.logo}
          alt={client.name}
          width={40}
          height={40}
          className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full border-2 border-gray-200 bg-white p-1 object-cover"
          loading="lazy"
        />
      </div>
      <div className="flex-1 min-w-0">
        <h3 className="font-semibold text-gray-900 text-xs sm:text-sm md:text-base truncate">
          {client.name}
        </h3>
        <p className="text-gray-600 text-xs sm:text-xs md:text-sm truncate hidden sm:block">
          {client.description}
        </p>
      </div>
    </div>
  );

  return (
    <section className="w-full py-8 sm:py-12 md:py-16 overflow-hidden pb-5">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-6 sm:mb-8">
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
          Nuestros Clientes
        </h2>
      </div>

      {/* Contenedor con degradado en los bordes */}
      <div className="relative">
        {/* Degradado izquierdo */}
        <div className="absolute left-0 top-0 w-16 sm:w-24 md:w-32 h-full bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none"></div>

        {/* Degradado derecho */}
        <div className="absolute right-0 top-0 w-16 sm:w-24 md:w-32 h-full bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none"></div>

        {/* Primera fila de slider */}
        <div className="overflow-hidden mb-2 sm:mb-4">
          <div
            ref={sliderRef1}
            className="flex gap-2 sm:gap-3 md:gap-4"
            style={{ width: "calc(200% + 16px)" }}
          >
            {/* Primera copia */}
            {firstRowClients.map((client, index) =>
              renderClientCard(client, `first-${index}`)
            )}
            {/* Segunda copia para continuidad */}
            {firstRowClients.map((client, index) =>
              renderClientCard(client, `first-copy-${index}`)
            )}
          </div>
        </div>

        {/* Segunda fila de slider */}
        <div className="overflow-hidden">
          <div
            ref={sliderRef2}
            className="flex gap-2 sm:gap-3 md:gap-4"
            style={{ width: "calc(200% + 16px)" }}
          >
            {/* Primera copia */}
            {secondRowClients.map((client, index) =>
              renderClientCard(client, `second-${index}`)
            )}
            {/* Segunda copia para continuidad */}
            {secondRowClients.map((client, index) =>
              renderClientCard(client, `second-copy-${index}`)
            )}
          </div>
        </div>
      </div>

      {/* Indicador adicional en móvil */}
      <div className="text-center mt-6 sm:mt-8 md:hidden">
        <p className="text-xs text-gray-500">Desliza para ver más clientes</p>
      </div>

      {/* Botón Ver Más - Debajo de los logos */}
      <div className="text-center mt-6 sm:mt-8">
        <button
          onClick={handleClientesClick}
          className="inline-flex items-center gap-2 bg-gray-900 text-white px-4 sm:px-6 md:px-8 py-2 sm:py-3 rounded-full hover:bg-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-sm sm:text-base font-medium"
        >
          <span>Ver todos nuestros clientes</span>
          <svg
            className="w-4 h-4 sm:w-5 sm:h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </button>
      </div>
    </section>
  );
}

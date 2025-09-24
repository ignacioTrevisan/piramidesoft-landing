"use client";
import Image from "next/image";
import { useRef, useEffect, useState } from "react";
import { useRouter } from "next/navigation";

// Tipos para GSAP
interface GSAPTween {
  kill: () => void;
}

interface GSAP {
  set: (target: Element | null, vars: Record<string, any>) => void;
  to: (target: Element | null, vars: Record<string, any>) => GSAPTween;
  killTweensOf: (target: Element | null) => void;
  getTweensOf: (target: Element | null) => GSAPTween[];
}

export default function ClientLogosSection() {
  const router = useRouter();
  const sliderRef1 = useRef<HTMLDivElement>(null);
  const sliderRef2 = useRef<HTMLDivElement>(null);
  const [isAnimationReady, setIsAnimationReady] = useState<boolean>(false);
  const animationsRef = useRef<GSAPTween[]>([]);

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
  const firstRowClients = clientsData.slice(0, 25);

  useEffect(() => {
    let gsap: GSAP;
    let mounted: boolean = true;

    const initializeAnimations = async (): Promise<void> => {
      try {
        const gsapModule = await import("gsap");
        gsap = gsapModule.gsap as GSAP;

        if (!mounted || !sliderRef1.current) return;

        // Limpiar animaciones anteriores
        gsap.killTweensOf(sliderRef1.current);
        if (sliderRef2.current) {
          gsap.killTweensOf(sliderRef2.current);
        }

        // Configurar posición inicial sin transición
        gsap.set(sliderRef1.current, {
          x: 0,
          force3D: true,
          will: "transform",
        });

        // Crear animación para primera fila
        const anim1: GSAPTween = gsap.to(sliderRef1.current, {
          x: "-50%",
          duration: 30,
          repeat: -1,
          ease: "none",
          force3D: true,
          onRepeat: () => {
            // Resetear posición suavemente al repetir
            if (!mounted) return;
            gsap.set(sliderRef1.current, { x: 0 });
          },
        });

        // Guardar referencia a la animación
        animationsRef.current = [anim1];

        if (mounted) {
          setIsAnimationReady(true);
        }
      } catch (error) {
        console.error("Error loading GSAP:", error);
      }
    };

    initializeAnimations();

    return () => {
      mounted = false;
      setIsAnimationReady(false);

      // Limpiar animaciones
      if (gsap && animationsRef.current.length > 0) {
        animationsRef.current.forEach((anim: GSAPTween) => {
          if (anim && anim.kill) {
            anim.kill();
          }
        });
        animationsRef.current = [];
      }

      // Limpiar todas las animaciones de GSAP en estos elementos
      if (gsap) {
        if (sliderRef1.current) gsap.killTweensOf(sliderRef1.current);
        if (sliderRef2.current) gsap.killTweensOf(sliderRef2.current);
      }
    };
  }, []);

  // Reiniciar animaciones si se detienen
  useEffect(() => {
    if (!isAnimationReady) return;

    const checkAnimation = (): void => {
      if (!sliderRef1.current) return;

      // Verificar si la animación sigue activa
      import("gsap").then(({ gsap }) => {
        const gsapInstance = gsap as GSAP;
        const tweens: GSAPTween[] = gsapInstance.getTweensOf(
          sliderRef1.current
        );
        if (tweens.length === 0) {
          console.log("Restarting animation...");
          // Reiniciar animación si se detuvo
          gsapInstance.set(sliderRef1.current, { x: 0 });
          gsapInstance.to(sliderRef1.current, {
            x: "-50%",
            duration: 30,
            repeat: -1,
            ease: "none",
            force3D: true,
          });
        }
      });
    };

    // Verificar cada 5 segundos
    const interval: NodeJS.Timeout = setInterval(checkAnimation, 5000);

    return () => clearInterval(interval);
  }, [isAnimationReady]);

  const renderClientCard = (client: (typeof clientsData)[0], key: string) => (
    <div
      key={key}
      className="flex items-center gap-2 sm:gap-3 md:gap-4 p-2 sm:p-3 md:p-4 w-[40px] sm:w-[60px] md:w-[80px] lg:w-[100px] flex-shrink-0"
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
            className={`flex gap-2 sm:gap-3 md:gap-4 transition-opacity duration-500 ${
              isAnimationReady ? "opacity-100" : "opacity-50"
            }`}
            style={{
              width: "calc(200% + 16px)",
              willChange: "transform",
            }}
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

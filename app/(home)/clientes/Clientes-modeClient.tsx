"use client";

import React, { useEffect, useRef, useState, CSSProperties } from "react";

// Componente para mostrar el mensaje de desarrollo
const ClientesEnDesarrollo: React.FC = () => {
  return (
    <div className="w-full max-w-2xl mx-auto p-6 bg-gradient-to-r from-blue-50 to-white rounded-lg border border-blue-200 shadow-sm">
      <div className="text-center">
        <div className="mb-4">
          <svg
            className="w-16 h-16 mx-auto text-blue-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 7.172V5L8 4z"
            />
          </svg>
        </div>
        <h3 className="text-2xl font-semibold text-gray-800 mb-3">
          Sección en Desarrollo
        </h3>
        <p className="text-gray-600 mb-2 text-lg">
          Nuestra sección de{" "}
          <span className="font-semibold text-blue-600">Clientes</span> está
          actualmente en desarrollo
        </p>
        <p className="text-gray-500 text-sm">
          Disculpamos las molestias. Pronto podrás ver todos nuestros proyectos
          y testimonios.
        </p>
        <div className="mt-4 flex justify-center">
          <div className="flex space-x-1">
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce"></div>
            <div
              className="w-2 h-2 bg-blue-500 rounded-full animate-bounce"
              style={{ animationDelay: "0.1s" } as CSSProperties}
            ></div>
            <div
              className="w-2 h-2 bg-blue-500 rounded-full animate-bounce"
              style={{ animationDelay: "0.2s" } as CSSProperties}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function PiramideSoftPage(): React.ReactElement {
  const subtitleRef = useRef<HTMLHeadingElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const [displayText, setDisplayText] = useState<string>("");
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isWaiting, setIsWaiting] = useState<boolean>(false);

  const messages: string[] = [
    "Desarrollamos **soluciones digitales** innovadoras",
    "Creamos **experiencias web** excepcionales",
    "Transformamos **ideas** en realidad digital",
    "Construimos el **futuro** de tu negocio",
  ];

  // Efecto de escritura para el subtítulo
  useEffect(() => {
    if (isWaiting) return;

    const currentMessage: string = messages[currentIndex];
    let charIndex: number = 0;

    const typeWriter = (): void => {
      if (charIndex < currentMessage.length) {
        setDisplayText(currentMessage.slice(0, charIndex + 1));
        charIndex++;
        setTimeout(typeWriter, 50);
      } else {
        // Una vez que termina de escribir, esperar 5 segundos
        setIsWaiting(true);
        setTimeout(() => {
          setDisplayText("");
          setCurrentIndex((prev: number) => (prev + 1) % messages.length);
          setIsWaiting(false);
        }, 5000);
      }
    };

    const timer: NodeJS.Timeout = setTimeout(typeWriter, 100);
    return () => clearTimeout(timer);
  }, [currentIndex, messages, isWaiting]);

  // Función para renderizar texto con negritas
  const renderTextWithBold = (
    text: string
  ): (string | React.ReactElement)[] => {
    const parts: string[] = text.split(/(\*\*[^*]+\*\*)/);
    return parts.map((part: string, index: number) => {
      if (part.startsWith("**") && part.endsWith("**")) {
        return (
          <strong key={index} className="text-[#2563EB] font-bold">
            {part.slice(2, -2)}
          </strong>
        );
      }
      return part;
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-blue-100">
      <div className="container mx-auto px-4 py-8">
        <div className="w-full pt-10 justify-center items-center flex flex-col gap-y-2 md:mb-0">
          <div>
            {/* Título principal */}
            <h1
              style={{ letterSpacing: "0.11em" } as CSSProperties}
              className="xl:text-8xl claseConFuenteFea lg:text-6xl md:text-5xl sm:text-5xl lg:mt-7 md:mt-9 text-3xl text-center md:text-left mb-4 text-[#2563EB] font-bold"
            >
              PIRAMIDE SOFT
            </h1>
          </div>

          <div className="w-full flex flex-col items-center">
            {/* Subtítulo animado */}
            <h2
              ref={subtitleRef}
              className="w-full text-xl md:text-2xl mb-3
              text-center text-gray-700 bg-gradient-to-r from-gray-700 to-[#2563EB]
              bg-clip-text text-transparent min-h-[3rem] md:min-h-[4rem]"
            >
              {renderTextWithBold(displayText)}
              <span className="animate-pulse text-[#2563EB]">|</span>
            </h2>
          </div>

          {/* Sección de clientes en desarrollo */}
          <div ref={textRef} className="mt-8 w-full">
            <ClientesEnDesarrollo />
          </div>
        </div>

        {/* Sección adicional con información de la empresa */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white rounded-lg shadow-sm border border-blue-100">
              <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Facilidad de uso
              </h3>
              <p className="text-gray-600 text-sm">
                Interfaces intuitivas y experiencias de usuario excepcionales
              </p>
            </div>

            <div className="text-center p-6 bg-white rounded-lg shadow-sm border border-blue-100">
              <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Velocidad
              </h3>
              <p className="text-gray-600 text-sm">
                Desarrollo ágil y entregas rápidas sin comprometer la calidad
              </p>
            </div>

            <div className="text-center p-6 bg-white rounded-lg shadow-sm border border-blue-100">
              <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Compromiso
              </h3>
              <p className="text-gray-600 text-sm">
                Dedicación completa a cada proyecto y satisfacción del cliente
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

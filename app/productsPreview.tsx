"use client";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const ProductsPreview = () => {
  const fatherContainer = useRef(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [mounted, setMounted] = useState(false);

  // Array con la información de las cartas
  const cardsData = [
    {
      id: 1,
      title: "Producto 1",
      description: "Facturacion Electronica version Lite",
      imagen:
        "https://ss-static-01.esmsv.com/id/134567/productos/obtenerimagen/?id=11&useDensity=true&width=1366&height=685&tipoEscala=contain",
    },
    {
      id: 2,
      title: "Producto 2",
      description: "Piramide RESTO version Lite",
      imagen:
        "https://ss-static-01.esmsv.com/id/134567/productos/obtenerimagen/?id=1&useDensity=true&width=1366&height=685&tipoEscala=contain",
    },
    {
      id: 3,
      title: "Producto 3",
      description: "Software para distribuidoras",
      imagen:
        "https://ss-static-01.esmsv.com/id/134567/productos/obtenerimagen/?id=45&useDensity=true&width=1366&height=685&tipoEscala=contain",
    },
    {
      id: 4,
      title: "Producto 4",
      description: "Distribuidora Natural WebApp",
      imagen:
        "https://res.cloudinary.com/nachotrevisan/image/upload/v1745602553/WhatsApp_Image_2025-04-12_at_12.36.50_PM_meddie.jpg",
    },
    {
      id: 5,
      title: "Producto 5",
      description: "Web & App movil para rastreo de vendedores",
      imagen:
        "https://res.cloudinary.com/nachotrevisan/image/upload/v1745603136/Sin_t%C3%ADtulo_sfwl43.png",
    },
    {
      id: 6,
      title: "Producto 6",
      description: "App de escritorio para comercio de indumentaria y calzado",
      imagen:
        "https://ss-static-01.esmsv.com/id/134567/productos/obtenerimagen/?id=50&useDensity=true&width=1366&height=685&tipoEscala=contain",
    },
  ];

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    // Registrar ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);

    // Limpiar animaciones previas
    ScrollTrigger.killAll();

    // Timeout para asegurar que el DOM esté listo
    const timer = setTimeout(() => {
      if (fatherContainer.current) {
        // Filtrar cartas válidas
        const validCards = cardRefs.current.filter((card) => card !== null);

        if (validCards.length > 0) {
          // Establecer estado inicial
          gsap.set(validCards, {
            opacity: 0,
            y: 30,
            scale: 0.95,
          });

          // Crear animación
          gsap.to(validCards, {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.6,
            stagger: 0.1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: fatherContainer.current,
              start: "top 70%",
              toggleActions: "play none none reverse",
            },
          });

          // Refresh ScrollTrigger
          ScrollTrigger.refresh();
        }
      }
    }, 100);

    return () => {
      clearTimeout(timer);
      ScrollTrigger.killAll();
    };
  }, [mounted]);

  return (
    <div
      className="fatherContainer min-h-screen py-16 bg-[#f2f2f2] relative"
      ref={fatherContainer}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 text-[#2563EB]">
          Nuestros Productos
        </h2>

        {/* Contenedor de las cartas - usamos grid para dos filas de tres columnas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cardsData.map((card, index) => (
            <div
              key={card.id}
              ref={(el) => {
                cardRefs.current[index] = el;
              }}
              className="bg-white rounded-lg shadow-md p-6 transition-all hover:shadow-lg border border-[#f2f2f2] hover:border-[#2563EB]"
            >
              <div className="h-32 bg-[#f2f2f2] relative rounded-md mb-4 flex items-center justify-center">
                <img
                  src={card.imagen}
                  className="w-full h-full object-cover rounded-md"
                  alt={`${card.title} imagen`}
                  loading="lazy"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">
                {card.title}
              </h3>
              <p className="text-gray-600 mb-6">{card.description}</p>
              <Link
                href={"/products"}
                className="inline-block w-full text-center bg-[#2563EB] hover:bg-blue-700 text-white font-medium py-2 px-4 rounded transition-colors"
              >
                Conoce más
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <p className="text-gray-600 mb-4">
            Explora nuestra gama completa de productos
          </p>
          <Link
            href={"/products"}
            className="inline-block bg-transparent border-2 border-[#2563EB] text-[#2563EB] hover:bg-[#2563EB] hover:text-white font-bold py-3 px-6 rounded-lg transition-all"
          >
            Ver todos los productos
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductsPreview;

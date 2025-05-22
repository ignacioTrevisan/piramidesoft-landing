"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { useRouter } from "next/navigation";

// Función para asegurar que todos los productos sean visibles
const ensureElementsVisible = () => {
  // Seleccionar todos los elementos de tarjeta de productos y hacerlos visibles
  if (typeof document !== "undefined") {
    const productCards = document.querySelectorAll(".card-hover");
    productCards.forEach((card) => {
      (card as HTMLElement).style.opacity = "1";
      (card as HTMLElement).style.transform = "translateY(0)";
    });
  }
};

// Register ScrollTrigger
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface ProductCardProps {
  title: string;
  description: string;
  image: string;
  features: string[];
  category: string;
}

const ProductCard = ({
  title,
  description,
  image,
  features,
  category,
}: ProductCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  // Generar un slug único para cada producto basado en su título
  const productSlug = title.toLowerCase().replace(/\s+/g, "-");
  const [isCardMounted, setIsCardMounted] = useState(false);

  useEffect(() => {
    setIsCardMounted(true);
  }, []);

  useEffect(() => {
    if (!cardRef.current || !isCardMounted) return;

    // Limpiar cualquier animación previa
    gsap.set(cardRef.current, { clearProps: "all" });

    // Asegurarse de que ScrollTrigger está registrado
    if (typeof window !== "undefined") {
      gsap.registerPlugin(ScrollTrigger);
    }

    // Crear la animación con un pequeño retraso para asegurar que todos los elementos estén en el DOM
    const animation = gsap.fromTo(
      cardRef.current,
      {
        y: 50,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.7,
        delay: 0.1,
        scrollTrigger: {
          trigger: cardRef.current,
          start: "top bottom-=100",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Forzar un refresh de ScrollTrigger
    ScrollTrigger.refresh();

    // Como respaldo, asegurar que las tarjetas sean visibles después de 500ms
    const timer = setTimeout(() => {
      if (cardRef.current) {
        cardRef.current.style.opacity = "1";
        cardRef.current.style.transform = "translateY(0)";
      }
      // También intentar hacer visibles todas las tarjetas
      ensureElementsVisible();
    }, 500);

    // Limpiar ScrollTrigger al desmontar
    return () => {
      animation.kill();
      clearTimeout(timer);
      ScrollTrigger.getAll().forEach((st) => {
        if (st.vars.trigger === cardRef.current) {
          st.kill();
        }
      });
    };
  }, [isCardMounted]);

  return (
    <Link
      href={`/products/${encodeURIComponent(productSlug)}`}
      legacyBehavior={false}
    >
      <div
        ref={cardRef}
        className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 card-hover border border-gray-100"
        style={{
          opacity: 1,
          transform: "translateY(0)",
        }} /* Garantizar visibilidad inicial */
      >
        <div className="relative h-48 md:h-56 overflow-hidden">
          <Image
            src={image}
            alt={title}
            layout="fill"
            objectFit="cover"
            className="transition-transform duration-500 hover:scale-110"
          />
          <div className="absolute top-3 right-3 bg-[#2563EB] text-white px-3 py-1 rounded-full text-xs font-medium">
            {category}
          </div>
        </div>
        <div className="p-5">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
          <p className="text-gray-600 mb-4">{description}</p>
          <div className="space-y-2">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start">
                <svg
                  className="w-5 h-5 text-[#2563EB] mt-0.5 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                <span className="ml-2 text-gray-700">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
};

export function Products() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const descriptionRef = useRef<HTMLDivElement>(null);
  const customSolutionRef = useRef<HTMLDivElement>(null);
  const productsGridRef = useRef<HTMLDivElement>(null);

  const router = useRouter();

  // Asegurar que las animaciones se ejecuten cuando el componente se monta
  const [isClient, setIsClient] = useState(false);
  const [animationsCreated, setAnimationsCreated] = useState(false);

  useEffect(() => {
    // Marcar que estamos en el cliente para asegurar que las animaciones se inicien
    setIsClient(true);
  }, []);

  // Efecto adicional para garantizar que los productos sean visibles
  useEffect(() => {
    if (!isClient) return;

    // Asegurar que todos los productos sean visibles después de cargar la página
    const visibilityTimer = setTimeout(() => {
      ensureElementsVisible();
    }, 1000); // Esperar a que todas las animaciones tengan tiempo de iniciarse

    return () => clearTimeout(visibilityTimer);
  }, [isClient]);

  useEffect(() => {
    if (!isClient || animationsCreated) return;

    // Función para limpiar todas las animaciones
    const cleanup = () => {
      // Limpiar todas las instancias de ScrollTrigger
      ScrollTrigger.killAll();

      // Limpiar propiedades GSAP de todos los elementos
      if (titleRef.current) gsap.set(titleRef.current, { clearProps: "all" });
      if (subtitleRef.current)
        gsap.set(subtitleRef.current, { clearProps: "all" });
      if (descriptionRef.current)
        gsap.set(descriptionRef.current, { clearProps: "all" });
      if (customSolutionRef.current)
        gsap.set(customSolutionRef.current, { clearProps: "all" });
    };

    // Limpiar animaciones anteriores
    cleanup();

    // Registrar ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);

    // Verificar que todos los elementos existen
    if (
      !titleRef.current ||
      !subtitleRef.current ||
      !descriptionRef.current ||
      !customSolutionRef.current
    ) {
      return;
    }

    // Crear las animaciones con un timeout para asegurar que el DOM esté listo
    const createAnimations = () => {
      try {
        // Timeline para animaciones iniciales
        const tl = gsap.timeline({
          defaults: { ease: "power2.out" },
          onComplete: () => {
            console.log("Initial animations completed");
          },
        });

        tl.fromTo(
          titleRef.current,
          { y: -30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.7 }
        )
          .fromTo(
            subtitleRef.current,
            { y: -20, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.7 },
            "-=0.4"
          )
          .fromTo(
            descriptionRef.current,
            { y: -10, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.7 },
            "-=0.4"
          );

        // Animación del custom solution con ScrollTrigger
        const customSolutionAnimation = gsap.fromTo(
          customSolutionRef.current,
          {
            y: 50,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.7,
            scrollTrigger: {
              trigger: customSolutionRef.current,
              start: "top bottom-=100",
              end: "bottom top",
              toggleActions: "play none none reverse",
              markers: false, // Cambiar a true para debug
              onToggle: (self) => {
                console.log(
                  "Custom solution ScrollTrigger toggled:",
                  self.isActive
                );
              },
              onRefresh: () => {
                console.log("Custom solution ScrollTrigger refreshed");
              },
            },
          }
        );

        // Marcar que las animaciones fueron creadas
        setAnimationsCreated(true);

        // Forzar refresh de ScrollTrigger después de un breve delay
        setTimeout(() => {
          ScrollTrigger.refresh();
          console.log("ScrollTrigger refreshed");
        }, 100);

        // Retornar función de limpieza
        return () => {
          tl.kill();
          customSolutionAnimation.kill();
          cleanup();
        };
      } catch (error) {
        console.error("Error creating animations:", error);
        return cleanup;
      }
    };

    // Crear animaciones después de un pequeño delay para asegurar que el DOM esté listo
    const animationTimer = setTimeout(createAnimations, 50);

    // Función de limpieza
    return () => {
      clearTimeout(animationTimer);
      cleanup();
    };
  }, [isClient, animationsCreated]);

  // Efecto para manejar cambios de ruta
  useEffect(() => {
    const handleRouteChange = () => {
      console.log("Route change detected, resetting animations");
      setAnimationsCreated(false);
      ScrollTrigger.refresh();
    };

    // Reset animaciones cuando la ruta cambia
    handleRouteChange();
  }, [router]);

  // Efecto para refresh de ScrollTrigger cuando el componente se monta completamente
  useEffect(() => {
    if (!isClient) return;

    const refreshTimer = setTimeout(() => {
      ScrollTrigger.refresh();
      console.log("Final ScrollTrigger refresh");
    }, 500);

    return () => clearTimeout(refreshTimer);
  }, [isClient, animationsCreated]);

  const products: ProductCardProps[] = [
    {
      title: "Sistema de Gestión de Stock",
      description:
        "Control completo de inventario con reportes detallados y alertas automáticas.",
      image: "/stock-management.jpg",
      features: [
        "Control de stock multi-sucursal",
        "Generación de órdenes de compra",
        "Alertas de stock mínimo",
        "Reportes personalizados",
      ],
      category: "Inventario",
    },
    {
      title: "Sistema de Punto de Venta",
      description:
        "Agiliza tus ventas con un sistema rápido e intuitivo para comercios minoristas.",
      image: "/pos-system.jpg",
      features: [
        "Interfaz táctil intuitiva",
        "Integración con lectores de códigos",
        "Control de cajas y turnos",
        "Gestión de promociones",
      ],
      category: "Ventas",
    },
    {
      title: "Facturación Electrónica",
      description:
        "Solución completa para emisión y gestión de comprobantes electrónicos AFIP.",
      image: "/electronic-invoice.jpg",
      features: [
        "Integración con AFIP",
        "Emisión de facturas A, B y C",
        "Envío automático por email",
        "Reportes fiscales",
      ],
      category: "Facturación",
    },
    {
      title: "CRM para PyMEs",
      description:
        "Gestiona tus clientes y potencia tus ventas con nuestro sistema de CRM adaptado.",
      image: "/crm-system.jpg",
      features: [
        "Seguimiento de clientes",
        "Pipeline de ventas",
        "Automatización de marketing",
        "Métricas de rendimiento",
      ],
      category: "CRM",
    },
    {
      title: "E-commerce Integrado",
      description:
        "Plataforma completa de comercio electrónico integrada con tu sistema de gestión.",
      image: "/ecommerce-platform.jpg",
      features: [
        "Diseño responsive",
        "Integración con MercadoPago",
        "Sincronización automática de stock",
        "Panel administrativo completo",
      ],
      category: "E-commerce",
    },
    {
      title: "App Móvil para Vendedores",
      description:
        "Aplicación móvil para que tus vendedores gestionen pedidos desde cualquier lugar.",
      image: "/mobile-sales-app.jpg",
      features: [
        "Catálogo digital",
        "Toma de pedidos offline",
        "Geolocalización de clientes",
        "Reportes de actividad",
      ],
      category: "App Móvil",
    },
  ];

  return (
    <div className="w-full py-16 px-4 md:px-10 mt-16 md:mt-20 max-w-[100vw]">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1
            ref={titleRef}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-[#2563EB]"
          >
            Nuestros Productos
          </h1>
          <p
            ref={subtitleRef}
            className="text-xl md:text-2xl mb-6 text-gray-700"
          >
            Soluciones pre-desarrolladas para impulsar tu negocio
          </p>
          <div
            ref={descriptionRef}
            className="max-w-3xl mx-auto text-gray-600 text-lg"
          >
            <p>
              Ofrecemos productos pre-desarrollados para clientes específicos
              que pueden adaptarse a tu negocio, permitiéndote ahorrar costos y
              tiempo de implementación. Cada producto puede personalizarse para
              ajustarse perfectamente a tus necesidades.
            </p>
          </div>
        </div>

        {/* Products Grid */}
        <div
          ref={productsGridRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {products.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>

        {/* Custom Solutions Section */}
        <div
          ref={customSolutionRef}
          className="bg-white rounded-xl p-6 md:p-10 shadow-md border border-gray-100"
          style={{
            opacity: 0,
            transform: "translateY(50px)",
          }}
        >
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-2/3 mb-6 md:mb-0 md:pr-10">
              <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-gray-800">
                ¿Necesitas una solución a medida?
              </h2>
              <p className="text-gray-600 mb-6">
                Además de nuestros productos pre-desarrollados, seguimos
                ofreciendo el desarrollo de soluciones completamente
                personalizadas. Nuestro equipo diseñará y construirá el sistema
                que se adapte perfectamente a los requerimientos específicos de
                tu negocio.
              </p>
              <div className="bg-gray-50 border-l-4 border-[#2563EB] p-4 mb-6">
                <p className="text-gray-700">
                  <span className="font-medium">Importante:</span> Nuestros
                  productos pre-desarrollados te permiten ahorrar costos y
                  acelerar la implementación, mientras que una solución a medida
                  ofrece personalización completa para necesidades específicas.
                </p>
              </div>
              <button className="bg-[#2563EB] hover:bg-[#1E40AF] transition-all text-white py-3 px-8 rounded-lg cursor-pointer shadow-sm hover:shadow-md text-base font-medium">
                Solicitar Consulta
              </button>
            </div>
            <div className="md:w-1/3 relative h-56 md:h-64">
              <Image
                src="/custom-solution.jpg"
                alt="Soluciones a medida"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;

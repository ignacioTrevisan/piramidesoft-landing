"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { getProducts } from "@/app/action/products/products";
import { Products as ProductType } from "@/app/interfaces/products";

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
  product: ProductType;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
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
      // Solo matar ScrollTriggers específicos de esta tarjeta
      ScrollTrigger.getAll().forEach((st) => {
        if (st.vars.trigger === cardRef.current) {
          st.kill();
        }
      });
    };
  }, [isCardMounted]);

  return (
    <Link href={`/products/${product.id}`} legacyBehavior={false}>
      <div
        ref={cardRef}
        className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 card-hover border border-gray-100 group"
        style={{
          opacity: 1,
          transform: "translateY(0)",
        }}
      >
        <div className="relative h-48 md:h-56 overflow-hidden">
          {product.imagenes &&
          product.imagenes.length > 0 &&
          product.imagenes[0] ? (
            <Image
              src={product.imagenes[0]}
              alt={product.titulo}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          ) : (
            <div className="w-full h-full bg-gray-200 flex items-center justify-center">
              <svg
                className="w-16 h-16 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            </div>
          )}
          <div className="absolute top-3 right-3 bg-[#2563EB] text-white px-3 py-1 rounded-full text-xs font-medium">
            {product.tipo.titulo}
          </div>
        </div>
        <div className="p-5">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            {product.titulo}
          </h3>
          <p className="text-gray-600 mb-4 line-clamp-3">
            {product.descripcion}
          </p>

          {/* Precio */}
          <div className="mb-4">
            {product.precioAntes && (
              <span className="text-sm text-gray-500 line-through mr-2">
                ${product.precioAntes.toLocaleString()}
              </span>
            )}
            <span className="text-lg font-bold text-[#2563EB]">
              ${product.precioAhora.toLocaleString()}
            </span>
          </div>

          {/* Características de los módulos */}
          <div className="space-y-2">
            {product.modulos.slice(0, 3).map((modulo, index) => (
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
                <span className="ml-2 text-gray-700 text-sm">
                  {modulo.titulo}
                </span>
              </div>
            ))}
            {product.modulos.length > 3 && (
              <div className="text-sm text-gray-500 ml-7">
                +{product.modulos.length - 3} módulo
                {product.modulos.length - 3 !== 1 ? "s" : ""} más
              </div>
            )}
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

  const [products, setProducts] = useState<ProductType[]>([]);
  const [loading, setLoading] = useState(true);
  const [isClient, setIsClient] = useState(false);
  const [animationsCreated, setAnimationsCreated] = useState(false);

  useEffect(() => {
    setIsClient(true);

    const loadProducts = async () => {
      const response = await getProducts();
      if (response.ok && response.data) {
        // Filtrar solo productos visibles
        const visibleProducts = response.data.filter(
          (product) => product.visible
        );
        // Convertir fechas a string para que coincidan con ProductType
        const normalizedProducts = visibleProducts.map((product) => ({
          ...product,
          createdAt:
            product.createdAt instanceof Date
              ? product.createdAt.toISOString()
              : product.createdAt,
          updatedAt:
            product.updatedAt instanceof Date
              ? product.updatedAt.toISOString()
              : product.updatedAt,
        }));
        setProducts(normalizedProducts);
      }
      setLoading(false);
    };

    loadProducts();
  }, []);

  // Efecto adicional para garantizar que los productos sean visibles
  useEffect(() => {
    if (!isClient) return;

    // Asegurar que todos los productos sean visibles después de cargar la página
    const visibilityTimer = setTimeout(() => {
      ensureElementsVisible();
    }, 1000);

    return () => clearTimeout(visibilityTimer);
  }, [isClient]);

  useEffect(() => {
    if (!isClient || animationsCreated || loading) return;

    // Función para limpiar todas las animaciones
    const cleanup = () => {
      // Limpiar ScrollTrigger específicamente para este componente
      ScrollTrigger.getAll().forEach((st) => {
        // Solo matar ScrollTriggers de este componente
        if (
          st.vars.trigger === titleRef.current ||
          st.vars.trigger === subtitleRef.current ||
          st.vars.trigger === descriptionRef.current ||
          st.vars.trigger === customSolutionRef.current
        ) {
          st.kill();
        }
      });

      // Limpiar propiedades GSAP solo de elementos de este componente
      if (titleRef.current) gsap.set(titleRef.current, { clearProps: "all" });
      if (subtitleRef.current)
        gsap.set(subtitleRef.current, { clearProps: "all" });
      if (descriptionRef.current)
        gsap.set(descriptionRef.current, { clearProps: "all" });
      if (customSolutionRef.current)
        gsap.set(customSolutionRef.current, { clearProps: "all" });
    };

    cleanup();
    gsap.registerPlugin(ScrollTrigger);

    if (
      !titleRef.current ||
      !subtitleRef.current ||
      !descriptionRef.current ||
      !customSolutionRef.current
    ) {
      return;
    }

    const createAnimations = () => {
      try {
        const tl = gsap.timeline({
          defaults: { ease: "power2.out" },
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

        const customSolutionAnimation = gsap.fromTo(
          customSolutionRef.current,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.7,
            scrollTrigger: {
              trigger: customSolutionRef.current,
              start: "top bottom-=100",
              end: "bottom top",
              toggleActions: "play none none reverse",
            },
          }
        );

        setAnimationsCreated(true);

        setTimeout(() => {
          ScrollTrigger.refresh();
        }, 100);

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

    const animationTimer = setTimeout(createAnimations, 50);

    return () => {
      clearTimeout(animationTimer);
      cleanup();
    };
  }, [isClient, animationsCreated, loading]);

  useEffect(() => {
    if (!isClient) return;

    const refreshTimer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 500);

    return () => clearTimeout(refreshTimer);
  }, [isClient, animationsCreated, products]);

  if (loading) {
    return (
      <div className="w-full py-16 px-4 md:px-10 mt-16 md:mt-20 max-w-[100vw]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-[#2563EB]">
              Nuestros Productos
            </h1>
            <p className="text-xl md:text-2xl mb-6 text-gray-700">
              Cargando productos...
            </p>
          </div>
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#2563EB]"></div>
          </div>
        </div>
      </div>
    );
  }

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
        {products.length > 0 ? (
          <div
            ref={productsGridRef}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
          >
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12 mb-16">
            <div className="w-24 h-24 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
              <svg
                className="w-12 h-12 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Productos en preparación
            </h3>
            <p className="text-gray-600">
              Estamos finalizando nuestro catálogo de productos. ¡Pronto estará
              disponible!
            </p>
          </div>
        )}

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
                fill
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;

"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { getProducts } from "@/app/action/products/products";
import { Products as ProductType } from "@/app/interfaces/products";
import { getTipos } from "@/app/action/tipos/getTipos";
import { ContactButton } from "@/app/components/ContactButton";
import { ScannerBanner } from "./ScannerBanner";

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

// Interface para los tipos de productos
interface TipoProduct {
  id: string;
  titulo: string;
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
          once: true, // dispara una vez; evita pestañeo al scrollear arriba/abajo
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

  const tienePrecio = product.precioAhora > 0;

  return (
    <Link
      href={`/productos/${product.id}`}
      legacyBehavior={false}
      className="h-full block"
    >
      <article
        ref={cardRef}
        className="h-full flex flex-col bg-white rounded-2xl overflow-hidden border border-gray-200/70 shadow-sm hover:shadow-xl hover:border-[#2563EB]/30 hover:-translate-y-1 transition-all duration-300 card-hover group"
        style={{
          opacity: 1,
          transform: "translateY(0)",
        }}
      >
        {/* Imagen - altura fija, siempre igual */}
        <div className="relative h-48 md:h-52 overflow-hidden bg-gray-50 flex-shrink-0">
          {product.imagenes &&
          product.imagenes.length > 0 &&
          product.imagenes[0] ? (
            <Image
              src={product.imagenes[0]}
              alt={product.titulo}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
              <svg
                className="w-16 h-16 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            </div>
          )}
          {/* Overlay sutil */}
          <div
            className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            aria-hidden="true"
          />
          {/* Chip del tipo - estilo mas sutil */}
          <div className="absolute top-3 left-3">
            <span className="inline-flex items-center bg-white/95 backdrop-blur-sm text-[#2563EB] px-3 py-1 rounded-full text-xs font-semibold shadow-sm">
              {product.tipo.titulo}
            </span>
          </div>
        </div>

        {/* Contenido - flex-1 para rellenar y empujar CTA abajo */}
        <div className="flex-1 flex flex-col p-5">
          <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-2 group-hover:text-[#2563EB] transition-colors line-clamp-2 min-h-[3.5rem]">
            {product.titulo}
          </h3>

          <p className="text-gray-600 text-sm mb-4 line-clamp-3 min-h-[3.75rem]">
            {product.descripcion}
          </p>

          {/* Modulos como chips - compacto y visual */}
          {product.modulos.length > 0 && (
            <div className="flex flex-wrap gap-1.5 mb-4">
              {product.modulos.slice(0, 3).map((modulo, index) => (
                <span
                  key={index}
                  className="inline-flex items-center gap-1 bg-blue-50 text-[#1e40af] px-2.5 py-1 rounded-md text-xs font-medium border border-blue-100"
                >
                  <svg
                    className="w-3 h-3 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="truncate max-w-[9rem]">{modulo.titulo}</span>
                </span>
              ))}
              {product.modulos.length > 3 && (
                <span className="inline-flex items-center bg-gray-100 text-gray-600 px-2.5 py-1 rounded-md text-xs font-medium">
                  +{product.modulos.length - 3} más
                </span>
              )}
            </div>
          )}

          {/* Footer - precio + CTA, siempre pegado abajo */}
          <div className="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between gap-3">
            <div className="flex flex-col">
              {product.precioAntes && product.precioAntes > 0 && (
                <span className="text-xs text-gray-400 line-through leading-none">
                  ${product.precioAntes.toLocaleString()}
                </span>
              )}
              {tienePrecio ? (
                <span className="text-lg font-bold text-[#2563EB] leading-tight">
                  ${product.precioAhora.toLocaleString()}
                </span>
              ) : (
                <span className="text-sm font-semibold text-gray-700 leading-tight">
                  Consultar
                </span>
              )}
            </div>
            <span className="inline-flex items-center gap-1 text-sm font-semibold text-[#2563EB] group-hover:gap-2 transition-all">
              Ver detalle
              <svg
                className="w-4 h-4 transition-transform group-hover:translate-x-0.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
};

export function Products() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const descriptionRef = useRef<HTMLDivElement>(null);
  const customSolutionRef = useRef<HTMLDivElement>(null);
  const productsGridRef = useRef<HTMLDivElement>(null);
  const filterRef = useRef<HTMLDivElement>(null);

  const [products, setProducts] = useState<ProductType[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<ProductType[]>([]);
  const [selectedFilter, setSelectedFilter] = useState<string>("Todos");
  const [tipos, setTipos] = useState<TipoProduct[]>([]);
  const [loading, setLoading] = useState(true);
  const [isClient, setIsClient] = useState(false);
  const [animationsCreated, setAnimationsCreated] = useState(false);

  useEffect(() => {
    setIsClient(true);

    const loadData = async () => {
      try {
        // Cargar tipos de productos
        const tiposResponse = await getTipos();
        if (tiposResponse.data) {
          setTipos(tiposResponse.data);
        }

        // Cargar productos
        const productsResponse = await getProducts();
        if (productsResponse.ok && productsResponse.data) {
          // Filtrar solo productos visibles y ordenarlos por el campo 'orden'
          const visibleProducts = productsResponse.data
            .filter((product) => product.visible)
            .map((product) => ({
              ...product,
              createdAt:
                product.createdAt instanceof Date
                  ? product.createdAt.toISOString()
                  : product.createdAt,
              updatedAt:
                product.updatedAt instanceof Date
                  ? product.updatedAt.toISOString()
                  : product.updatedAt,
            }))
            .sort((a, b) => {
              // Ordenar por campo 'orden' ascendente
              // Si no tienen orden asignado, usar 0 como valor por defecto
              const ordenA = a.orden || 0;
              const ordenB = b.orden || 0;
              return ordenA - ordenB;
            });

          setProducts(visibleProducts);
          setFilteredProducts(visibleProducts);
        }
      } catch (error) {
        console.error("Error loading data:", error);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  // Efecto para filtrar productos manteniendo el orden
  useEffect(() => {
    if (selectedFilter === "Todos") {
      // Mostrar todos los productos ya ordenados
      setFilteredProducts(products);
    } else {
      // Filtrar por tipo manteniendo el orden original
      const filtered = products.filter(
        (product) => product.tipo.titulo === selectedFilter
      );
      // Los productos ya están ordenados, no necesitamos volver a ordenar
      setFilteredProducts(filtered);
    }
  }, [selectedFilter, products]);

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
          st.vars.trigger === customSolutionRef.current ||
          st.vars.trigger === filterRef.current
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
      if (filterRef.current) gsap.set(filterRef.current, { clearProps: "all" });
    };

    cleanup();
    gsap.registerPlugin(ScrollTrigger);

    if (
      !titleRef.current ||
      !subtitleRef.current ||
      !descriptionRef.current ||
      !customSolutionRef.current ||
      !filterRef.current
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
          )
          .fromTo(
            filterRef.current,
            { y: 20, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.7 },
            "-=0.3"
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
              once: true, // dispara una vez; sin pestañeo al scrollear
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

  const handleFilterChange = (filter: string) => {
    setSelectedFilter(filter);
  };

  // Buscar el producto "Scanner PiramideSoft" para el banner destacado.
  // Match flexible por titulo (case-insensitive), asi el usuario puede
  // ajustar el titulo sin romper el link.
  const scannerProduct = products.find((p) =>
    p.titulo.toLowerCase().includes("scanner")
  );

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
        <div className="text-center mb-14">
          <span className="inline-block text-xs font-semibold tracking-widest text-[#2563EB] uppercase mb-3">
            Catálogo
          </span>
          <h1
            ref={titleRef}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-gray-900"
          >
            Nuestros <span className="text-[#2563EB]">Productos</span>
          </h1>
          <div className="w-16 h-1 bg-[#2563EB] rounded-full mx-auto mb-5" />
          <p
            ref={subtitleRef}
            className="text-lg md:text-xl text-gray-700 mb-4"
          >
            Soluciones pre-desarrolladas para impulsar tu negocio
          </p>
          <div
            ref={descriptionRef}
            className="max-w-2xl mx-auto text-gray-500 text-base"
          >
            <p>
              Ofrecemos productos pre-desarrollados que podés adaptar a tu
              negocio, ahorrando costos y tiempo de implementación. Cada
              producto puede personalizarse según tus necesidades.
            </p>
          </div>
        </div>

        {/* Banner destacado - Scanner PiramideSoft */}
        {scannerProduct && <ScannerBanner productId={scannerProduct.id} />}

        {/* Filter Section */}
        <div
          ref={filterRef}
          className="mb-12"
          style={{
            opacity: 0,
            transform: "translateY(20px)",
          }}
        >
          <div className="flex flex-wrap justify-center gap-3 mb-4">
            {/* Botón "Todos" */}
            <button
              onClick={() => handleFilterChange("Todos")}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedFilter === "Todos"
                  ? "bg-[#2563EB] text-white shadow-md transform scale-105"
                  : "bg-white text-gray-600 border border-gray-200 hover:border-[#2563EB] hover:text-[#2563EB] hover:shadow-sm"
              }`}
            >
              Todos
            </button>

            {/* Botones dinámicos de tipos */}
            {tipos.map((tipo) => (
              <button
                key={tipo.id}
                onClick={() => handleFilterChange(tipo.titulo)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedFilter === tipo.titulo
                    ? "bg-[#2563EB] text-white shadow-md transform scale-105"
                    : "bg-white text-gray-600 border border-gray-200 hover:border-[#2563EB] hover:text-[#2563EB] hover:shadow-sm"
                }`}
              >
                {tipo.titulo}
              </button>
            ))}
          </div>

          {/* Results counter */}
          <div className="text-center text-gray-500">
            <span className="text-xs tracking-wide">
              {selectedFilter === "Todos"
                ? `${filteredProducts.length} productos disponibles`
                : `${filteredProducts.length} producto${
                    filteredProducts.length !== 1 ? "s" : ""
                  } de tipo "${selectedFilter}"`}
            </span>
          </div>
        </div>

        {/* Products Grid - items-stretch garantiza que todas las cards tengan el mismo alto */}
        {filteredProducts.length > 0 ? (
          <div
            ref={productsGridRef}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-16 items-stretch"
          >
            {filteredProducts.map((product) => (
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
                  d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.291-1.1-5.291-2.709M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              {selectedFilter === "Todos"
                ? "Productos en preparación"
                : `No hay productos de tipo "${selectedFilter}"`}
            </h3>
            <p className="text-gray-600">
              {selectedFilter === "Todos"
                ? "Estamos finalizando nuestro catálogo de productos. ¡Pronto estará disponible!"
                : "Prueba seleccionando otro tipo de producto o 'Todos' para ver todos los productos disponibles."}
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
              <ContactButton
                productId={"Ninguno en particular"}
                productTitle={"Consulta general"}
                className="mb-8 w-full md:w-auto"
              >
                Solicitar Consulta
              </ContactButton>
            </div>
            <div className="md:w-1/3 relative h-56 md:h-64">
              <Image
                src="https://res.cloudinary.com/nachotrevisan/image/upload/v1750680858/custom-solution_pptjao.svg"
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

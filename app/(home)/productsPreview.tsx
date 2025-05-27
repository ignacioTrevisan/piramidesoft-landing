"use client";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { getProducts } from "@/app/action/products/products";
import { Products } from "@/app/interfaces/products";
import Image from "next/image";

const ProductsPreview = () => {
  const fatherContainer = useRef(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [mounted, setMounted] = useState(false);
  const [products, setProducts] = useState<Products[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setMounted(true);

    const loadProducts = async () => {
      const response = await getProducts();
      if (response.ok && response.data) {
        // Filtrar solo productos visibles y tomar los primeros 6
        const visibleProducts = response.data
          .filter((product) => product.visible)
          .slice(0, 6)
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
          }));
        setProducts(visibleProducts);
      }
      setLoading(false);
    };

    loadProducts();
  }, []);

  useEffect(() => {
    if (!mounted || loading) return;

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
  }, [mounted, loading, products]);

  if (loading) {
    return (
      <div className="fatherContainer pt-8 pb-0 bg-[#f2f2f2] relative">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 text-[#2563EB]">
            Nuestros Productos
          </h2>
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#2563EB]"></div>
          </div>
        </div>
      </div>
    );
  }

  if (products.length === 0) {
    return (
      <div className="fatherContainer pt-8 pb-0 bg-[#f2f2f2] relative">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 text-[#2563EB]">
            Nuestros Productos
          </h2>
          <div className="text-center py-12">
            <p className="text-gray-600 mb-4">
              Estamos preparando nuestro catálogo de productos.
            </p>
            <Link
              href="/products"
              className="inline-block bg-[#2563EB] hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-all"
            >
              Ver más información
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className="fatherContainer pt-8 pb-0 bg-[#f2f2f2] relative"
      ref={fatherContainer}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 text-[#2563EB]">
          Nuestros Productos
        </h2>

        {/* Contenedor de las cartas - usamos grid para dos filas de tres columnas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={product.id}
              ref={(el) => {
                cardRefs.current[index] = el;
              }}
              className="bg-white rounded-lg shadow-md p-6 transition-all hover:shadow-lg border border-[#f2f2f2] hover:border-[#2563EB] group"
            >
              <div className="h-32 bg-[#f2f2f2] relative rounded-md mb-4 flex items-center justify-center overflow-hidden">
                {product.imagenes &&
                product.imagenes.length > 0 &&
                product.imagenes[0] ? (
                  <Image
                    src={product.imagenes[0]}
                    alt={`${product.titulo} imagen`}
                    fill
                    className="object-cover rounded-md group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw"
                    onError={(e) => {
                      // Fallback si la imagen falla
                      (e.target as HTMLImageElement).src =
                        "/placeholder-product.jpg";
                    }}
                  />
                ) : (
                  <div className="w-full h-full bg-gray-200 flex items-center justify-center">
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
                        d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                )}

                {/* Badge del tipo */}
                <div className="absolute top-2 right-2 bg-[#2563EB] text-white px-2 py-1 rounded-full text-xs font-medium">
                  {product.tipo.titulo}
                </div>
              </div>

              <h3 className="text-xl font-semibold mb-2 text-gray-800 group-hover:text-[#2563EB] transition-colors">
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

              {/* Características destacadas */}
              {product.modulos && product.modulos.length > 0 && (
                <div className="mb-4">
                  <div className="flex items-center text-sm text-gray-600">
                    <svg
                      className="w-4 h-4 mr-1 text-[#2563EB]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    {product.modulos.length} módulo
                    {product.modulos.length !== 1 ? "s" : ""} incluido
                    {product.modulos.length !== 1 ? "s" : ""}
                  </div>
                </div>
              )}

              <Link
                href={`/products/${product.id}`}
                className="inline-block w-full text-center bg-[#2563EB] hover:bg-blue-700 text-white font-medium py-2 px-4 rounded transition-colors"
              >
                Conoce más
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-10 mb-8 text-center">
          <p className="text-gray-600 mb-4">
            Explora nuestra gama completa de productos
          </p>
          <Link
            href="/products"
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

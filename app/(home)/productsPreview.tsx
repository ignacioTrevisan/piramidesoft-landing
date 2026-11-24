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
  const cardRefs = useRef<(HTMLElement | null)[]>([]);
  const [mounted, setMounted] = useState(false);
  const [products, setProducts] = useState<Products[]>([]);
  const [loading, setLoading] = useState(true);
  // Referencia para guardar los ScrollTriggers de este componente
  const scrollTriggersRef = useRef<ScrollTrigger[]>([]);

  useEffect(() => {
    setMounted(true);

    const loadProducts = async () => {
      const response = await getProducts();
      if (response.ok && response.data) {
        // Filtrar solo productos visibles y tomar los primeros 3
        const visibleProducts = response.data
          .filter((product) => product.visible)
          .slice(0, 3)
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

    // Limpiar SOLO los ScrollTriggers de este componente
    scrollTriggersRef.current.forEach((st) => st.kill());
    scrollTriggersRef.current = [];

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

          // Crear animación y guardar la referencia del ScrollTrigger
          const tl = gsap.to(validCards, {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.6,
            stagger: 0.1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: fatherContainer.current,
              start: "top 70%",
              once: true, // dispara una vez; evita pestañeo al scrollear
            },
          });

          // Guardar la referencia del ScrollTrigger
          if (tl.scrollTrigger) {
            scrollTriggersRef.current.push(tl.scrollTrigger);
          }

          // Refresh ScrollTrigger
          ScrollTrigger.refresh();
        }
      }
    }, 100);

    return () => {
      clearTimeout(timer);
      // Limpiar SOLO los ScrollTriggers de este componente
      scrollTriggersRef.current.forEach((st) => st.kill());
      scrollTriggersRef.current = [];
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
              href="/productos"
              className="inline-block text-white  font-bold py-3 px-6 rounded-lg transition-all"
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

        {/* Contenedor de las cartas - vista previa con máximo 3 productos.
            items-stretch + h-full en cada card garantiza alturas uniformes. */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 items-stretch">
          {products.map((product, index) => {
            const tienePrecio = product.precioAhora > 0;
            return (
              <article
                key={product.id}
                ref={(el) => {
                  cardRefs.current[index] = el;
                }}
                className="h-full flex flex-col bg-white rounded-2xl overflow-hidden border border-gray-200/70 shadow-sm hover:shadow-xl hover:border-[#2563EB]/30 hover:-translate-y-1 transition-all duration-300 group"
              >
                {/* Imagen - altura fija, siempre igual */}
                <div className="relative h-40 bg-gray-50 flex-shrink-0 overflow-hidden">
                  {product.imagenes &&
                  product.imagenes.length > 0 &&
                  product.imagenes[0] ? (
                    <Image
                      src={product.imagenes[0]}
                      alt={`${product.titulo} imagen`}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                      <svg
                        className="w-12 h-12 text-gray-400"
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
                  {/* Chip del tipo */}
                  <div className="absolute top-3 left-3">
                    <span className="inline-flex items-center bg-white/95 backdrop-blur-sm text-[#2563EB] px-3 py-1 rounded-full text-xs font-semibold shadow-sm">
                      {product.tipo.titulo}
                    </span>
                  </div>
                </div>

                {/* Contenido - flex-1 para rellenar y empujar CTA abajo */}
                <div className="flex-1 flex flex-col p-5">
                  <h3 className="text-lg font-bold mb-2 text-gray-800 group-hover:text-[#2563EB] transition-colors line-clamp-2 min-h-[3.5rem]">
                    {product.titulo}
                  </h3>

                  <p className="text-gray-600 text-sm mb-4 line-clamp-3 min-h-[3.75rem]">
                    {product.descripcion}
                  </p>

                  {/* Info de módulos y precio - fila compacta */}
                  <div className="flex items-center justify-between mb-4 pb-4 border-b border-gray-100">
                    {product.modulos && product.modulos.length > 0 ? (
                      <span className="inline-flex items-center gap-1 text-xs text-gray-500">
                        <svg
                          className="w-3.5 h-3.5 text-[#2563EB]"
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
                        {product.modulos.length !== 1 ? "s" : ""}
                      </span>
                    ) : (
                      <span />
                    )}
                    <div className="text-right">
                      {product.precioAntes && product.precioAntes > 0 && (
                        <span className="block text-xs text-gray-400 line-through leading-none">
                          ${product.precioAntes.toLocaleString()}
                        </span>
                      )}
                      {tienePrecio ? (
                        <span className="text-base font-bold text-[#2563EB]">
                          ${product.precioAhora.toLocaleString()}
                        </span>
                      ) : (
                        <span className="text-sm font-semibold text-gray-600">
                          Consultar
                        </span>
                      )}
                    </div>
                  </div>

                  {/* CTA - siempre pegado abajo */}
                  <Link
                    href={`/productos/${product.id}`}
                    className="mt-auto inline-flex items-center justify-center gap-1 w-full bg-[#2563EB] hover:bg-[#1d4ed8] text-white font-semibold py-2.5 px-4 rounded-lg transition-colors group/btn"
                  >
                    Conocé más
                    <svg
                      className="w-4 h-4 transition-transform group-hover/btn:translate-x-0.5"
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
                  </Link>
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-10 mb-8 text-center">
          <p className="text-gray-600 mb-4">
            Explora nuestra gama completa de productos
          </p>
          <Link
            href="/productos"
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

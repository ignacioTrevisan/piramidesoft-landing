"use client";

import Link from "next/link";

interface ScannerBannerProps {
  productId: string;
}

export const ScannerBanner = ({ productId }: ScannerBannerProps) => {
  return (
    <Link
      href={`/productos/${productId}`}
      className="block mb-12 group"
      aria-label="Ver detalle de Scanner PiramideSoft"
    >
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#2563EB] via-[#1e40af] to-[#1e3a8a] shadow-xl transition-all duration-300 group-hover:shadow-2xl group-hover:scale-[1.01]">
        {/* Patrón decorativo de fondo */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 20%, white 1px, transparent 1px), radial-gradient(circle at 80% 80%, white 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
          aria-hidden="true"
        />

        {/* Badge NUEVO */}
        <div className="absolute top-4 right-4 z-10">
          <span className="inline-flex items-center gap-1 bg-yellow-400 text-gray-900 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide shadow-md animate-pulse">
            <span className="w-2 h-2 bg-red-500 rounded-full" />
            Nuevo
          </span>
        </div>

        <div className="relative flex flex-col md:flex-row items-center gap-6 p-6 md:p-8">
          {/* Icono QR */}
          <div className="flex-shrink-0 w-24 h-24 md:w-28 md:h-28 bg-white/15 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-white/20">
            <svg
              className="w-14 h-14 md:w-16 md:h-16 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.8}
                d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z"
              />
            </svg>
          </div>

          {/* Contenido */}
          <div className="flex-1 text-center md:text-left text-white">
            <h2 className="text-2xl md:text-3xl font-bold mb-2 pr-16 md:pr-0">
              Scanner PiramideSoft
            </h2>
            <p className="text-blue-50 text-base md:text-lg mb-3 leading-relaxed">
              Ahora tus clientes pueden{" "}
              <strong className="text-white">consultar precios escaneando un QR</strong>{" "}
              desde el celular, sin pasar por caja. Escanean el producto en la
              góndola y ven el precio al instante.
            </p>
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 text-sm">
              <span className="text-blue-100">Ya incluido en:</span>
              <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full font-medium border border-white/20">
                Sistemas de Stock
              </span>
              <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full font-medium border border-white/20">
                Puntos de Venta
              </span>
            </div>
          </div>

          {/* CTA */}
          <div className="flex-shrink-0">
            <span className="inline-flex items-center gap-2 bg-white text-[#2563EB] px-5 py-3 rounded-xl font-semibold shadow-lg transition-all duration-300 group-hover:gap-3 group-hover:shadow-xl">
              Conocé más
              <svg
                className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

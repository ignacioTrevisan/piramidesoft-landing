import Link from "next/link";

interface ScannerIncludedCardProps {
  scannerProductId: string;
}

export const ScannerIncludedCard = ({
  scannerProductId,
}: ScannerIncludedCardProps) => {
  return (
    <Link
      href={`/productos/${scannerProductId}`}
      className="block mb-16 group"
      aria-label="Ver detalle de Scanner PiramideSoft"
    >
      <div className="relative overflow-hidden rounded-2xl border-2 border-[#2563EB]/20 bg-gradient-to-br from-blue-50 via-white to-blue-50 shadow-md transition-all duration-300 group-hover:shadow-xl group-hover:border-[#2563EB]/40">
        {/* Barra lateral decorativa */}
        <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-[#2563EB] to-[#1e40af]" />

        <div className="p-6 md:p-8 pl-8 md:pl-10">
          {/* Header: badge + acción */}
          <div className="flex items-start justify-between gap-4 mb-4">
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1.5 bg-[#2563EB] text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide">
                <svg
                  className="w-3.5 h-3.5"
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
                Incluido sin costo
              </span>
              <span className="inline-flex items-center bg-yellow-400 text-gray-900 px-2.5 py-1 rounded-full text-xs font-bold uppercase">
                Nuevo
              </span>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-start md:items-center gap-5">
            {/* Icono QR */}
            <div className="flex-shrink-0 w-16 h-16 md:w-20 md:h-20 bg-white rounded-xl flex items-center justify-center shadow-md border border-blue-100">
              <svg
                className="w-10 h-10 md:w-12 md:h-12 text-[#2563EB]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.8}
                  d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z"
                />
              </svg>
            </div>

            {/* Texto */}
            <div className="flex-1">
              <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-2">
                Este producto incluye{" "}
                <span className="text-[#2563EB]">Scanner PiramideSoft</span>
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Tus clientes pueden{" "}
                <strong className="text-gray-800">
                  consultar precios escaneando un QR
                </strong>{" "}
                desde el celular, sin pasar por caja. Escanean el producto en la
                góndola y ven el precio al instante.
              </p>
            </div>

            {/* CTA */}
            <div className="flex-shrink-0 self-stretch md:self-center w-full md:w-auto">
              <span className="inline-flex w-full md:w-auto items-center justify-center gap-2 bg-[#2563EB] text-white px-5 py-3 rounded-xl font-semibold shadow-md transition-all duration-300 group-hover:bg-[#1e40af] group-hover:gap-3 group-hover:shadow-lg">
                Ver detalle
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
      </div>
    </Link>
  );
};

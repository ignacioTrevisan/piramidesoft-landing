import { ImagesSelected } from "./imagesSelected";

// Definición de tipos
interface ModuloItem {
  titulo: string;
  caracteristicas: string[];
}

interface ProductoProps {
  titulo: string;
  descripcion: string;
  precioAntes?: number;
  precioActual: number;
  modulos: ModuloItem[];
  imagenes: string[];
  video?: string;
}

interface Props {
  params: Promise<{
    slug: string;
  }>;
}
// Componente principal
export default async function ProductoDetalle({ params }: Props) {
  // Estado para la imagen seleccionada
  const slug = (await params).slug;

  // En una aplicación real, aquí cargarías los datos del producto basado en el slug
  // Datos de ejemplo del producto
  const producto: ProductoProps = {
    titulo: "Sistema Integrado de Gestión Comercial",
    descripcion:
      "Solución completa para la gestión de tu negocio con módulos personalizables que se adaptan a diferentes industrias y tamaños de empresa. Optimiza tus procesos, mejora la toma de decisiones y aumenta la productividad con nuestra plataforma intuitiva y potente.",
    precioAntes: 150000,
    precioActual: 120000,
    modulos: [
      {
        titulo: "Facturación Electrónica",
        caracteristicas: [
          "Integración con AFIP",
          "Emisión de facturas A, B y C",
          "Envío automático por email",
          "Reportes fiscales detallados",
        ],
      },
      {
        titulo: "Control de Inventario",
        caracteristicas: [
          "Control de stock multi-sucursal",
          "Alertas de stock mínimo",
          "Trazabilidad completa",
          "Valuación de inventario",
        ],
      },
      {
        titulo: "Punto de Venta",
        caracteristicas: [
          "Interfaz táctil intuitiva",
          "Control de cajas y turnos",
          "Gestión de promociones",
          "Ventas offline/online",
        ],
      },
      {
        titulo: "CRM Integrado",
        caracteristicas: [
          "Seguimiento de clientes",
          "Gestión de oportunidades",
          "Historial de comunicaciones",
          "Métricas de rendimiento",
        ],
      },
      {
        titulo: "Reportes y Dashboard",
        caracteristicas: [
          "Dashboard personalizable",
          "Reportes en tiempo real",
          "Exportación a Excel/PDF",
          "Indicadores de rendimiento",
        ],
      },
      {
        titulo: "App Móvil",
        caracteristicas: [
          "Acceso desde cualquier lugar",
          "Consultas de inventario",
          "Registro de ventas",
          "Gestión de clientes móvil",
        ],
      },
    ],
    imagenes: [
      "https://ss-static-01.esmsv.com/id/134567/productos/obtenerimagen/?id=7&useDensity=true&width=1366&height=685&tipoEscala=contain",
      "https://ss-static-01.esmsv.com/id/134567/productos/obtenerimagen/?id=9&useDensity=true&width=1366&height=685&tipoEscala=contain",
    ],
    video: "https://www.youtube.com/embed/dLywT-T95rk",
  };

  // Cambiar imagen en la galería

  return (
    <div className="w-full py-8 px-4 max-w-full mt-20">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Galería de Imágenes */}
          <div className="md:order-1 order-2">
            <ImagesSelected
              imagenes={producto.imagenes}
              titulo={producto.titulo}
            />
          </div>

          {/* Detalles del Producto */}
          <div className="md:order-2 order-1">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
              {producto.titulo} -{slug}
            </h1>

            <p className="text-gray-600 mb-6 text-lg">{producto.descripcion}</p>

            {/* Precios */}
            <div className="mb-8">
              {producto.precioAntes && (
                <span className="text-gray-500 line-through mr-3 text-lg">
                  ${producto.precioAntes.toLocaleString()}
                </span>
              )}
              <span className="text-blue-600 font-bold text-3xl">
                ${producto.precioActual.toLocaleString()}
              </span>
            </div>

            {/* Botón de Consulta */}
            <button className="bg-blue-600 hover:bg-blue-700 transition-all text-white py-3 px-8 rounded-lg cursor-pointer shadow-sm hover:shadow-md text-base font-medium mb-8 w-full md:w-auto">
              Consultar
            </button>
          </div>
        </div>

        {/* Módulos */}
        <div className="mb-16">
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-gray-800 border-b border-gray-200 pb-3">
            Módulos Incluidos
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {producto.modulos.map((modulo, index) => (
              <div
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 p-5"
              >
                <h3 className="text-xl font-semibold text-blue-600 mb-4">
                  {modulo.titulo}
                </h3>
                <div className="space-y-2">
                  {modulo.caracteristicas.map((caracteristica, idx) => (
                    <div key={idx} className="flex items-start">
                      <svg
                        className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0"
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
                      <span className="ml-2 text-gray-700">
                        {caracteristica}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Video (Opcional) */}
        {producto.video && (
          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-gray-800 border-b border-gray-200 pb-3">
              Video Demostrativo
            </h2>

            <div className="rounded-xl overflow-hidden shadow-md">
              <iframe
                src={producto.video}
                title="Video demostrativo"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-96"
              ></iframe>
            </div>
          </div>
        )}

        {/* Sección de Consulta */}
        <div className="bg-white rounded-xl p-6 md:p-10 shadow-md border border-gray-100">
          <div className="flex flex-col md:flex-row items-center">
            <div className="w-full mb-6 md:mb-0 md:pr-10">
              <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-gray-800">
                ¿Tienes alguna pregunta sobre este producto?
              </h2>
              <p className="text-gray-600 mb-6">
                Nuestro equipo está listo para ayudarte a implementar esta
                solución en tu negocio. Contáctanos para recibir asesoramiento
                personalizado y resolver todas tus dudas.
              </p>
              <div className="bg-gray-50 border-l-4 border-blue-600 p-4 mb-6">
                <p className="text-gray-700">
                  <span className="font-medium">Nota:</span> Podemos adaptar
                  este producto a tus necesidades específicas. Consúltanos sobre
                  opciones de personalización.
                </p>
              </div>
              <button className="bg-blue-600 hover:bg-blue-700 transition-all text-white py-3 px-8 rounded-lg cursor-pointer shadow-sm hover:shadow-md text-base font-medium">
                Solicitar Información
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

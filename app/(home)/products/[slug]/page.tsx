import { ImagesSelected } from "./imagesSelected";
import { getProducts } from "@/app/action/products/products";
import { notFound } from "next/navigation";
import { Products } from "@/interfaces/products";
import { ContactButton } from "@/app/components/ContactButton";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

// Función para obtener el producto por ID
async function getProductById(id: string): Promise<Products | null> {
  const response = await getProducts();
  if (response.ok && response.data) {
    const product = response.data.find((p) => p.id === id && p.visible);
    if (!product) return null;
    // Convert Date fields to string to match Products interface
    return {
      ...product,
      createdAt:
        product.createdAt instanceof Date
          ? product.createdAt.toISOString()
          : product.createdAt,
      updatedAt:
        product.updatedAt instanceof Date
          ? product.updatedAt.toISOString()
          : product.updatedAt,
    };
  }
  return null;
}

// Generar parámetros estáticos para todas las rutas de productos
export async function generateStaticParams() {
  const response = await getProducts();

  if (!response.ok || !response.data) {
    return [];
  }

  return response.data
    .filter((product) => product.visible)
    .map((product) => ({
      slug: product.id,
    }));
}

// Componente principal
export default async function ProductoDetalle({ params }: Props) {
  const slug = (await params).slug;

  // Obtener el producto por ID (usando slug como ID)
  const producto = await getProductById(slug);

  if (!producto) {
    notFound();
  }

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
            <div className="mb-4">
              <span className="inline-block bg-[#2563EB] text-white px-3 py-1 rounded-full text-sm font-medium mb-4">
                {producto.tipo.titulo}
              </span>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
              {producto.titulo}
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
                ${producto.precioAhora.toLocaleString()}
              </span>
            </div>

            {/* URLs de demo y producto completo */}
            <div className="mb-6 space-y-3">
              {producto.url_demo && (
                <a
                  href={producto.url_demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-green-600 hover:bg-green-700 transition-all text-white py-2 px-6 rounded-lg text-sm font-medium mr-3"
                >
                  Ver Demo
                </a>
              )}
              {producto.url_full && (
                <a
                  href={producto.url_full}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-purple-600 hover:bg-purple-700 transition-all text-white py-2 px-6 rounded-lg text-sm font-medium"
                >
                  Ver Producto Completo
                </a>
              )}
            </div>

            {/* Botón de Consulta */}
            <ContactButton
              productId={producto.id}
              productTitle={producto.titulo}
              className="mb-8 w-full md:w-auto"
            >
              Consultar
            </ContactButton>

            {/* Información adicional */}
          </div>
        </div>

        {/* Módulos */}
        {producto.modulos && producto.modulos.length > 0 && (
          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-gray-800 border-b border-gray-200 pb-3">
              Módulos Incluidos
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {producto.modulos.map((modulo, index) => (
                <div
                  key={modulo.id || index}
                  className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 p-5"
                >
                  <h3 className="text-xl font-semibold text-blue-600 mb-4">
                    {modulo.titulo}
                  </h3>
                  <div className="space-y-2">
                    {modulo.subtitulos &&
                      modulo.subtitulos.map((subtitulo, idx) => (
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
                          <span className="ml-2 text-gray-700 text-sm">
                            {subtitulo}
                          </span>
                        </div>
                      ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Video */}
        {producto.video && (
          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-gray-800 border-b border-gray-200 pb-3">
              Video Demostrativo
            </h2>

            <div className="rounded-xl overflow-hidden shadow-md bg-black">
              {producto.video.includes("youtube.com") ||
              producto.video.includes("youtu.be") ? (
                <iframe
                  src={producto.video.replace("watch?v=", "embed/")}
                  title="Video demostrativo"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-96"
                ></iframe>
              ) : (
                <video
                  controls
                  className="w-full h-96 object-contain"
                  poster={producto.imagenes[0] || undefined}
                >
                  <source src={producto.video} type="video/mp4" />
                  Tu navegador no soporta la reproducción de video.
                </video>
              )}
            </div>
          </div>
        )}

        {/* Galería de imágenes adicionales */}
        {producto.imagenes && producto.imagenes.length > 1 && (
          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-gray-800 border-b border-gray-200 pb-3">
              Galería de Imágenes
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {producto.imagenes.map((imagen, index) => (
                <div
                  key={index}
                  className="relative aspect-video bg-gray-100 rounded-lg overflow-hidden hover:shadow-lg transition-shadow cursor-pointer group"
                >
                  <img
                    src={imagen}
                    alt={`${producto.titulo} - Imagen ${index + 1}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                    <svg
                      className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                      />
                    </svg>
                  </div>
                </div>
              ))}
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
              <div className="space-y-3">
                <ContactButton
                  productId={producto.id}
                  productTitle={producto.titulo}
                  className="mr-4"
                >
                  Solicitar Información
                </ContactButton>
                <ContactButton
                  productId={producto.id}
                  productTitle={producto.titulo}
                  variant="secondary"
                >
                  Agendar Reunión
                </ContactButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Generar metadata dinámica para SEO
export async function generateMetadata({ params }: Props) {
  const slug = (await params).slug;
  const producto = await getProductById(slug);

  if (!producto) {
    return {
      title: "Producto no encontrado",
    };
  }

  return {
    title: `${producto.titulo} - Piramide Soft`,
    description: producto.descripcion,
    openGraph: {
      title: producto.titulo,
      description: producto.descripcion,
      images: producto.imagenes.length > 0 ? [producto.imagenes[0]] : [],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: producto.titulo,
      description: producto.descripcion,
      images: producto.imagenes.length > 0 ? [producto.imagenes[0]] : [],
    },
  };
}

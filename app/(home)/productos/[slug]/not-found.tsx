import Link from "next/link";

export default function NotFound() {
  return (
    <div className="w-full py-16 px-4 max-w-full mt-20">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
          <h2 className="text-3xl font-semibold text-gray-700 mb-6">
            Producto no encontrado
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Lo sentimos, el producto que buscas no existe o no está disponible.
          </p>
        </div>

        <div className="bg-white rounded-xl p-8 shadow-md border border-gray-100 mb-8">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            ¿Qué puedes hacer?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <div>
                <h4 className="font-medium text-gray-800 mb-1">Explorar productos</h4>
                <p className="text-gray-600 text-sm">Ve todos nuestros productos disponibles</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <div>
                <h4 className="font-medium text-gray-800 mb-1">Contactar soporte</h4>
                <p className="text-gray-600 text-sm">Nuestro equipo puede ayudarte</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z" />
                </svg>
              </div>
              <div>
                <h4 className="font-medium text-gray-800 mb-1">Solución personalizada</h4>
                <p className="text-gray-600 text-sm">Diseñamos productos a medida</p>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-4 md:space-y-0 md:space-x-4 md:flex md:justify-center">
          <Link
            href="/products"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors"
          >
            Ver todos los productos
          </Link>
          <Link
            href="/"
            className="inline-block bg-transparent border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-lg font-medium transition-colors"
          >
            Ir al inicio
          </Link>
          <button className="inline-block bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-medium transition-colors">
            Contactar soporte
          </button>
        </div>

        <div className="mt-12 text-gray-500 text-sm">
          <p>¿Llegaste aquí por error? Verifica que la URL esté correcta o usa la navegación principal.</p>
        </div>
      </div>
    </div>
  );
}

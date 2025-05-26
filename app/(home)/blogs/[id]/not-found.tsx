import Link from "next/link";

export default function NotFound() {
  return (
    <div className="container mx-auto px-4 py-24 text-center">
      <div className="max-w-md mx-auto">
        <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-700 mb-6">
          Blog no encontrado
        </h2>
        <p className="text-gray-600 mb-8">
          Lo sentimos, el blog que buscas no existe o ha sido eliminado.
        </p>
        <div className="space-y-4">
          <Link
            href="/blogs"
            className="block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
          >
            Ver todos los blogs
          </Link>
          <Link
            href="/"
            className="block text-blue-600 hover:text-blue-700 font-medium transition-colors"
          >
            Ir al inicio
          </Link>
        </div>
      </div>
    </div>
  );
}

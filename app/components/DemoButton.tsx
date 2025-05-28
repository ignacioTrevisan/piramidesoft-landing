"use client";

import { useState } from "react";
import { useAuth } from "../lib/auth/AuthContext";
import Link from "next/link";

interface DemoButtonProps {
  url_demo?: string | null;
  className?: string;
  productId?: string;
  productTitle?: string;
}

export const DemoButton: React.FC<DemoButtonProps> = ({
  url_demo,
  className = "",
  productId,
  productTitle,
}) => {
  const { isAuthenticated, isLoading } = useAuth();
  const [showAuthModal, setShowAuthModal] = useState(false);

  // Función para registrar el acceso a la demo y luego redirigir
  const handleDemoAccess = async () => {
    try {
      // Registrar el acceso si tenemos la información del producto
      if (productId && productTitle) {
        await fetch('/api/demo', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            productId,
            productTitle
          })
        });
      }
      
      // Redirigir a la demo
      window.open(url_demo, '_blank', 'noopener,noreferrer');
    } catch (error) {
      console.error('Error registering demo access:', error);
      // Aún así, permitir el acceso a la demo
      window.open(url_demo, '_blank', 'noopener,noreferrer');
    }
  };

  // Si no hay URL de demo, no mostrar el botón
  if (!url_demo) {
    return null;
  }

  // Mientras carga la autenticación, mostrar botón deshabilitado
  if (isLoading) {
    return (
      <button
        disabled
        className={`inline-block bg-gray-400 text-white py-2 px-6 rounded-lg text-sm font-medium cursor-not-allowed ${className}`}
      >
        Cargando...
      </button>
    );
  }

  // Si está autenticado, mostrar botón activo que registra y redirige al demo
  if (isAuthenticated) {
    return (
      <button
        onClick={handleDemoAccess}
        className={`inline-block bg-green-600 hover:bg-green-700 transition-all text-white py-2 px-6 rounded-lg text-sm font-medium ${className}`}
      >
        <span className="flex items-center">
          <svg
            className="w-4 h-4 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M19 10a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          Ver Demo
        </span>
      </button>
    );
  }

  // Si no está autenticado, mostrar botón bloqueado que abre modal explicativo
  return (
    <>
      <button
        onClick={() => setShowAuthModal(true)}
        className={`inline-block bg-gray-400 cursor-not-allowed text-white py-2 px-6 rounded-lg text-sm font-medium relative ${className}`}
        disabled
      >
        <span className="flex items-center opacity-60">
          <svg
            className="w-4 h-4 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
            />
          </svg>
          Crear cuenta para ver demo
        </span>
        {/* Ícono de candado superpuesto */}
        <div className="absolute -top-1 -right-1 bg-red-500 rounded-full p-1">
          <svg
            className="w-3 h-3 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
            />
          </svg>
        </div>
      </button>

      {/* Modal de autenticación requerida */}
      {showAuthModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl max-w-md w-full p-6">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-yellow-100 rounded-full flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-yellow-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
              </div>
              
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                🔒 Demo Bloqueada - ¡Crea tu cuenta para probarla!
              </h3>
              
              <p className="text-gray-600 mb-4">
                <strong>¡Buenas noticias!</strong> Puedes probar esta demo <strong>completamente gratis</strong> 
                creando una cuenta. Solo toma 30 segundos y tendrás acceso inmediato.
              </p>

              <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-6">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <svg className="h-5 w-5 text-blue-400" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm text-blue-700">
                      <strong>Con tu cuenta gratuita podrás:</strong>
                    </p>
                    <ul className="text-sm text-blue-600 mt-2 space-y-1">
                      <li>• 🎯 Probar todas las demos de nuestros productos</li>
                      <li>• 📱 Acceso inmediato desde cualquier dispositivo</li>
                      <li>• 📝 Guardar tus productos favoritos</li>
                      <li>• 📧 Recibir actualizaciones sobre nuevos productos</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <Link
                  href="/auth/register"
                  className="block w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white py-4 px-6 rounded-lg font-bold transition-all transform hover:scale-105 shadow-lg"
                >
                  🚀 ¡CREAR CUENTA GRATIS Y PROBAR DEMO!
                </Link>
                
                <Link
                  href="/auth/login"
                  className="block w-full bg-gray-100 hover:bg-gray-200 text-gray-800 py-3 px-4 rounded-lg font-medium transition-colors border-2 border-gray-200 hover:border-gray-300"
                >
                  🎆 Ya tengo cuenta - Acceder a las demos
                </Link>
              </div>

              <div className="mt-4 text-center">
                <p className="text-xs text-gray-500">
                  ✅ Registro rápido • ✅ Sin costo • ✅ Acceso inmediato a todas las demos
                </p>
              </div>

              <button
                onClick={() => setShowAuthModal(false)}
                className="mt-4 text-gray-500 hover:text-gray-700 text-sm"
              >
                Cancelar
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

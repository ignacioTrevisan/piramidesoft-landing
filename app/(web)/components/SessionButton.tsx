'use client';

import { useSession } from '@/app/hooks/useSession';
import { logoutUser } from '@/app/action/session/logoutUser';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useState } from 'react';

interface SessionButtonProps {
  isMobile?: boolean;
}

export const SessionButton = ({ isMobile = false }: SessionButtonProps) => {
  const { user, isLoading, refreshSession } = useSession();
  const [isLoggingOut, setIsLoggingOut] = useState(false);
  const router = useRouter();

  // Debug: Log del estado actual
  console.log('🔍 SessionButton render:', { user, isLoading, isAuthenticated: !!user });

  const handleLogout = async () => {
    setIsLoggingOut(true);
    try {
      await logoutUser();
      await refreshSession(); // Refrescar inmediatamente
      router.push('/');
      router.refresh();
    } catch (error) {
      console.error('Error logging out:', error);
    } finally {
      setIsLoggingOut(false);
    }
  };

  if (isLoading) {
    return (
      <div className={`${isMobile ? 'w-full' : ''} flex items-center justify-center`}>
        <div className="animate-spin rounded-full h-5 w-5 border-2 border-blue-500 border-t-transparent"></div>
      </div>
    );
  }

  if (user) {
    return (
      <div className={`${isMobile ? 'w-full space-y-2' : 'flex items-center space-x-4'}`}>
        <span className={`text-gray-700 text-sm ${isMobile ? 'block text-center' : ''}`}>
          Hola, {user.name}
        </span>
        <div className={`${isMobile ? 'w-full space-y-2' : 'flex items-center space-x-2'}`}>
          {user.role === 'admin' ? (
            <Link href="/admin">
              <button
                className={`
                  ${isMobile ? 'w-full' : ''} 
                  bg-purple-600 hover:bg-purple-700 transition-all text-white py-2 px-4 rounded-lg 
                  text-sm font-medium
                `}
              >
                📊 Panel Admin
              </button>
            </Link>
          ) : (
            <Link href="/profile">
              <button
                className={`
                  ${isMobile ? 'w-full' : ''} 
                  bg-gray-100 hover:bg-gray-200 transition-all text-gray-700 py-2 px-4 rounded-lg 
                  text-sm font-medium border border-gray-300
                `}
              >
                👤 Mi Perfil
              </button>
            </Link>
          )}
          <button
            onClick={handleLogout}
            disabled={isLoggingOut}
            className={`
              ${isMobile ? 'w-full' : ''} 
              bg-red-500 hover:bg-red-600 transition-all text-white py-2 px-4 rounded-lg 
              disabled:opacity-50 disabled:cursor-not-allowed text-sm font-medium
            `}
          >
            {isLoggingOut ? 'Cerrando...' : '🚪 Cerrar Sesión'}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className={`${isMobile ? 'w-full space-y-2' : 'flex items-center space-x-3'}`}>
      <Link href="/auth/login">
        <button className={`
          ${isMobile ? 'w-full mb-2' : ''} 
          bg-[#2563EB] hover:bg-[#1E40AF] transition-all text-white py-2 px-4 rounded-lg 
          text-sm font-medium
        `}>
          🔑 Ingresar
        </button>
      </Link>
      <Link href="/auth/register">
        <button className={`
          ${isMobile ? 'w-full' : ''} 
          border border-[#2563EB] text-[#2563EB] hover:bg-[#2563EB] hover:text-white 
          transition-all py-2 px-4 rounded-lg text-sm font-medium
        `}>
          ✨ Registrarse
        </button>
      </Link>
    </div>
  );
};

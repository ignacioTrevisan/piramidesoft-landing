'use client';

import { useState, useEffect } from 'react';

interface User {
  id: string;
  email: string;
  name: string;
  role: 'admin' | 'user';
}

export function useSession() {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const fetchSession = async () => {
    try {
      const response = await fetch('/api/auth/session', {
        credentials: 'include'
      });
      
      if (response.ok) {
        const data = await response.json();
        setUser(data.user);
      } else {
        setUser(null);
      }
    } catch (error) {
      // Error silencioso en producción - solo log si es necesario para debugging
      if (process.env.NODE_ENV === 'development') {
        console.error('Error checking session:', error);
      }
      setUser(null);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchSession();
    
    // Escuchar eventos de storage para detectar cambios de sesión
    const handleStorageChange = () => {
      fetchSession();
    };
    
    window.addEventListener('storage', handleStorageChange);
    
    // También escuchar un evento personalizado para refresh
    const handleSessionRefresh = () => {
      fetchSession();
    };
    
    window.addEventListener('sessionRefresh', handleSessionRefresh);
    
    return () => {
      window.removeEventListener('storage', handleStorageChange);
      window.removeEventListener('sessionRefresh', handleSessionRefresh);
    };
  }, []);

  const refreshSession = async () => {
    setIsLoading(true);
    await fetchSession();
    
    // Disparar evento personalizado para que otros componentes se actualicen
    window.dispatchEvent(new Event('sessionRefresh'));
  };

  return {
    user,
    isLoading,
    isAuthenticated: !!user,
    refreshSession
  };
}

"use client";
import { useEffect, useState } from "react";

interface StatsDisplayProps {
  refreshInterval?: number; // en milisegundos
}

export const StatsDisplay: React.FC<StatsDisplayProps> = ({ 
  refreshInterval = 30000 // 30 segundos por defecto
}) => {
  const [stats, setStats] = useState({
    visitas: 0,
    productos: 0,
    blogs: 0,
    consultas: 0,
  });

  const fetchCurrentStats = async () => {
    try {
      const now = new Date();
      const month = now.getMonth() + 1;
      const year = now.getFullYear();
      const currentMonth = `${String(month).padStart(2, "0")}/${year}`;
      
      // Usar la API para obtener stats actuales
      const response = await fetch('/api/stats/current', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ month: currentMonth }),
      });

      if (response.ok) {
        const data = await response.json();
        if (data.ok && data.stats) {
          setStats({
            visitas: data.stats.userViews?.length || 0,
            productos: data.stats.cantidadDeProductos || 0,
            blogs: data.stats.cantidadDeBlogs || 0,
            consultas: data.stats.cantidadDeConsultas?.length || 0,
          });
        }
      }
    } catch (error) {
      console.error('Error fetching stats:', error);
    }
  };

  useEffect(() => {
    fetchCurrentStats();
    
    const interval = setInterval(fetchCurrentStats, refreshInterval);
    
    return () => clearInterval(interval);
  }, [refreshInterval]);

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h3 className="text-lg font-semibold mb-3">Estadísticas del Mes</h3>
      <div className="grid grid-cols-2 gap-4">
        <div className="text-center">
          <div className="text-2xl font-bold text-blue-600">{stats.visitas}</div>
          <div className="text-sm text-gray-600">Visitantes</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-green-600">{stats.productos}</div>
          <div className="text-sm text-gray-600">Productos</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-purple-600">{stats.blogs}</div>
          <div className="text-sm text-gray-600">Blogs</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-orange-600">{stats.consultas}</div>
          <div className="text-sm text-gray-600">Consultas</div>
        </div>
      </div>
    </div>
  );
};

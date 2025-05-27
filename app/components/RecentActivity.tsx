"use client";
import { useEffect, useState } from "react";
import { getHistorial, HistorialEntry } from "@/app/action/historial/getHistorial";

interface RecentActivityProps {
  limit?: number;
  className?: string;
}

export const RecentActivity: React.FC<RecentActivityProps> = ({ 
  limit = 5,
  className = ""
}) => {
  const [historial, setHistorial] = useState<HistorialEntry[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHistorial = async () => {
      try {
        const response = await getHistorial(limit);
        if (response.ok && response.data) {
          setHistorial(response.data);
        }
      } catch (error) {
        console.error("Error fetching historial:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchHistorial();
  }, [limit]);

  const formatTimeAgo = (dateString: string | Date) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);

    if (diffInSeconds < 60) {
      return "Hace unos segundos";
    }

    const diffInMinutes = Math.floor(diffInSeconds / 60);
    if (diffInMinutes < 60) {
      return `Hace ${diffInMinutes} minuto${diffInMinutes > 1 ? 's' : ''}`;
    }

    const diffInHours = Math.floor(diffInMinutes / 60);
    if (diffInHours < 24) {
      return `Hace ${diffInHours} hora${diffInHours > 1 ? 's' : ''}`;
    }

    const diffInDays = Math.floor(diffInHours / 24);
    if (diffInDays < 7) {
      return `Hace ${diffInDays} día${diffInDays > 1 ? 's' : ''}`;
    }

    return date.toLocaleDateString('es-ES', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    });
  };

  const getActivityIcon = (description: string) => {
    if (description.includes("creado") || description.includes("Nueva")) {
      return { icon: "🆕", color: "bg-green-500" };
    }
    if (description.includes("actualizado") || description.includes("configuro")) {
      return { icon: "✏️", color: "bg-blue-500" };
    }
    if (description.includes("eliminado")) {
      return { icon: "🗑️", color: "bg-red-500" };
    }
    if (description.includes("consulta")) {
      return { icon: "💬", color: "bg-orange-500" };
    }
    return { icon: "📝", color: "bg-gray-500" };
  };

  if (loading) {
    return (
      <div className={`bg-white p-6 rounded-xl shadow-md border border-gray-100 ${className}`}>
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Actividad Reciente
        </h2>
        <div className="space-y-3">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg animate-pulse">
              <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
              <div className="flex-1">
                <div className="h-4 bg-gray-300 rounded w-3/4 mb-2"></div>
                <div className="h-3 bg-gray-300 rounded w-1/4"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className={`bg-white p-4 sm:p-6 rounded-xl shadow-md border border-gray-100 ${className}`}>
      <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mb-4">
        Actividad Reciente
      </h2>
      
      {historial.length === 0 ? (
        <div className="text-center py-8">
          <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
            <span className="text-2xl">📝</span>
          </div>
          <p className="text-gray-500 text-sm sm:text-base">
            No hay actividad reciente
          </p>
        </div>
      ) : (
        <div className="space-y-3">
          {historial.map((entry) => {
            const { icon, color } = getActivityIcon(entry.descripcion);
            return (
              <div
                key={entry.id}
                className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <div className={`w-2 h-2 ${color} rounded-full mt-2 flex-shrink-0`}></div>
                <div className="flex-1 min-w-0">
                  <p className="text-gray-700 text-sm sm:text-base break-words">
                    <span className="mr-2">{icon}</span>
                    {entry.descripcion}
                  </p>
                  <span className="text-xs sm:text-sm text-gray-500 block mt-1">
                    {formatTimeAgo(entry.createdAt)}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      )}
      
      {historial.length > 0 && (
        <div className="mt-4 pt-4 border-t border-gray-100">
          <button className="w-full text-center text-sm text-blue-600 hover:text-blue-800 font-medium transition-colors">
            Ver todo el historial
          </button>
        </div>
      )}
    </div>
  );
};

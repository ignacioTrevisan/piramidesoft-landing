"use client";
import { useState } from "react";

export const DebugButton = () => {
  const [debugInfo, setDebugInfo] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const handleDebug = async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/debug');
      const data = await response.json();
      setDebugInfo(data);
      console.log("Debug info:", data);
    } catch (error) {
      console.error("Error fetching debug info:", error);
    } finally {
      setLoading(false);
    }
  const handleResetStats = async () => {
    if (!confirm('¿Estás seguro de que quieres resetear todas las estadísticas del mes actual?')) {
      return;
    }
    
    setLoading(true);
    try {
      const response = await fetch('/api/stats/reset', {
        method: 'POST',
      });
      const result = await response.json();
      console.log("Reset result:", result);
      
      // Refresh debug info
      await handleDebug();
    } catch (error) {
      console.error("Error resetting stats:", error);
    } finally {
      setLoading(false);
    }
  const handleClearHistorial = async () => {
    if (!confirm('¿Estás seguro de que quieres limpiar todo el historial?')) {
      return;
    }
    
    setLoading(true);
    try {
      const response = await fetch('/api/historial/clear', {
        method: 'POST',
      });
      const result = await response.json();
      console.log("Clear historial result:", result);
      
      // Refresh debug info
      await handleDebug();
    } catch (error) {
      console.error("Error clearing historial:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleInitializeStats = async () => {
    setLoading(true);
    try {
      // Primero inicializar stats
      const initResponse = await fetch('/api/stats/initialize', {
        method: 'POST',
      });
      const initResult = await initResponse.json();
      console.log("Initialize result:", initResult);
      
      // Luego actualizar contadores
      const updateResponse = await fetch('/api/stats/update-counters', {
        method: 'POST',
      });
      const updateResult = await updateResponse.json();
      console.log("Update result:", updateResult);
      
      // Refresh debug info
      await handleDebug();
    } catch (error) {
      console.error("Error initializing stats:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
      <h3 className="text-lg font-semibold text-yellow-800 mb-3">Debug Panel (Temporal)</h3>
      <div className="flex gap-3 mb-3">
        <button
          onClick={handleDebug}
          disabled={loading}
          className="bg-yellow-600 text-white px-4 py-2 rounded hover:bg-yellow-700 disabled:opacity-50"
        >
          {loading ? "Cargando..." : "Debug Stats"}
        </button>
        <button
          onClick={handleInitializeStats}
          disabled={loading}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:opacity-50"
        >
          {loading ? "Actualizando..." : "Inicializar Stats"}
        </button>
        <button
          onClick={handleResetStats}
          disabled={loading}
          className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 disabled:opacity-50"
        >
          {loading ? "Reseteando..." : "Reset Stats"}
        </button>
      </div>
      
      {debugInfo && (
        <div className="bg-white p-3 rounded border max-h-64 overflow-y-auto">
          <pre className="text-xs">{JSON.stringify(debugInfo, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

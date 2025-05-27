"use client";
import { useEffect } from "react";

export const useVisitorTracking = () => {
  useEffect(() => {
    const registerVisit = async () => {
      try {
        // Verificar si ya se registró la visita en esta sesión
        const hasVisited = sessionStorage.getItem("visitor_registered");

        if (!hasVisited) {
          // Registrar visitante
          const visitorResponse = await fetch("/api/stats/visitor", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
          });

          // Actualizar contadores de stats

          if (visitorResponse.ok) {
            // Marcar que ya se registró la visita en esta sesión
            sessionStorage.setItem("visitor_registered", "true");
          }
        }
      } catch (error) {
        // Error silencioso en producción
        if (process.env.NODE_ENV === "development") {
          console.error("Error registrando visita:", error);
        }
      }
    };

    registerVisit();
  }, []);
};

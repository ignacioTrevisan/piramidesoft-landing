"use client";

import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Asegurarse de que ScrollTrigger esté registrado
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function PiramideSoftLanding() {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!sectionRef.current) return;
    
    // Esperar a que todo cargue completamente
    const initAnimations = () => {
      // Seleccionar elementos
      const cards = gsap.utils.toArray('.process-card');
      const dots = gsap.utils.toArray('.timeline-dot');
      const progressLine = document.querySelector('.progress-line');
      
      // Configuración inicial
      gsap.set(dots, { backgroundColor: '#E5E7EB' }); // Todos los puntos grises
      gsap.set(dots[0], { backgroundColor: '#2563EB' }); // Start activo
      
      // Todas las tarjetas ocultas al inicio
      gsap.set(cards, { opacity: 0, y: 30 });
      
      // Línea de progreso vacía
      gsap.set(progressLine, { width: '0%' });
      
      // Crear ScrollTrigger para fijar la sección
      const pinSetting = ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top",
        end: "+=2000", // Ajustar según sea necesario
        pin: true,
        pinSpacing: true,
        anticipatePin: 1, // Ayuda con el rendimiento
        // markers: true, // Para depuración
      });
      
      // Crear triggers individuales para cada tarjeta
      cards.forEach((card, index) => {
        ScrollTrigger.create({
          trigger: sectionRef.current,
          start: `top+=${index * 400} top`, // Espaciado entre animaciones
          end: `top+=${(index + 1) * 400} top`,
          scrub: 0.5, // Suavizado del efecto
          // markers: true, // Para depuración
          onEnter: () => {
            // Mostrar tarjeta
            gsap.to(card, {
              opacity: 1,
              y: 0,
              duration: 0.3,
              ease: "power1.out"
            });
            
            // Activar punto
            gsap.to(dots[index + 1], {
              backgroundColor: '#2563EB',
              duration: 0.2
            });
            
            // Actualizar línea de progreso
            gsap.to(progressLine, {
              width: `${(index + 1) * 20}%`,
              duration: 0.3
            });
          },
          onLeaveBack: () => {
            // Ocultar tarjeta si retrocedemos
            gsap.to(card, {
              opacity: 0,
              y: 30,
              duration: 0.3
            });
            
            // Desactivar punto
            gsap.to(dots[index + 1], {
              backgroundColor: '#E5E7EB',
              duration: 0.2
            });
            
            // Reducir línea de progreso
            gsap.to(progressLine, {
              width: `${index * 20}%`,
              duration: 0.3
            });
          }
        });
      });
    };
    
    // Iniciar las animaciones después de que todo cargue
    setTimeout(initAnimations, 100);
    
    return () => {
      // Limpiar todos los ScrollTriggers
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);
  
  const processSteps = [
    {
      id: "01",
      title: "Ideación",
      description: "Brainstorming y concepto desarrollo."
    },
    {
      id: "02",
      title: "Planning",
      description: "Enfoque estructurado para la implementación."
    },
    {
      id: "03",
      title: "Design",
      description: "Interfaces visualmente atractivas y amigables."
    },
    {
      id: "04",
      title: "Development",
      description: "Código limpio y funcional."
    },
    {
      id: "05",
      title: "Deployment",
      description: "Lanzamiento y soporte continuo."
    }
  ];
  
  return (
    <div 
      ref={sectionRef} 
      className="relative min-h-screen bg-gray-50 py-16 overflow-hidden" 
      id="proceso"
    >
      {/* Título de la sección */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-[#2563EB]">Nuestro Proceso</h2>
        <p className="text-gray-600 mt-2 text-xl">Así desarrollamos nuestros proyectos</p>
      </div>
      
      {/* Timeline con pasos */}
      <div className="container mx-auto px-6 md:px-8">
        <div className="mb-16">
          {/* Línea superior con etiquetas */}
          <div className="flex justify-between mb-2">
            <div className="text-gray-700 font-medium w-[16.66%] text-center text-sm">Start</div>
            {processSteps.map((step, index) => (
              <div key={`label-${index}`} className="step-label text-gray-700 font-medium w-[16.66%] text-center text-sm">
                Step {index + 1}
              </div>
            ))}
          </div>
          
          {/* Línea con puntos */}
          <div className="flex justify-between items-center">
            <div className="timeline-dot h-3 w-3 rounded-full bg-[#2563EB]"></div>
            {processSteps.map((_, index) => (
              <div 
                key={`dot-${index}`} 
                className="timeline-dot h-3 w-3 rounded-full bg-gray-300"
              ></div>
            ))}
          </div>
          
          {/* Línea de progreso */}
          <div className="relative h-1 mt-1">
            <div className="absolute w-full h-[2px] bg-gray-200 rounded-full"></div>
            <div className="absolute h-[2px] bg-[#2563EB] rounded-full progress-line" style={{ width: '0%' }}></div>
          </div>
        </div>
        
        {/* Grid de tarjetas alineadas con los pasos */}
        <div className="grid grid-cols-6 gap-4">
          {/* Primera columna: Start (vacía) */}
          <div className="col-span-1"></div>
          
          {/* Columnas para cada paso */}
          {processSteps.map((step, index) => (
            <div key={`card-${index}`} className="col-span-1">
              <div className="process-card opacity-0">
                <div className="bg-white h-[280px] rounded-lg shadow-md overflow-hidden">
                  {/* Cabecera */}
                  <div className="p-3 border-b">
                    <h3 className="text-lg font-semibold text-gray-800">{step.title}</h3>
                    <span className="text-sm text-[#2563EB] font-medium">{step.id}</span>
                  </div>
                  
                  {/* Imagen/Contenido */}
                  <div className="h-32 bg-gray-100 flex items-center justify-center">
                    <span className="text-6xl text-gray-300 font-bold">{step.title.charAt(0)}</span>
                  </div>
                  
                  {/* Descripción */}
                  <div className="p-3">
                    <p className="text-sm text-gray-600">{step.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Espacio para scroll (invisible) */}
      <div className="h-[2000px] w-full opacity-0 pointer-events-none absolute"></div>
    </div>
  );
}
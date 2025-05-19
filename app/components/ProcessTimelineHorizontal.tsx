"use client";

import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';

// Asegurarse de que ScrollTrigger esté registrado
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function ProcessTimelineHorizontal() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const stepsContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Asegurarse de que los elementos del DOM estén cargados
    if (!sectionRef.current || !stepsContainerRef.current) return;

    const steps = document.querySelectorAll('.process-step');
    
    // Configuración inicial: todos los pasos están invisibles y desplazados horizontalmente
    gsap.set(steps, { 
      x: '100vw', // Iniciar fuera de la pantalla a la derecha
      opacity: 0
    });

    // Crear una timeline principal controlada por el scroll
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        pin: true, // Fija la sección mientras se hace scroll
        start: "top top",
        end: "+=3000", // Duración del scroll horizontal (ajustar según necesidad)
        scrub: 1, // Suavizado del efecto
        // markers: true, // Para depuración
      }
    });

    // Animar la aparición secuencial de cada paso desde la derecha
    steps.forEach((step, index) => {
      tl.to(step, {
        x: 0,
        opacity: 1,
        duration: 0.5
      })
      .to({}, { duration: 0.5 }); // Pausa antes del siguiente paso
    });

    return () => {
      // Limpiar ScrollTriggers al desmontar
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const processSteps = [
    {
      id: "01",
      title: "Ideación",
      description: "Brainstorming y concepto desarrollo.",
      image: "/process-ideation.jpg",
      bgColor: "bg-blue-50",
    },
    {
      id: "02",
      title: "Planificación",
      description: "Enfoque estructurado para la implementación.",
      image: "/process-planning.jpg",
      bgColor: "bg-gray-50",
    },
    {
      id: "03",
      title: "Diseño",
      description: "Interfaces visualmente atractivas y amigables.",
      image: "/process-design.jpg",
      bgColor: "bg-white",
    },
    {
      id: "04",
      title: "Desarrollo",
      description: "Código limpio y funcional.",
      image: "/process-development.jpg",
      bgColor: "bg-gray-50",
    },
    {
      id: "05",
      title: "Implementación",
      description: "Lanzamiento y soporte continuo.",
      image: "/process-deployment.jpg",
      bgColor: "bg-red-50",
    },
  ];

  return (
    <div 
      ref={sectionRef}
      id="proceso"
      className="relative w-full h-screen bg-gray-50 overflow-hidden"
    >
      {/* Título de la sección */}
      <div className="text-center py-10">
        <h2 className="text-4xl font-bold text-[#2563EB]">Nuestro Proceso</h2>
        <p className="text-gray-600 mt-2 text-xl">Así desarrollamos nuestros proyectos</p>
      </div>

      {/* Timeline horizontal con pasos */}
      <div 
        ref={timelineRef}
        className="absolute top-32 left-0 w-full px-8 z-10"
      >
        <div className="flex items-center">
          <div className="text-gray-500 font-medium pr-4">Start</div>
          <div className="w-full relative h-1">
            <div className="absolute w-full h-[2px] bg-gray-200 rounded-full"></div>
            <div className="absolute h-[2px] bg-[#2563EB] rounded-full progress-line" style={{ width: '0%' }}></div>
            
            {/* Dots en la línea de tiempo */}
            <div className="flex relative">
              {processSteps.map((_, index) => (
                <div 
                  key={`dot-${index}`} 
                  className="absolute h-4 w-4 rounded-full bg-gray-300 shadow-sm timeline-dot" 
                  style={{ left: `${(index + 1) * 20}%`, top: '-6px' }}
                ></div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Contenedor de los pasos con efecto de scroll horizontal */}
      <div 
        ref={stepsContainerRef}
        className="w-full h-full pt-24"
      >
        {processSteps.map((step, index) => (
          <div 
            key={step.id}
            className="process-step absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 w-4/5 max-w-4xl"
          >
            <div className={`flex flex-col md:flex-row items-center bg-white rounded-xl shadow-lg overflow-hidden ${step.bgColor}`}>
              {/* Imagen */}
              <div className="md:w-1/2 h-64 relative">
                <div className="w-full h-full flex items-center justify-center bg-gray-200">
                  {/* Puedes reemplazar esto con Image cuando tengas las imágenes */}
                  <div className="text-6xl">{step.title.charAt(0)}</div>
                </div>
              </div>
              
              {/* Contenido */}
              <div className="md:w-1/2 p-8">
                <span className="text-lg text-[#2563EB] font-medium">{step.id}</span>
                <h3 className="text-3xl font-bold text-gray-800 mb-4">{step.title}</h3>
                <p className="text-gray-600 text-lg">{step.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
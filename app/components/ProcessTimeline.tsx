"use client";

import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';

// Asegurarse de que ScrollTrigger esté registrado
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function ProcessTimeline() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const stepsContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Asegurarse de que los elementos del DOM estén cargados
    if (!sectionRef.current || !stepsContainerRef.current) return;

    const steps = document.querySelectorAll('.process-step');
    const timelineDots = document.querySelectorAll('.timeline-dot');

    // Configuración inicial: todos los pasos están fuera de la vista (a la derecha)
    gsap.set(steps, { 
      x: '100%', // Posicionarlos fuera de la vista a la derecha
      opacity: 0 
    });

    // Configuración inicial: solo el primer dot está activo
    gsap.set(timelineDots[0], { 
      backgroundColor: '#2563EB', 
      scale: 1.2 
    });

    // Crear un timeline para cada paso
    steps.forEach((step, index) => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: stepsContainerRef.current,
          start: `top+=${index * 150} center`, // Activar en diferentes puntos del scroll
          end: `top+=${(index + 1) * 150} center`,
          scrub: 1, // Efecto suave
          toggleActions: "play none none reverse",
          // markers: true // Habilitar para depuración
        }
      });
      
      // Animar el paso entrando desde la derecha
      tl.to(step, {
        x: 0, // Mover a su posición normal
        opacity: 1,
        duration: 0.5,
        ease: "power2.out"
      });
      
      // Activar el punto correspondiente en la línea de tiempo
      if (index > 0) { // El primer punto ya está activo
        tl.to(timelineDots[index], {
          backgroundColor: '#2563EB',
          scale: 1.2,
          duration: 0.2
        }, "<"); // Iniciar al mismo tiempo que la animación anterior
      }
      
      // Si no es el último paso, preparar la desactivación del punto cuando aparezca el siguiente
      if (index < steps.length - 1) {
        gsap.timeline({
          scrollTrigger: {
            trigger: stepsContainerRef.current,
            start: `top+=${(index + 1) * 150} center`,
            end: `top+=${(index + 2) * 150} center`,
            scrub: 1,
            toggleActions: "play none none reverse"
          }
        }).to(timelineDots[index], {
          backgroundColor: '#d1d5db',
          scale: 1,
          duration: 0.2
        });
      }
    });

    // Línea de progreso que se llena mientras se hace scroll
    const progressLine = document.querySelector('.progress-line');
    if (progressLine) {
      gsap.to(progressLine, {
        width: '100%',
        scrollTrigger: {
          trigger: stepsContainerRef.current,
          start: 'top center',
          end: `bottom-=${100} center`,
          scrub: 1
        }
      });
    }

    return () => {
      // Limpiar todos los ScrollTriggers cuando el componente se desmonte
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const processSteps = [
    {
      id: "01",
      title: "Ideación",
      description: "Brainstorming y concepto desarrollo.",
      icon: "💡",
      bgColor: "bg-blue-50",
    },
    {
      id: "02",
      title: "Planificación",
      description: "Enfoque estructurado para la implementación.",
      icon: "📋",
      bgColor: "bg-gray-50",
    },
    {
      id: "03",
      title: "Diseño",
      description: "Interfaces visualmente atractivas y amigables.",
      icon: "🎨",
      bgColor: "bg-white",
    },
    {
      id: "04",
      title: "Desarrollo",
      description: "Código limpio y funcional.",
      icon: "💻",
      bgColor: "bg-gray-50",
    },
    {
      id: "05",
      title: "Implementación",
      description: "Lanzamiento y soporte continuo.",
      icon: "🚀",
      bgColor: "bg-red-50",
    },
  ];

  return (
    <div 
      ref={sectionRef}
      id="proceso"
      className="relative w-full min-h-screen bg-gray-50 py-16"
    >
      {/* Título de la sección */}
      <div className="text-center mb-20">
        <h2 className="text-4xl font-bold text-[#2563EB]">Nuestro Proceso</h2>
        <p className="text-gray-600 mt-2 text-xl">Así desarrollamos nuestros proyectos</p>
      </div>

      {/* Timeline dots */}
      <div className="w-full max-w-6xl mx-auto px-4 mb-16">
        <div className="flex justify-between items-center">
          <div className="text-gray-500 font-medium">Start</div>
          {processSteps.map((step, index) => (
            <div key={`step-label-${index}`} className="text-gray-500 font-medium">
              Step {index + 1}
            </div>
          ))}
        </div>
        <div className="flex justify-between items-center mt-2">
          <div className="timeline-dot h-4 w-4 rounded-full bg-[#2563EB] shadow-md" data-index="0"></div>
          {processSteps.map((_, index) => (
            <div 
              key={`dot-${index}`} 
              className="timeline-dot h-4 w-4 rounded-full bg-gray-300 shadow-sm" 
              data-index={index + 1}
            ></div>
          ))}
        </div>
        <div className="relative h-1 mt-3">
          <div className="absolute w-full h-[2px] bg-gray-200 rounded-full"></div>
          <div className="absolute h-[2px] bg-[#2563EB] rounded-full progress-line" style={{ width: '0%' }}></div>
        </div>
      </div>

      {/* Contenedor principal para los pasos con efecto de scroll horizontal */}
      <div 
        ref={stepsContainerRef}
        className="w-full max-w-6xl mx-auto px-4"
      >
        {processSteps.map((step, index) => (
          <div 
            key={step.id}
            className={`process-step w-full mb-24 ${index % 2 === 0 ? 'pl-0 md:pl-16' : 'pr-0 md:pr-16'}`}
            data-index={index}
          >
            <div className={`flex flex-col md:flex-row items-center bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 p-6 hover:shadow-xl`}>
              {/* Imagen/Icono */}
              <div className={`md:w-1/4 flex items-center justify-center mb-6 md:mb-0 ${step.bgColor} p-8 rounded-lg`}>
                <div className="text-6xl">{step.icon}</div>
              </div>
              
              {/* Contenido del paso */}
              <div className="md:w-3/4 md:pl-8">
                <div className="flex items-center mb-2">
                  <span className="text-xl font-semibold text-[#2563EB] mr-2">{step.id}</span>
                  <h3 className="text-2xl font-bold text-gray-800">{step.title}</h3>
                </div>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
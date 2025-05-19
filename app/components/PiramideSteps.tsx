"use client";

import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';

// Asegurarse de que ScrollTrigger esté registrado
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function PiramideSteps() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!sectionRef.current) return;
    
    // Obtener elementos
    const steps = gsap.utils.toArray('.step-card');
    const timelineDots = gsap.utils.toArray('.timeline-dot');
    const progressLine = document.querySelector('.progress-line');
    
    // Configuración inicial
    gsap.set(steps, { 
      opacity: 0, 
      x: '100%' // Comenzar todos los pasos fuera de la pantalla a la derecha
    });
    
    // Primer elemento visible desde el inicio
    gsap.set(steps[0], { opacity: 1, x: '0%' });
    gsap.set(timelineDots[0], { backgroundColor: '#2563EB', scale: 1.5 });
    
    // Animar la aparición secuencial de cada paso
    steps.forEach((step, index) => {
      if (index === 0) return; // Saltamos el primer paso que ya está visible
      
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: `top+=${index * 250} center`, // Diferentes puntos de scroll para cada paso
        end: `top+=${(index + 1) * 250} center`,
        scrub: 1,
        // markers: true, // Para depuración
        onEnter: () => {
          // Mostrar el nuevo paso
          gsap.to(step, {
            opacity: 1,
            x: '0%',
            duration: 0.5,
            ease: 'power2.out'
          });
          
          // Activar el dot correspondiente
          gsap.to(timelineDots[index], {
            backgroundColor: '#2563EB',
            scale: 1.5,
            duration: 0.3
          });
          
          // Actualizar la línea de progreso
          gsap.to(progressLine, {
            width: `${(index + 1) * 20}%`,
            duration: 0.3
          });
        },
        onLeaveBack: () => {
          // Ocultar el paso al scrollear hacia arriba
          gsap.to(step, {
            opacity: 0,
            x: '100%',
            duration: 0.5
          });
          
          // Desactivar el dot
          gsap.to(timelineDots[index], {
            backgroundColor: '#d1d5db',
            scale: 1,
            duration: 0.3
          });
          
          // Actualizar la línea de progreso
          gsap.to(progressLine, {
            width: `${index * 20}%`,
            duration: 0.3
          });
        }
      });
    });
    
    return () => {
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
    <div ref={sectionRef} id="proceso" className="relative min-h-screen bg-gray-50 py-16">
      {/* Título de la sección */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-[#2563EB]">Nuestro Proceso</h2>
        <p className="text-gray-600 mt-2 text-xl">Así desarrollamos nuestros proyectos</p>
      </div>
      
      {/* Timeline horizontal */}
      <div ref={timelineRef} className="container mx-auto px-4 mb-12">
        <div className="flex justify-between items-center mb-2">
          <div className="text-gray-700 font-medium">Start</div>
          {processSteps.map((_, index) => (
            <div key={`step-${index}`} className="text-gray-700 font-medium">
              Step {index + 1}
            </div>
          ))}
        </div>
        
        <div className="flex justify-between items-center">
          <div className="timeline-dot h-4 w-4 rounded-full bg-[#2563EB] shadow-md"></div>
          {processSteps.map((_, index) => (
            <div key={`dot-${index}`} className="timeline-dot h-4 w-4 rounded-full bg-gray-300 shadow-md"></div>
          ))}
        </div>
        
        <div className="relative h-1 mt-3">
          <div className="absolute w-full h-[2px] bg-gray-200 rounded-full"></div>
          <div className="absolute h-[2px] bg-[#2563EB] rounded-full progress-line" style={{ width: '20%' }}></div>
        </div>
      </div>
      
      {/* Container para el carrusel horizontal */}
      <div className="container mx-auto px-4">
        {/* Este div fijo será el espacio para hacer scroll */}
        <div className="h-[800px]">
          {/* Aquí el contenedor visual que mostrará los elementos en horizontal */}
          <div className="relative w-full overflow-hidden">
            <div className="flex">
              {processSteps.map((step, index) => (
                <div 
                  key={step.id}
                  className="step-card flex-none w-full md:w-1/5"
                  style={{
                    position: 'absolute',
                    left: `${index * 20}%`,
                    zIndex: 5 - index
                  }}
                >
                  <div className="mx-2">
                    <div className="bg-white rounded-lg shadow-lg p-6 h-full">
                      <div className="mb-4 flex items-center">
                        <span className="text-lg font-bold text-[#2563EB] mr-2">{step.id}</span>
                        <h3 className="text-xl font-bold text-gray-800">{step.title}</h3>
                      </div>
                      
                      <div className="h-40 bg-gray-100 rounded mb-4 flex items-center justify-center">
                        <div className="text-5xl text-gray-300 font-bold">{step.title.charAt(0)}</div>
                      </div>
                      
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
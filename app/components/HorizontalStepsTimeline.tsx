"use client";

import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Asegurarse de que ScrollTrigger esté registrado
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function HorizontalStepsTimeline() {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!sectionRef.current) return;
    
    // Creamos una sección fija mientras se scrollea
    ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top top",
      end: "bottom bottom",
      pin: true,
      pinSpacing: true,
    });
    
    // Seleccionamos todos los elementos que queremos animar
    const steps = document.querySelectorAll('.step-card');
    const dots = document.querySelectorAll('.timeline-dot');
    const progressLine = document.querySelector('.progress-line');
    
    // Animación inicial: todos ocultos excepto el primero
    gsap.set(steps, { autoAlpha: 0, x: '100vw' });
    gsap.set(steps[0], { autoAlpha: 1, x: 0 });
    gsap.set(dots[0], { backgroundColor: '#2563EB' });
    
    // Creamos un timeline principal controlado por el scroll
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top", 
        end: "+=2000", // Longitud del scroll - ajustar según necesidad
        scrub: 1,       // Suavizado
        pin: true,      // Mantener sección fija
        // markers: true,  // Para depuración
      }
    });
    
    // Para cada paso (excepto el primero)
    steps.forEach((step, index) => {
      if (index === 0) return; // Omitir el primero
      
      // Animar la entrada del paso y activar el punto en la línea
      tl.to(step, { 
        autoAlpha: 1, 
        x: 0, 
        duration: 0.5 
      })
      .to(dots[index], { 
        backgroundColor: '#2563EB',
        duration: 0.1
      }, "<")
      .to(progressLine, {
        width: `${(index + 1) * 20}%`,
        duration: 0.2
      }, "<");
    });
    
    return () => {
      // Limpiar las animaciones al desmontar
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);
  
  const steps = [
    {
      id: "01",
      title: "Ideación",
      description: "Brainstorming y desarrollo de concepto.",
    },
    {
      id: "02",
      title: "Planning",
      description: "Enfoque estructurado para la implementación.",
    },
    {
      id: "03",
      title: "Design",
      description: "Interfaces visualmente atractivas y amigables.",
    },
    {
      id: "04",
      title: "Development",
      description: "Código limpio y funcional.",
    },
    {
      id: "05",
      title: "Deployment",
      description: "Lanzamiento y soporte continuo.",
    }
  ];
  
  return (
    <div ref={sectionRef} className="h-screen bg-gray-50">
      {/* Título de la sección */}
      <div className="text-center pt-10 pb-12">
        <h2 className="text-4xl font-bold text-[#2563EB]">Nuestro Proceso</h2>
        <p className="text-gray-600 mt-2 text-xl">Así desarrollamos nuestros proyectos</p>
      </div>
      
      {/* Línea de tiempo con puntos */}
      <div className="container mx-auto px-4 mb-12">
        <div className="w-full flex justify-between items-center mb-2">
          <div className="text-gray-700 font-medium">Start</div>
          {steps.map((_, i) => (
            <div key={`step-${i}`} className="text-gray-700 font-medium">
              Step {i+1}
            </div>
          ))}
        </div>
        
        <div className="flex justify-between items-center">
          <div className="timeline-dot h-4 w-4 rounded-full bg-gray-300"></div>
          {steps.map((_, i) => (
            <div key={`dot-${i}`} className="timeline-dot h-4 w-4 rounded-full bg-gray-300"></div>
          ))}
        </div>
        
        <div className="relative h-1 mt-3">
          <div className="absolute w-full h-[2px] bg-gray-200 rounded-full"></div>
          <div className="absolute h-[2px] bg-[#2563EB] rounded-full progress-line" style={{ width: '0%' }}></div>
        </div>
      </div>
      
      {/* Contenedor para los pasos horizontales */}
      <div className="container mx-auto px-4">
        <div className="flex justify-center">
          {steps.map((step, index) => (
            <div 
              key={step.id} 
              className="step-card w-1/5 px-2"
              style={{ 
                visibility: index === 0 ? 'visible' : 'hidden',
                position: index === 0 ? 'relative' : 'absolute'
              }}
            >
              <div className="bg-white rounded-lg shadow-lg p-6 h-full">
                <div className="mb-4">
                  <span className="text-[#2563EB] font-bold mr-2">{step.id}</span>
                  <h3 className="text-xl font-bold text-gray-800">{step.title}</h3>
                </div>
                <div className="h-40 bg-gray-100 rounded mb-4 flex items-center justify-center">
                  <span className="text-5xl text-gray-300">{step.title.charAt(0)}</span>
                </div>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

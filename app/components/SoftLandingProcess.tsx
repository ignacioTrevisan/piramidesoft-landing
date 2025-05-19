"use client";

import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Asegurarse de que ScrollTrigger esté registrado
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function SoftLandingProcess() {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!sectionRef.current) return;
    
    // Obtener elementos
    const cards = gsap.utils.toArray('.process-card');
    const dots = gsap.utils.toArray('.timeline-dot');
    const labels = gsap.utils.toArray('.step-label');
    const progressLine = document.querySelector('.progress-line');
    
    // Configuración inicial
    gsap.set(cards, { 
      xPercent: 100,  // Todos empiezan a la derecha de la pantalla 
      opacity: 0,
      scale: 0.8
    });
    
    // Hacer visible el primer paso desde el inicio
    gsap.set(cards[0], { xPercent: 0, opacity: 1, scale: 1 });
    gsap.set(dots[0], { backgroundColor: '#2563EB', scale: 1.2 });
    gsap.set(labels[0], { color: '#2563EB', fontWeight: 'bold' });
    
    // Creamos un ScrollTrigger para fijar toda la sección de proceso
    ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top top",
      end: "+=2000", // Longitud de scroll para la animación completa
      pin: true,     // Fija la sección al hacer scroll
      pinSpacing: true,
      // markers: true, // Para depuración
    });
    
    // Configuramos las animaciones para cada tarjeta cuando hacemos scroll
    cards.forEach((card, index) => {
      if (index === 0) return; // Saltamos el primer paso
      
      // Posición de cada tarjeta en la vista final (de izquierda a derecha)
      const targetXPercent = -20 * index; 
      
      // Timeline para este paso particular
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: `+=${index * 400}`, // Cada paso se activa en un punto diferente del scroll
          end: `+=${400}`,
          scrub: 1, // Animación suave siguiendo el scroll
          // markers: true, // Para depuración
          toggleActions: "play none none reverse"
        }
      });
      
      // Animar la tarjeta
      tl.to(card, {
        xPercent: targetXPercent, // Mover a su posición final
        opacity: 1,
        scale: 1,
        duration: 0.5
      });
      
      // Animar el punto de la línea de tiempo correspondiente
      tl.to(dots[index], { 
        backgroundColor: '#2563EB',
        scale: 1.2,
        duration: 0.2
      }, "<");
      
      // Animar la etiqueta
      tl.to(labels[index], {
        color: '#2563EB',
        fontWeight: 'bold',
        duration: 0.2
      }, "<");
      
      // Animar la línea de progreso
      tl.to(progressLine, {
        width: `${(index + 1) * 20}%`, // 5 pasos = 20% cada uno
        duration: 0.2
      }, "<");
      
      // Desactivar etapas anteriores (quizás prefiera comentar esto para mantener etapas anteriores activas)
      // if (index > 1) {
      //   tl.to(dots[index-1], { scale: 1, duration: 0.2 }, "<");
      //   tl.to(labels[index-1], { fontWeight: 'normal', color: '#6B7280', duration: 0.2 }, "<");
      // }
    });
    
    return () => {
      // Limpiar al desmontar
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);
  
  const processSteps = [
    {
      id: "01",
      title: "Ideación",
      description: "Brainstorming y concepto desarrollo.",
      bgColor: "bg-blue-50"
    },
    {
      id: "02",
      title: "Planning",
      description: "Enfoque estructurado para la implementación.",
      bgColor: "bg-gray-50"
    },
    {
      id: "03",
      title: "Design",
      description: "Interfaces visualmente atractivas y amigables.",
      bgColor: "bg-white"
    },
    {
      id: "04",
      title: "Development",
      description: "Código limpio y funcional.",
      bgColor: "bg-gray-50"
    },
    {
      id: "05",
      title: "Deployment",
      description: "Lanzamiento y soporte continuo.",
      bgColor: "bg-red-50"
    }
  ];
  
  return (
    <div ref={sectionRef} className="relative h-screen overflow-hidden bg-gray-50 py-10">
      {/* Encabezado de la sección */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-[#2563EB]">Nuestro Proceso</h2>
        <p className="text-gray-600 mt-2 text-xl">Así desarrollamos nuestros proyectos</p>
      </div>
      
      {/* Timeline con dots */}
      <div className="container mx-auto px-4 mb-20">
        <div className="flex justify-between items-center mb-2">
          <div className="text-gray-600 font-medium">Start</div>
          {processSteps.map((step, index) => (
            <div key={`label-${index}`} className="step-label text-gray-600 font-medium">
              Step {index + 1}
            </div>
          ))}
        </div>
        
        <div className="flex justify-between items-center">
          <div className="timeline-dot h-4 w-4 rounded-full bg-gray-300 shadow-md"></div>
          {processSteps.map((_, index) => (
            <div key={`dot-${index}`} className="timeline-dot h-4 w-4 rounded-full bg-gray-300 shadow-md"></div>
          ))}
        </div>
        
        <div className="relative h-1 mt-3">
          <div className="absolute w-full h-[2px] bg-gray-200 rounded-full"></div>
          <div className="absolute h-[2px] bg-[#2563EB] rounded-full progress-line" style={{ width: '0%' }}></div>
        </div>
      </div>
      
      {/* Contenedor de tarjetas que se colocarán horizontalmente */}
      <div className="container mx-auto px-4 relative h-96">
        <div className="process-container relative w-full h-full">
          {processSteps.map((step, index) => (
            <div 
              key={step.id}
              className={`process-card absolute top-0 left-0 w-full md:w-1/5 px-2 ${index > 0 ? 'invisible md:visible' : ''}`}
            >
              <div className={`bg-white rounded-lg shadow-lg p-6 h-full ${step.bgColor}`}>
                <div className="mb-4">
                  <span className="text-[#2563EB] font-bold mr-2">{step.id}</span>
                  <h3 className="text-xl font-bold text-gray-800">{step.title}</h3>
                </div>
                
                <div className="h-40 bg-white bg-opacity-50 rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-6xl text-[#2563EB] opacity-30">{step.title.charAt(0)}</span>
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
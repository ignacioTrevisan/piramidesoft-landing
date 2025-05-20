import React, { useEffect, useRef, useState } from "react";

interface Step {
  position: string;
  title: string;
  number: string;
  description: string;
  image: string;
}

export const Steps: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);
  const startCardRef = useRef<HTMLDivElement>(null);
  const [activeStep, setActiveStep] = useState<number>(0);
  const [isBarVisible, setIsBarVisible] = useState<boolean>(false);

  // Define steps data
  const steps: Step[] = [
    {
      position: "Paso 1",
      title: "Aterrizaje de ideas",
      number: "01",
      description:
        "Todo comienza con una charla. Nos contás tu idea, problema o necesidad, y nosotros nos encargamos de entender cómo la tecnología puede ayudarte. No hace falta que traigas algo definido: estamos para ayudarte a bajar las ideas a tierra, incluso si todavía son muy generales. Acá comienza el proceso de convertir una necesidad en una solución digital concreta.",
      image: "https://placehold.co/400x300/orange/white",
    },
    {
      position: "Paso 2",
      title: "Planeamiento y propuesta de solución",
      number: "02",
      description:
        "Evaluamos si podemos ofrecerte una solución ya desarrollada o si conviene construir algo a medida. Te presentamos las opciones disponibles según tu presupuesto, tiempos y objetivos. En todos los casos, detallamos el paso a paso del proceso, qué funcionalidades vas a tener y cómo vamos a avanzar para que no haya sorpresas.",
      image: "https://placehold.co/400x300/gray/white",
    },
    {
      position: "Paso 3",
      title: "Desarrollo o adaptación",
      number: "03",
      description:
        "Si el camino elegido es el desarrollo personalizado, nuestro equipo comienza a trabajar en tu sistema desde cero, utilizando herramientas modernas y buenas prácticas. Si optás por una solución ya existente, la adaptamos a tu negocio para que se sienta hecha para vos. En ambos casos, recibís avances y podés participar del proceso.",
      image: "https://placehold.co/400x300/lightgray/white",
    },
    {
      position: "Paso 4",
      title: "Instalación y puesta en marcha",
      number: "04",
      description:
        "Una vez que todo está listo, nos encargamos de implementar el sistema en tu negocio. Podemos instalarlo en tus dispositivos o subirlo a la nube, según lo que necesites. Hacemos pruebas, verificamos que todo funcione bien y, si es necesario, capacitamos a tu equipo. Queremos que empieces a usar tu sistema sin complicaciones.",
      image: "https://placehold.co/400x300/white/gray",
    },
    {
      position: "Paso 5",
      title: "Soporte y mejoras",
      number: "05",
      description:
        "Después de la entrega, seguimos acompañándote. Brindamos soporte técnico para ayudarte con dudas, ajustes o mejoras que quieras hacer más adelante. Nuestro objetivo es que tu software evolucione con vos, y que sientas que tenés un equipo detrás para resolver lo que haga falta.",
      image: "https://placehold.co/400x300/red/white",
    },
  ];

  // Punto crucial: calculamos manualmente cuántos segmentos necesitamos
  const totalSegments = steps.length + 1; // +1 por el "Start"

  useEffect(() => {
    // Inicializamos con el punto "Start" activo
    setActiveStep(0);
    setIsBarVisible(true);
    // Función que determina qué paso está activo basado en el scroll
    const handleScroll = () => {
      const viewportHeight = window.innerHeight;
      const viewportMidpoint = viewportHeight / 2;

      // Verificamos si el contenedor principal está visible en la pantalla
      if (containerRef.current) {
        const containerRect = containerRef.current.getBoundingClientRect();

        // Si el contenedor está completamente fuera de la vista, ocultamos la barra
        if (containerRect.bottom < 0 || containerRect.top > viewportHeight) {
          setIsBarVisible(false);
          // También reseteamos el paso a "Start" cuando el componente no es visible
          setActiveStep(0);
          return;
        } else {
          // Si el contenedor está visible, mostramos la barra
          setIsBarVisible(true);
        }

        // Comprobamos si estamos en la parte superior del contenedor
        // Si el tope del contenedor está cerca de la parte superior de la pantalla,
        // consideramos que estamos en "Start"
        if (
          containerRect.top > -200 &&
          containerRect.top < viewportHeight / 2
        ) {
          setActiveStep(0);
          return;
        }
      }

      // Primero, comprobamos si la tarjeta de inicio está en el centro de la pantalla
      if (startCardRef.current) {
        const startRect = startCardRef.current.getBoundingClientRect();
        const startMidpoint = startRect.top + startRect.height / 2;

        if (Math.abs(startMidpoint - viewportMidpoint) < 200) {
          setActiveStep(0); // Activa el paso "Start"
          return;
        }
      }

      // Luego, verifica todas las tarjetas de pasos
      let closestCard = -1;
      let closestDistance = Infinity;

      stepRefs.current.forEach((stepRef, index) => {
        if (!stepRef) return;

        const stepRect = stepRef.getBoundingClientRect();
        const stepMidpoint = stepRect.top + stepRect.height / 2;
        const distance = Math.abs(stepMidpoint - viewportMidpoint);

        // Si esta tarjeta está más cerca del centro de la pantalla que la anterior más cercana
        // y está al menos parcialmente visible en la pantalla
        if (
          distance < closestDistance &&
          stepRect.bottom > 0 &&
          stepRect.top < viewportHeight
        ) {
          closestDistance = distance;
          closestCard = index;
        }
      });

      // Si encontramos una tarjeta cercana, la activamos
      // IMPORTANTE: Sumamos 1 porque el índice 0 ya está ocupado por "Start"
      if (closestCard !== -1) {
        setActiveStep(closestCard + 1);
      } else {
        // Si no encontramos ninguna tarjeta cerca, volvemos a "Start"
        setActiveStep(0);
      }
    };

    // Aplicamos estilos iniciales y animaciones a todas las tarjetas
    if (startCardRef.current) {
      startCardRef.current.classList.add(
        "opacity-0",
        "translate-y-20",
        "transition-all",
        "duration-700"
      );

      setTimeout(() => {
        if (startCardRef.current) {
          startCardRef.current.classList.add("opacity-100", "translate-y-0");
          startCardRef.current.classList.remove("opacity-0", "translate-y-20");
        }
      }, 300);
    }

    // Agregamos el efecto de fade-in a cada tarjeta de paso
    stepRefs.current.forEach((stepRef) => {
      if (!stepRef) return;

      stepRef.classList.add(
        "opacity-0",
        "translate-y-20",
        "transition-all",
        "duration-700"
      );
    });

    // Usamos IntersectionObserver solo para animar la aparición de cada tarjeta cuando está en pantalla
    const observers: IntersectionObserver[] = [];

    stepRefs.current.forEach((stepRef) => {
      if (!stepRef) return;

      const observer = new IntersectionObserver(
        (entries) => {
          const [entry] = entries;

          if (entry.isIntersecting) {
            stepRef.classList.add("opacity-100", "translate-y-0");
            stepRef.classList.remove("opacity-0", "translate-y-20");
          } else {
            const stepRect = stepRef.getBoundingClientRect();
            if (stepRect.top > window.innerHeight) {
              stepRef.classList.add("opacity-0", "translate-y-20");
              stepRef.classList.remove("opacity-100", "translate-y-0");
            }
          }
        },
        {
          threshold: 0.15,
          rootMargin: "-5% 0px -5% 0px",
        }
      );

      observer.observe(stepRef);
      observers.push(observer);
    });

    // Agregamos el event listener para el scroll
    window.addEventListener("scroll", handleScroll);

    // Ejecutamos la función una vez al inicio para establecer el estado inicial
    handleScroll();

    // Cleanup function
    return () => {
      window.removeEventListener("scroll", handleScroll);

      observers.forEach((observer) => {
        observer.disconnect();
      });
    };
  }, []);

  return (
    <div className="w-full  font-sans relative pb-24" ref={containerRef}>
      {/* Sidebar with "Everything Kinda Starts Here" */}
      <div className="fixed left-6 top-1/4 h-64 hidden lg:block">
        <div className="border-l border-gray-200 h-full relative">
          <div className="absolute -left-2 top-0 h-16 w-16 flex items-start">
            <div className="text-gray-400 transform -rotate-90 origin-top-left translate-y-8 -translate-x-8 whitespace-nowrap">
              Everything Kinda Start Here
            </div>
          </div>
          <div className="absolute -left-8 bottom-0 text-gray-400 text-sm">
            SINCE 2010
          </div>
        </div>
      </div>

      {/* Navigation Progress Header */}
      <div
        className={`sticky top-0 z-10 bg-white pt-8 pb-4 transition-opacity duration-500 ${
          isBarVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center">
            {["Introducción", ...steps.map((step) => step.position)].map(
              (position, index) => {
                // Un punto está activo si su índice es <= al paso activo
                const isActive = index <= activeStep;

                return (
                  <div key={index} className="flex flex-col items-center">
                    <div
                      className={`h-2 w-2 rounded-full transition-colors duration-300 ${
                        isActive ? "bg-[#2563EB]" : "bg-gray-300"
                      }`}
                    ></div>
                    <span className="text-sm text-gray-500 mt-2">
                      {position}
                    </span>
                  </div>
                );
              }
            )}
          </div>
          <div className="w-full h-0.5 bg-gray-200 -mt-[9px] relative">
            <div
              className="absolute left-0 top-0 h-0.5 bg-[#2563EB] transition-all duration-500 ease-out"
              style={{
                // Calculamos el ancho de la barra de progreso basado en el paso activo
                width: `${(activeStep / (totalSegments - 1)) * 100}%`,
              }}
            ></div>
          </div>
        </div>
      </div>

      {/* Steps Content - Vertical Layout */}
      <div className="max-w-6xl mx-auto px-4 pt-24">
        <div className="space-y-72">
          {/* Start Card */}
          <div
            ref={startCardRef}
            className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl shadow-lg p-8 mb-20"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-6 text-[#2563EB]">
              Nuestra manera de trabajo
            </h1>
            <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto mb-8">
              Seguimos una metodología probada que garantiza{" "}
              <span className="font-bold text-[#2563EB]">calidad</span>,{" "}
              <span className="font-bold text-[#2563EB]">transparencia</span> y{" "}
              <span className="font-bold text-[#2563EB]">resultados</span>
              exitosos para cada proyecto.
            </p>
            <div className="flex justify-center">
              <div className="w-20 h-1 bg-[#2563EB] rounded-full"></div>
            </div>
          </div>

          {/* Step Cards */}
          {steps.map((step, index) => (
            <div
              key={index}
              ref={(el) => {
                stepRefs.current[index] = el;
              }}
              className="opacity-0 translate-y-20"
            >
              <div
                className={`grid grid-cols-12 gap-8 items-center ${
                  index % 2 === 0 ? "" : "flex-row-reverse"
                }`}
              >
                {/* Text Content */}
                <div
                  className={`col-span-12 md:col-span-5 ${
                    index % 2 === 0 ? "md:pr-8" : "md:pl-8 md:order-2"
                  }`}
                >
                  <div className="mb-6">
                    <h2 className="text-3xl font-bold text-[#2563EB]">
                      {step.title}
                    </h2>
                    <p className="text-lg text-[#2563EB]">{step.number}</p>
                  </div>
                  <p className="text-gray-600">{step.description}</p>
                </div>

                {/* Image */}
                <div
                  className={`col-span-12 md:col-span-7 ${
                    index % 2 === 1 ? "md:order-1" : ""
                  }`}
                >
                  <div className="relative">
                    <img
                      src={step.image}
                      alt={step.title}
                      className="w-full rounded-md object-cover shadow-lg h-64 md:h-80"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Logo at bottom right */}
    </div>
  );
};

export default Steps;

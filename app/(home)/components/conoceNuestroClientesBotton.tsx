"use client";
import Image from "next/image";
import { useRef, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function ClientLogosSection() {
  const router = useRouter();

  const logoRowOneRef = useRef<HTMLDivElement>(null);
  const logoRowTwoRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleClientesClick = () => {
    router.push("/clientes");
  };

  const logos = Array.from(
    { length: 10 },
    (_, i) => `/logos_clientes/${i + 1}.jpeg`
  );

  useEffect(() => {
    const loadAnimations = async () => {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");

      if (typeof window !== "undefined") {
        gsap.registerPlugin(ScrollTrigger);
      }

      if (
        !logoRowOneRef.current ||
        !logoRowTwoRef.current ||
        !textRef.current ||
        !buttonRef.current
      )
        return;

      ScrollTrigger.create({
        trigger: logoRowOneRef.current,
        start: "top bottom-=100",
        onEnter: () => {
          gsap.fromTo(
            logoRowOneRef.current,
            { x: -50, opacity: 0 },
            { x: 0, opacity: 1, duration: 0.8, stagger: 0.1 }
          );
          gsap.fromTo(
            logoRowTwoRef.current,
            { x: -50, opacity: 0 },
            { x: 0, opacity: 1, duration: 0.8, stagger: 0.1, delay: 0.3 }
          );
          gsap.fromTo(
            textRef.current,
            { y: 20, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.8, delay: 0.5 }
          );
          gsap.fromTo(
            buttonRef.current,
            { y: 20, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.8, delay: 0.7 }
          );
        },
        once: true,
      });
    };

    loadAnimations();

    return () => {
      import("gsap/ScrollTrigger").then(({ ScrollTrigger }) => {
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      });
    };
  }, []);

  return (
    <section className="bg-gray-50 rounded-xl py-6 px-4 sm:py-8 md:py-10 md:px-6 w-full max-w-4xl mx-auto mt-6 sm:mt-8 md:mt-16 shadow-sm">
      <div className="flex flex-col xl:flex-row items-center xl:items-start xl:justify-between gap-6">
        <div className="w-full xl:w-auto">
          <div
            ref={logoRowOneRef}
            className="flex justify-center xl:justify-start gap-1 sm:gap-2 xl:-space-x-3 xl:gap-0 flex-wrap xl:flex-nowrap w-full"
          >
            {logos.slice(0, 5).map((src, i) => (
              <div key={i} className="flex-shrink-0">
                <Image
                  src={src}
                  alt={`Logo ${i + 1}`}
                  width={40}
                  height={40}
                  className="rounded-full border border-gray-200 bg-white p-1 w-12 h-12 sm:w-14 sm:h-14 xl:w-12 xl:h-12 object-cover"
                  loading={i > 1 ? "lazy" : "eager"}
                />
              </div>
            ))}
          </div>

          <div
            ref={logoRowTwoRef}
            className="flex justify-center xl:justify-start gap-1 sm:gap-2 xl:-space-x-3 xl:gap-0 flex-wrap xl:flex-nowrap w-full mt-2 xl:ml-6"
          >
            {logos.slice(5).map((src, i) => (
              <div key={i + 5} className="flex-shrink-0">
                <Image
                  src={src}
                  alt={`Logo ${i + 6}`}
                  width={40}
                  height={40}
                  className="rounded-full border border-gray-200 bg-white p-1 w-12 h-12 sm:w-14 sm:h-14 xl:w-12 xl:h-12 object-cover"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="text-center xl:text-left w-full xl:w-auto xl:max-w-sm mt-6 xl:mt-0">
          <p
            ref={textRef}
            className="text-gray-800 font-medium text-sm sm:text-base mb-4 ml-4 sm:mb-3"
          >
            Más de <span className="font-bold">400</span>{" "}
            <span className="font-bold">empresas</span> de todo el pais
            confiaron en nosotros para digitalizar sus{" "}
            <span className="font-bold"> negocios</span>.
          </p>
          <button
            ref={buttonRef}
            onClick={handleClientesClick}
            className="bg-gray-800 rounded-2xl text-white px-4 py-2 hover:bg-gray-700 transition-all cursor-pointer text-sm sm:text-base block mx-auto xl:ml-12"
          >
            Conocé a nuestros clientes
          </button>
        </div>
      </div>
    </section>
  );
}

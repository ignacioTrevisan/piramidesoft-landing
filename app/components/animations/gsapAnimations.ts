"use client";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";
import { useEffect } from "react";
// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, TextPlugin);
}
// Timeline progress animation
export const useTimelineProgressAnimation = () => {
  useEffect(() => {
    const progressLine = document.querySelector(".progress-line");
    if (!progressLine) return;
    // Crear una timeline que actualiza el progreso basado en el scroll
    ScrollTrigger.create({
      trigger: ".process-step",
      start: "top 80%",
      end: "bottom 20%",
      scrub: 0.5, // Suavizado del efecto
      onUpdate: (self) => {
        // Actualizar el ancho de la línea de progreso basado en el progreso del scroll
        gsap.to(progressLine, {
          width: `${self.progress * 100}%`,
          duration: 0.1,
          ease: "none",
        });
      },
    });
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);
};
// Hero section animations
export const useHeroAnimation = (
  titleRef: React.RefObject<HTMLHeadingElement>,
  subtitleRef: React.RefObject<HTMLHeadingElement>,
  textRef: React.RefObject<HTMLParagraphElement>,
  imageRef: React.RefObject<HTMLDivElement>
) => {
  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power2.out" } });
    tl.fromTo(
      titleRef.current,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6 }
    )
      .fromTo(
        subtitleRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6 },
        "-=0.3"
      )
      .fromTo(
        textRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6 },
        "-=0.3"
      )
      .fromTo(
        imageRef.current,
        { x: 30, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.8, ease: "power1.out" },
        "-=0.4"
      );
    return () => {
      tl.kill();
    };
  }, [titleRef, subtitleRef, textRef, imageRef]);
};
// Navbar animation
export const useNavbarAnimation = (
  navbarRef: React.RefObject<HTMLDivElement>
) => {
  useEffect(() => {
    const navbar = navbarRef.current;
    if (!navbar) return;
    const showAnim = gsap
      .from(navbar, {
        yPercent: -100,
        paused: true,
        duration: 0.2,
      })
      .progress(1);
    ScrollTrigger.create({
      start: "top top",
      end: "max",
      onUpdate: (self) => {
        // Fix: Replace ternary with if-else statement
        if (self.direction === -1) {
          showAnim.play();
        } else {
          showAnim.reverse();
        }
      },
    });
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [navbarRef]);
};
// Client logos animation
export const useClientLogosAnimation = (
  logoRowOneRef: React.RefObject<HTMLDivElement>,
  logoRowTwoRef: React.RefObject<HTMLDivElement>,
  textRef: React.RefObject<HTMLParagraphElement>,
  buttonRef: React.RefObject<HTMLButtonElement>
) => {
  useEffect(() => {
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
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [logoRowOneRef, logoRowTwoRef, textRef, buttonRef]);
};
// Text highlight animation
export const useTextHighlightAnimation = (
  elementsRef: React.RefObject<HTMLSpanElement[]>
) => {
  useEffect(() => {
    if (!elementsRef.current || elementsRef.current.length === 0) return;
    elementsRef.current.forEach((element, index) => {
      gsap.to(element, {
        scrollTrigger: {
          trigger: element,
          start: "top bottom-=50",
          toggleActions: "play none none reverse",
        },
        color: "#2563EB",
        fontWeight: "bold",
        duration: 0.4,
        delay: index * 0.1,
        ease: "power1.out",
      });
    });
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [elementsRef]);
};
// Hover animation for navbar items
export const useNavItemHoverAnimation = (
  itemRef: React.RefObject<HTMLDivElement>
) => {
  useEffect(() => {
    const element = itemRef.current;
    if (!element) return;
    const handleMouseEnter = () => {
      gsap.to(element, {
        y: -2,
        duration: 0.2,
        ease: "power1.out",
      });
    };
    const handleMouseLeave = () => {
      gsap.to(element, {
        y: 0,
        duration: 0.2,
        ease: "power1.out",
      });
    };
    element.addEventListener("mouseenter", handleMouseEnter);
    element.addEventListener("mouseleave", handleMouseLeave);
    return () => {
      element.removeEventListener("mouseenter", handleMouseEnter);
      element.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [itemRef]);
};
// Button hover animation
export const useButtonHoverAnimation = (
  buttonRef: React.RefObject<HTMLButtonElement>
) => {
  useEffect(() => {
    const button = buttonRef.current;
    if (!button) return;
    const handleMouseEnter = () => {
      gsap.to(button, {
        scale: 1.03,
        duration: 0.2,
        ease: "power1.out",
      });
    };
    const handleMouseLeave = () => {
      gsap.to(button, {
        scale: 1,
        duration: 0.2,
        ease: "power1.out",
      });
    };
    button.addEventListener("mouseenter", handleMouseEnter);
    button.addEventListener("mouseleave", handleMouseLeave);
    return () => {
      button.removeEventListener("mouseenter", handleMouseEnter);
      button.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [buttonRef]);
};

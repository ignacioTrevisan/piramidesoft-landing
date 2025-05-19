"use client";

import Image from "next/image";
import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";

interface Props {
  name: string;
  text: string;
  image: string;
  Roles: string[];
}

export const NosotrosCard = ({ name, text, image, Roles }: Props) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const nameRef = useRef<HTMLHeadingElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!cardRef.current) return;

    // Add hover animation to card
    const card = cardRef.current;

    card.addEventListener("mouseenter", () => {
      gsap.to(card, {
        y: -5,
        boxShadow: "0 15px 20px -5px rgba(0, 0, 0, 0.1), 0 8px 8px -5px rgba(0, 0, 0, 0.04)",
        duration: 0.2,
        ease: "power1.out",
      });

      // If we have an image, animate it too
      if (imageRef.current) {
        gsap.to(imageRef.current, {
          scale: 1.03,
          duration: 0.2,
          ease: "power1.out",
        });
      }

      // If we have a button, animate it too
      if (buttonRef.current) {
        gsap.to(buttonRef.current, {
          backgroundColor: "#1E40AF",
          scale: 1.01,
          duration: 0.2,
          ease: "power1.out",
        });
      }
    });

    card.addEventListener("mouseleave", () => {
      gsap.to(card, {
        y: 0,
        boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.05)",
        duration: 0.2,
        ease: "power1.out",
      });

      // Reset image
      if (imageRef.current) {
        gsap.to(imageRef.current, {
          scale: 1,
          duration: 0.2,
          ease: "power1.out",
        });
      }

      // Reset button
      if (buttonRef.current) {
        gsap.to(buttonRef.current, {
          backgroundColor: "#2563EB",
          scale: 1,
          duration: 0.2,
          ease: "power1.out",
        });
      }
    });

    return () => {
      card.removeEventListener("mouseenter", () => {});
      card.removeEventListener("mouseleave", () => {});
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className="nosotros-card w-full flex flex-col h-full bg-white rounded-xl mt-3 p-8 shadow-md relative overflow-hidden transition-all duration-200"
    >
      {/* Background accent */}
      <div className="absolute top-0 right-0 h-16 w-1/4 bg-blue-50 rotate-45 transform origin-top-right -translate-y-6 translate-x-2"></div>
      
      <div className="flex-grow flex flex-col relative z-10">
        <div
          ref={imageRef}
          className="relative mx-auto mb-4 transition-all duration-200"
        >
          <Image
            src={image}
            alt={`${name} image`}
            width={160}
            height={160}
            className="rounded-full object-cover border-2 border-gray-200 mx-auto"
          />
          <div className="absolute -inset-0.5 rounded-full blur-sm bg-gradient-to-r from-blue-200 to-indigo-200 opacity-30 -z-10"></div>
        </div>
        
        <h1
          ref={nameRef}
          className="text-2xl md:text-3xl text-center font-bold text-[#2563EB]"
        >
          {name}
        </h1>
        
        <p className="text-center text-gray-600 text-base mt-3 mb-5">{text}</p>
        
        <div className="flex flex-wrap justify-center gap-1 mt-2 mb-4">
          {Roles.map((role, index) => (
            <span 
              key={index}
              className="bg-blue-50 text-[#2563EB] text-sm px-3 py-1 rounded-md"
            >
              {role}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-auto pt-3">
        <button
          ref={buttonRef}
          className="bg-[#2563EB] hover:bg-[#1E40AF] text-white py-2 px-4 rounded-lg w-full transition-all duration-200 text-base font-medium"
        >
          Ver perfil
        </button>
      </div>
    </div>
  );
};
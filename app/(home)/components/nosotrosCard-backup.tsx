"use client";

import Image from "next/image";
import React from "react";

interface Props {
  name: string;
  text: string;
  image: string;
  Roles: string[];
}

export const NosotrosCard = ({ name, text, image, Roles }: Props) => {
  return (
    <div className="nosotros-card w-full flex flex-col h-full bg-white rounded-xl mt-3 p-8 shadow-md relative overflow-hidden transition-all duration-200 hover:-translate-y-1 hover:shadow-lg">
      {/* Background accent */}
      <div className="absolute top-0 right-0 h-16 w-1/4 bg-blue-50 rotate-45 transform origin-top-right -translate-y-6 translate-x-2"></div>

      <div className="flex-grow flex flex-col relative z-10">
        <div className="relative mx-auto mb-4 transition-all duration-200">
          <Image
            src={image}
            alt={`${name} image`}
            width={160}
            height={160}
            className="rounded-full object-center border-2 border-gray-200 mx-auto hover:scale-105 transition-transform duration-200"
          />
          <div className="absolute -inset-0.5 rounded-full blur-sm bg-gradient-to-r from-blue-200 to-indigo-200 opacity-30 -z-10"></div>
        </div>

        <h1 className="text-2xl md:text-3xl text-center font-bold text-[#2563EB]">
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
        <button className="bg-[#2563EB] hover:bg-[#1E40AF] text-white py-2 px-4 rounded-lg w-full transition-all duration-200 text-base font-medium hover:scale-105">
          Ver perfil
        </button>
      </div>
    </div>
  );
};

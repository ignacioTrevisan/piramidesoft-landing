"use client";
import React, { useState } from "react";

interface Props {
  imagenes: string[];
  titulo: string;
}
export const ImagesSelected = ({ imagenes, titulo }: Props) => {
  const [imagenSeleccionada, setImagenSeleccionada] = useState(0);
  const cambiarImagen = (index: number) => {
    setImagenSeleccionada(index);
  };
  return (
    <>
      <div className="relative h-80 md:h-96 overflow-hidden rounded-xl mb-4 border border-gray-200 shadow-md">
        <img
          src={imagenes[imagenSeleccionada]}
          alt={`${titulo} - imagen ${imagenSeleccionada + 1}`}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
      </div>

      <div className="flex justify-center space-x-4">
        {imagenes.map((imagen, index) => (
          <div
            key={index}
            className={`relative h-20 w-20 overflow-hidden rounded-lg cursor-pointer border-2 transition-all ${
              index === imagenSeleccionada
                ? "border-blue-600"
                : "border-gray-200"
            }`}
            onClick={() => cambiarImagen(index)}
          >
            <img
              src={imagen}
              alt={`Miniatura ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </>
  );
};

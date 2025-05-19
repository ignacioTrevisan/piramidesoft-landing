import React from "react";
import { NosotrosCard } from "./components/nosotrosCard";

export const SobreNosotros = () => {
  const nosotros = [
    {
      name: "Danilo Ariel Vadino",
      text: "Magister en Sistemas de Informacion. Licenciado en Sistemas de informacion. Analista de Sistemas. Analista programador",
      image: "/Danilo.jpeg",
      Roles: [
        "Director",
        "Auditor/Perito",
        "Investigador",
        " Analisis/Diseño",
        "Desarrollo",
      ],
    },
    {
      name: " Gonzalo Rene Jaquet",
      text: "Licenciado en sistemas informáticos. Analista de sistemas informaticos",
      image: "/Gonzalo.jpeg",
      Roles: ["Desarrollo/programacion(Desktop, WEb y Movil)"],
    },
    {
      name: " Ariel Enrique Vadino",
      text: "Estudiante de Sistemas",
      image: "/Ariel.jpeg",
      Roles: ["Servicio Técnico PC", "Redes"],
    },
    {
      name: " Ignacio Gabriel Trevisan",
      text: "Tecnico en computacion. Tecnico superior en desarrollo de software",
      image: "/Nacho.jpeg",
      Roles: ["Desarrollo/programacion(Desktop, WEb y Movil)"],
    },
  ];
  return (
    <div className="flex flex-col w-full h-auto mt-20 sm:mt-2 md:mt-14 lg:mt-16 xl:mt-0">
      <div className="w-full flex justify-between">
        <hr className="w-2/5" />
        <hr className="w-2/5" />
      </div>
      <h1 className="lg:text-8xl  sm:text-6xl text-2xl self-center mt-10 mb-20">
        ¿Quiénes somos?
      </h1>
      <div className="grid sm:grid-cols-2 grid-cols-1 gap-5">
        {nosotros.map((n) => (
          <NosotrosCard {...n} key={n.name} />
        ))}
      </div>
    </div>
  );
};

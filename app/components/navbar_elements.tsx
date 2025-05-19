"use client";
import { useState } from "react";
import styles from "./navbar.module.css";

interface elementos_navbar {
  titulo: string;
  isFocus: boolean;
  url: string;
}
export const Navbar_elements = () => {
  const elementos: elementos_navbar[] = [
    { titulo: "Inicio", isFocus: true, url: "/" },
    { titulo: "Blogs", isFocus: true, url: "/blog" },
    { titulo: "Productos", isFocus: true, url: "/products" },
  ];
  const [elementHovered, setElementHovered] = useState("");
  return (
    <div className="flex h-full gap-5 items-center">
      {elementos.map((e) => (
        <div className="w-auto justify-center relative" key={e.titulo}>
          <div
            className="cursor-pointer text-center"
            onMouseEnter={() => setElementHovered(e.titulo)}
            onMouseLeave={() => setElementHovered("")}
          >
            {e.titulo}
          </div>
          <div className={`absolute w-full h-0.5 bottom-0 flex justify-center`}>
            <div
              className={`bg-gray-800 ${
                elementHovered === e.titulo ? "w-full" : "w-0"
              } ${styles.hr} transition-all duration-300 h-full`}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

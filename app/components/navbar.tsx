"use client";
import { useState } from "react";
import Image from "next/image";
import styles from "./navbar.module.css";
import { Navbar_elements } from "./navbar_elements";

const MobileNavbarElements = () => {
  const elementos = [
    { titulo: "Inicio", url: "/" },
    { titulo: "Blogs", url: "/blog" },
    { titulo: "Productos", url: "/products" },
  ];
  
  return (
    <div className="flex flex-col gap-4">
      {elementos.map((e) => (
        <div 
          key={e.titulo}
          className="cursor-pointer py-2 border-b border-gray-100 text-gray-800 hover:text-gray-600"
        >
          {e.titulo}
        </div>
      ))}
    </div>
  );
};

export const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <div
      className={`w-full fixed flex items-center justify-between md:justify-around top-0 py-3 px-4 md:px-8 ${styles.navbar} bg-gray-200 bg-opacity-80 backdrop-blur-sm z-50`}
    >
      <Image
        src={"/logo_sin_fondo.png"}
        height={50}
        width={50}
        alt="logo de piramide soft"
        className="cursor-pointer"
      />
      <div className="hidden md:block">
        <Navbar_elements />
      </div>
      <div className="block md:hidden">
        <button className="p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
        {mobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-white shadow-md py-4 px-4">
            <MobileNavbarElements />
            <button className="bg-gray-800 hover:bg-gray-500 transition-all text-white p-2 px-5 w-full rounded-2xl cursor-pointer mt-4">
              Ingresar
            </button>
          </div>
        )}
      </div>
      <button className="hidden md:block bg-gray-800 hover:bg-gray-500 transition-all text-white p-2 px-5 w-[100px] rounded-2xl cursor-pointer">
        Ingresar
      </button>
    </div>
  );
};

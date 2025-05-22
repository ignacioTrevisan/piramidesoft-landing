"use client";
import { useAdmin } from "../context/AdminContext";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import Image from "next/image";

interface SidebarItemProps {
  icon: React.ReactNode;
  label: string;
  section: string;
  isActive: boolean;
  onClick: () => void;
}

const SidebarItem: React.FC<SidebarItemProps> = ({
  icon,
  label,
  section,
  isActive,
  onClick,
}) => {
  const itemRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const element = itemRef.current;
    if (!element) return;

    // Limpiar animaciones previas
    gsap.killTweensOf(element);

    const handleMouseEnter = () => {
      gsap.to(element, {
        x: 4,
        backgroundColor: isActive ? "#2563EB" : "#f3f4f6",
        duration: 0.2,
        ease: "power1.out",
      });
    };

    const handleMouseLeave = () => {
      gsap.to(element, {
        x: 0,
        backgroundColor: isActive ? "#2563EB" : "transparent",
        duration: 0.2,
        ease: "power1.out",
      });
    };

    element.addEventListener("mouseenter", handleMouseEnter);
    element.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      if (element) {
        element.removeEventListener("mouseenter", handleMouseEnter);
        element.removeEventListener("mouseleave", handleMouseLeave);
      }
      gsap.killTweensOf(element);
    };
  }, [mounted, isActive]);

  return (
    <div
      ref={itemRef}
      onClick={onClick}
      className={`flex items-center space-x-3 p-3 rounded-lg cursor-pointer transition-all duration-200 ${
        isActive
          ? "bg-blue-600 text-white shadow-md"
          : "text-gray-700 hover:bg-gray-100"
      }`}
    >
      <div className="flex-shrink-0">{icon}</div>
      <span className="font-medium">{label}</span>
    </div>
  );
};

export const Sidebar = () => {
  const { activeSection, setActiveSection } = useAdmin();
  const sidebarRef = useRef<HTMLDivElement>(null);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted || !sidebarRef.current) return;

    // Limpiar animaciones previas
    gsap.killTweensOf(sidebarRef.current);

    // Establecer estado inicial y animar
    gsap.fromTo(
      sidebarRef.current,
      { x: -100, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.5, ease: "power2.out" }
    );

    return () => {
      if (sidebarRef.current) {
        gsap.killTweensOf(sidebarRef.current);
      }
    };
  }, [mounted]);

  const menuItems = [
    {
      section: "dashboard",
      label: "Dashboard",
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
          />
        </svg>
      ),
    },
    {
      section: "productos",
      label: "Productos",
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
          />
        </svg>
      ),
    },
    {
      section: "blogs",
      label: "Blogs",
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
          />
        </svg>
      ),
    },
    {
      section: "consultas",
      label: "Consultas",
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
          />
        </svg>
      ),
    },
  ];

  return (
    <>
      {/* Mobile menu button */}
      <div className="md:hidden fixed top-4 left-4 z-50">
        <button
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          className="p-2 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>

      {/* Overlay for mobile */}
      {isMobileOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity"
          onClick={() => setIsMobileOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        ref={sidebarRef}
        className={`sidebar fixed left-0 top-0 h-full w-64 bg-white shadow-xl transform transition-transform duration-300 z-50 ${
          isMobileOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0`}
        style={{ fontSize: '14px' }}
      >
        <div className="p-6">
          {/* Logo */}
          <div className="flex items-center space-x-3 mb-8">
            <Image
              src="/logo_sin_fondo.png"
              height={40}
              width={40}
              alt="Piramide Soft Logo"
              className="flex-shrink-0"
            />
            <div>
              <h1 className="text-xl font-bold text-gray-800">Admin Panel</h1>
              <p className="text-sm text-gray-500">Piramide Soft</p>
            </div>
          </div>

          {/* Menu Items */}
          <nav className="space-y-2">
            {menuItems.map((item) => (
              <SidebarItem
                key={item.section}
                icon={item.icon}
                label={item.label}
                section={item.section}
                isActive={activeSection === item.section}
                onClick={() => {
                  setActiveSection(item.section);
                  setIsMobileOpen(false);
                }}
              />
            ))}
          </nav>

          {/* Logout */}
          <div className="absolute bottom-6 left-6 right-6">
            <button className="w-full flex items-center space-x-3 p-3 text-red-600 hover:bg-red-50 rounded-lg transition-colors duration-200">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                />
              </svg>
              <span className="font-medium">Cerrar Sesión</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

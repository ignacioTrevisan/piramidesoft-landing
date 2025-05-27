"use client";
import { useAdmin } from "../context/AdminContext";
import { useEffect, useState } from "react";
import Image from "next/image";
import { UserPayload } from "@/app/lib/auth/jwt";
import { logoutUser } from "@/app/action/session/logoutUser";
import { useRouter } from "next/navigation";

interface SidebarProps {
  user: UserPayload;
}

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
  isActive,
  onClick,
}) => {
  return (
    <div
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

export const Sidebar: React.FC<SidebarProps> = ({ user }) => {
  const { activeSection, setActiveSection } = useAdmin();
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isLoggingOut, setIsLoggingOut] = useState(false);
  const router = useRouter();

  // Efecto para manejar el body scroll cuando el sidebar está abierto
  useEffect(() => {
    if (isMobileOpen) {
      document.body.classList.add("sidebar-mobile-open");
    } else {
      document.body.classList.remove("sidebar-mobile-open");
    }

    // Cleanup
    return () => {
      document.body.classList.remove("sidebar-mobile-open");
    };
  }, [isMobileOpen]);

  // Manejar clicks del botón hamburguesa
  const toggleSidebar = () => {
    setIsMobileOpen(!isMobileOpen);
  };

  // Cerrar sidebar cuando se selecciona una sección
  const handleSectionClick = (section: string) => {
    setActiveSection(section);
    setIsMobileOpen(false);
  };

  // Cerrar sidebar con overlay
  const closeSidebar = () => {
    setIsMobileOpen(false);
  };

  // Manejar logout
  const handleLogout = async () => {
    setIsLoggingOut(true);
    try {
      const result = await logoutUser();
      if (result.ok) {
        router.push("/auth/login");
        router.refresh();
      }
    } catch (error) {
      console.error("Error al cerrar sesión:", error);
    } finally {
      setIsLoggingOut(false);
    }
  };

  // Manejar tecla ESC
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsMobileOpen(false);
      }
    };

    if (isMobileOpen) {
      document.addEventListener("keydown", handleEsc);
    }

    return () => {
      document.removeEventListener("keydown", handleEsc);
    };
  }, [isMobileOpen]);

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
      {/* Botón hamburguesa para móvil */}
      <button
        onClick={toggleSidebar}
        className="mobile-menu-btn md:hidden"
        aria-label="Toggle menu"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          {isMobileOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          )}
        </svg>
      </button>

      {/* Overlay para móvil */}
      {isMobileOpen && (
        <div className="mobile-overlay md:hidden" onClick={closeSidebar} />
      )}

      {/* Sidebar */}
      <div className={`admin-sidebar ${isMobileOpen ? "open" : "closed"}`}>
        <div className="p-6 h-full flex flex-col">
          {/* Logo */}
          <div className="flex items-center space-x-3 mb-8">
            <Image
              src="/logo_2.png"
              height={40}
              width={40}
              alt="Piramide Soft Logo"
              className="flex-shrink-0"
            />
            <div>
              <h1
                className="text-xl font-bold text-gray-800"
                style={{ fontSize: "18px" }}
              >
                Admin Panel
              </h1>
              <p className="text-sm text-gray-500" style={{ fontSize: "12px" }}>
                Piramide Soft
              </p>
            </div>
          </div>

          {/* User Info */}
          <div className="mb-6 p-3 bg-gray-100 rounded-lg">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-medium text-sm">
                {user.name.charAt(0).toUpperCase()}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900 truncate">
                  {user.name}
                </p>
                <p className="text-xs text-gray-500 truncate">{user.email}</p>
                <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800 mt-1">
                  {user.role}
                </span>
              </div>
            </div>
          </div>

          {/* Menu Items */}
          <nav className="space-y-2 flex-1">
            {menuItems.map((item) => (
              <SidebarItem
                key={item.section}
                icon={item.icon}
                label={item.label}
                section={item.section}
                isActive={activeSection === item.section}
                onClick={() => handleSectionClick(item.section)}
              />
            ))}
          </nav>

          {/* Logout */}
          <div className="pt-4 border-t border-gray-200">
            <button
              onClick={handleLogout}
              disabled={isLoggingOut}
              className="w-full flex items-center space-x-3 p-3 text-red-600 hover:bg-red-50 rounded-lg transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoggingOut ? (
                <svg
                  className="animate-spin w-5 h-5"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
              ) : (
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
              )}
              <span className="font-medium" style={{ fontSize: "14px" }}>
                {isLoggingOut ? "Cerrando..." : "Cerrar Sesión"}
              </span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

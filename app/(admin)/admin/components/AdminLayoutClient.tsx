"use client";
import { Sidebar } from "./Sidebar";
import { AdminProvider } from "../context/AdminContext";
import { UserPayload } from "@/app/lib/auth/jwt";

interface AdminLayoutClientProps {
  children: React.ReactNode;
  user: UserPayload;
}

export const AdminLayoutClient: React.FC<AdminLayoutClientProps> = ({
  children,
  user,
}) => {
  return (
    <div className="admin-container">
      <AdminProvider>
        <div className="flex min-h-screen bg-gray-50">
          <Sidebar user={user} />
          {/*
            NOTA: NO aplicar GSAP/transform/animaciones que apliquen `transform`
            sobre <main>. Cualquier transform en main lo convierte en containing
            block y rompe position:fixed de los modales hijos (Productos,
            Blogs, Tipos, Categorias, Usuarios, Consultas).
            Si querés animar la entrada, usá la clase admin-main-fade-in
            definida con @keyframes en admin.css (sólo opacity, sin transform).
          */}
          <main className="admin-main-content admin-main-fade-in flex-1 min-h-screen">
            <div className="max-w-7xl mx-auto">{children}</div>
          </main>
        </div>
      </AdminProvider>
    </div>
  );
};

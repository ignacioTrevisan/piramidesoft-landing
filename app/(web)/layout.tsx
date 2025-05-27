import "../(home)/globals.css";
import { Navbar } from "./components/navbar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portal del Cliente",
  description: "Accede a tu portal personalizado de Piramide Soft. Gestiona tu perfil, consulta tus proyectos y manténte conectado con nuestros servicios.",
  keywords: ["portal cliente", "perfil usuario", "proyectos", "gestión cuenta"],
  openGraph: {
    title: "Portal del Cliente - Piramide Soft",
    description: "Accede a tu portal personalizado de Piramide Soft.",
    images: ["/logo_2.png"],
  },
};

export default function WebLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        {children}
      </main>
    </>
  );
}

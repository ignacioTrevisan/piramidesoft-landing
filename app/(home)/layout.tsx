import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "./components/navbar";
import { initializeMonthlyStats } from "../action/stats/initializeMonthlyStats";
import { VisitorTracker } from "../components/VisitorTracker";
import { AuthProvider } from "../lib/auth/AuthContext";

export const metadata: Metadata = {
  title:
    "Desarrollo de Software, Sistemas y Páginas Web en Entre Ríos | Piramide Soft",
  description:
    "Empresa de desarrollo de software en Entre Ríos: sistemas de gestión, páginas web, e-commerce, CRM, facturación electrónica y aplicaciones móviles para empresas de Colón, Villaguay, Paraná, Concordia, Concepción del Uruguay y Gualeguaychú. +30 años de experiencia.",
  alternates: { canonical: "/" },
};

export default async function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Inicializar stats del mes actual
  await initializeMonthlyStats();

  return (
    <AuthProvider>
      <Navbar />
      <VisitorTracker>
        <main>{children}</main>
      </VisitorTracker>
    </AuthProvider>
  );
}

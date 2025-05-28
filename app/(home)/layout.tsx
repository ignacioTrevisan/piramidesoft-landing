import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "./components/navbar";
import { initializeMonthlyStats } from "../action/stats/initializeMonthlyStats";
import { VisitorTracker } from "../components/VisitorTracker";
import { AuthProvider } from "../lib/auth/AuthContext";

export const metadata: Metadata = {
  title: "Piramide Soft - Soluciones Tecnológicas",
  description: "Desarrollamos soluciones tecnológicas innovadoras para tu negocio",
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
        <main>
          {children}
        </main>
      </VisitorTracker>
    </AuthProvider>
  );
}

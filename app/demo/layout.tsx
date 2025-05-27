import type { Metadata } from "next";
import "../(home)/globals.css";

export const metadata: Metadata = {
  title: "Demos",
  description: "Demos y pruebas de funcionalidades de Piramide Soft. Explora nuestras herramientas y componentes en acción.",
  keywords: ["demos", "pruebas", "funcionalidades", "herramientas", "componentes"],
  openGraph: {
    title: "Demos - Piramide Soft",
    description: "Demos y pruebas de funcionalidades de Piramide Soft.",
    images: ["/logo_2.png"],
  },
};

export default function DemoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      {children}
    </div>
  );
}

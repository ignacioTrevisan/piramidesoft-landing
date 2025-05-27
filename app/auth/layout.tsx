import "../(home)/globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Autenticación",
  description: "Inicia sesión o crea tu cuenta en Piramide Soft. Accede a nuestros servicios y gestiona tu perfil de usuario de forma segura.",
  keywords: ["login", "registro", "autenticación", "cuenta de usuario"],
  openGraph: {
    title: "Autenticación - Piramide Soft",
    description: "Inicia sesión o crea tu cuenta en Piramide Soft.",
    images: ["/logo_2.png"],
  },
};

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="antialiased">{children}</div>
  );
}

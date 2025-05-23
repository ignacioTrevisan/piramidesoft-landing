import { CheckSession } from "@/app/action/session/checkSession";
import { redirect } from "next/navigation";
import { AdminLayoutClient } from "./components/AdminLayoutClient";
import "../../(home)/globals.css";
import "./styles/admin.css";
import "./styles/admin-override.css";
import "./styles/sidebar-mobile.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const IsSessionActive = CheckSession();

  if (!IsSessionActive) {
    redirect("/auth/login");
  }

  return (
    <html lang="es">
      <head>
        <title>Admin Panel - Piramide Soft</title>
        <meta name="description" content="Panel administrativo Piramide Soft" />
      </head>
      <body className="antialiased overflow-x-hidden bg-gray-50">
        <AdminLayoutClient>{children}</AdminLayoutClient>
      </body>
    </html>
  );
}

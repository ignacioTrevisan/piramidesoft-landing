import { checkAdminSession } from "@/app/action/session/checkSession";
import { redirect } from "next/navigation";
import { AdminLayoutClient } from "./components/AdminLayoutClient";
import "../../(home)/globals.css";
import "./styles/admin.css";
import "./styles/admin-override.css";
import "./styles/sidebar-mobile.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin Panel - Piramide Soft",
  description: "Panel administrativo Piramide Soft",
};

export default async function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const user = await checkAdminSession();

  if (!user) {
    redirect("/auth/login");
  }

  return (
    <div className="admin-layout bg-gray-50 min-h-screen">
      <AdminLayoutClient user={user}>{children}</AdminLayoutClient>
    </div>
  );
}

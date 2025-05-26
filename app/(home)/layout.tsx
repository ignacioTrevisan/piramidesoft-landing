import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "./components/navbar";
import { verifyStats } from "../action/stats/verifyStats";

export const metadata: Metadata = {
  title: "Piramide Soft - Soluciones Tecnológicas",
  description: "Desarrollamos soluciones tecnológicas innovadoras para tu negocio",
};

export default async function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const now = new Date();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const year = now.getFullYear();
  await verifyStats(`${month}/${year}`);

  return (
    <>
      <Navbar />
      <main>
        {children}
      </main>
    </>
  );
}

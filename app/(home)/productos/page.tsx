import { Products } from "../components/products";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Productos y Servicios",
  description: "Descubre nuestros productos y servicios tecnológicos: sistemas CRM, plataformas e-commerce, aplicaciones móviles, gestión de stock y facturación electrónica. Soluciones personalizadas para tu empresa.",
  keywords: ["CRM", "e-commerce", "aplicaciones móviles", "gestión de stock", "facturación electrónica", "sistemas de gestión"],
  openGraph: {
    title: "Productos y Servicios - Piramide Soft",
    description: "Descubre nuestros productos y servicios tecnológicos: sistemas CRM, plataformas e-commerce, aplicaciones móviles y más.",
    images: ["/logo_2.png"],
  },
};

export default function ProductsPage() {
  return <Products />;
}

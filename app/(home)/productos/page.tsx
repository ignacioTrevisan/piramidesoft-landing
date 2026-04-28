import { Products } from "../components/products";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Productos y Servicios de Software en Entre Ríos",
  description:
    "Sistemas de gestión, CRM, e-commerce, facturación electrónica AFIP, gestión de stock, punto de venta y aplicaciones móviles desarrollados a medida para empresas de Entre Ríos y toda Argentina.",
  keywords: [
    "sistema de gestión Entre Ríos",
    "CRM Argentina",
    "e-commerce Entre Ríos",
    "facturación electrónica AFIP",
    "punto de venta POS",
    "gestión de stock",
    "aplicaciones móviles Entre Ríos",
    "software a medida Entre Ríos",
    "software Colón Entre Ríos",
    "software Paraná",
    "software Concordia",
  ],
  alternates: { canonical: "/productos" },
  openGraph: {
    title: "Productos y Servicios de Software en Entre Ríos | Piramide Soft",
    description:
      "Sistemas, páginas web, apps móviles y software a medida para empresas de Entre Ríos. CRM, e-commerce, facturación electrónica AFIP, stock y POS.",
    url: "https://piramidesoft.com/productos",
    images: ["/logo_2.png"],
    type: "website",
    locale: "es_AR",
  },
};

export default function ProductsPage() {
  return <Products />;
}

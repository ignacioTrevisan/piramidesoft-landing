import type { Metadata } from "next";
import PiramideSoftPage from "./Clientes-modeClient";

export const metadata: Metadata = {
  title: "Nuestros Clientes en Entre Ríos y Argentina",
  description:
    "Más de 400 empresas de Entre Ríos y todo el país confían en Piramide Soft para digitalizar sus negocios con sistemas de gestión, e-commerce y software a medida.",
  alternates: { canonical: "/clientes" },
  openGraph: {
    title: "Clientes de Piramide Soft en Entre Ríos y Argentina",
    description:
      "Empresas de Colón, Villaguay, Paraná, Concordia, Concepción del Uruguay, Gualeguaychú y toda Argentina que confían en nuestro software.",
    url: "https://piramidesoluciones.com/clientes",
    images: ["/logo_2.png"],
    type: "website",
    locale: "es_AR",
  },
};

export default async function ClientPage() {
  return (
    <div>
      <PiramideSoftPage />{" "}
    </div>
  );
}

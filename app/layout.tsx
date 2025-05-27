import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Piramide Soft - Soluciones Tecnológicas Innovadoras",
    template: "%s | Piramide Soft"
  },
  description: "Desarrollamos soluciones tecnológicas innovadoras para empresas: sistemas de gestión, aplicaciones móviles, e-commerce y más. Potenciamos tu negocio con tecnología de vanguardia.",
  keywords: ["desarrollo software", "aplicaciones móviles", "sistemas de gestión", "e-commerce", "tecnología", "innovación", "Argentina"],
  authors: [{ name: "Piramide Soft" }],
  creator: "Piramide Soft",
  publisher: "Piramide Soft",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [
      { url: "/logo_2.png", sizes: "32x32", type: "image/png" },
      { url: "/logo_2.png", sizes: "16x16", type: "image/png" }
    ],
    shortcut: "/logo_2.png",
    apple: "/logo_2.png",
  },
  metadataBase: new URL('https://piramidesoft.com'),
  openGraph: {
    title: "Piramide Soft - Soluciones Tecnológicas Innovadoras",
    description: "Desarrollamos soluciones tecnológicas innovadoras para empresas: sistemas de gestión, aplicaciones móviles, e-commerce y más.",
    url: "https://piramidesoft.com",
    siteName: "Piramide Soft",
    images: [
      {
        url: "/logo_2.png",
        width: 800,
        height: 600,
        alt: "Piramide Soft Logo",
      },
    ],
    locale: "es_AR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Piramide Soft - Soluciones Tecnológicas Innovadoras",
    description: "Desarrollamos soluciones tecnológicas innovadoras para empresas: sistemas de gestión, aplicaciones móviles, e-commerce y más.",
    images: ["/logo_2.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${inter.variable} antialiased overflow-x-hidden`}>
        {children}
      </body>
    </html>
  );
}

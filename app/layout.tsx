import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const SITE_URL = "https://piramidesoft.com";
const SITE_NAME = "Piramide Soft";
const DEFAULT_TITLE =
  "Piramide Soft | Desarrollo de Software y Sistemas a Medida en Entre Ríos";
const DEFAULT_DESCRIPTION =
  "Empresa de desarrollo de software, sistemas de gestión, páginas web y aplicaciones móviles en Entre Ríos, Argentina. Más de 30 años brindando soluciones tecnológicas a empresas de Colón, Villaguay, Concepción del Uruguay, Paraná, Concordia, Gualeguaychú y toda la provincia.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: DEFAULT_TITLE,
    template: "%s | Piramide Soft - Software en Entre Ríos",
  },
  description: DEFAULT_DESCRIPTION,
  applicationName: SITE_NAME,
  generator: "Next.js",
  keywords: [
    "desarrollo de software Entre Ríos",
    "sistemas de gestión Entre Ríos",
    "empresa de software Entre Ríos",
    "programación Entre Ríos",
    "diseño web Entre Ríos",
    "páginas web Entre Ríos",
    "aplicaciones móviles Entre Ríos",
    "software a medida Entre Ríos",
    "fábrica de software Argentina",
    "software Colón Entre Ríos",
    "software Villaguay",
    "software Concepción del Uruguay",
    "software Paraná Entre Ríos",
    "software Concordia",
    "software Gualeguaychú",
    "sistema de facturación electrónica AFIP",
    "sistema CRM Argentina",
    "ecommerce Entre Ríos",
    "gestión de stock",
    "punto de venta POS",
    "Piramide Soft",
    "piramidesoft",
  ],
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  category: "Tecnología",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [
      { url: "/logo_2.png", sizes: "32x32", type: "image/png" },
      { url: "/logo_2.png", sizes: "16x16", type: "image/png" },
    ],
    shortcut: "/logo_2.png",
    apple: "/logo_2.png",
  },
  alternates: {
    canonical: "/",
    languages: {
      "es-AR": "/",
      es: "/",
    },
  },
  openGraph: {
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    url: SITE_URL,
    siteName: SITE_NAME,
    images: [
      {
        url: "/logo_2.png",
        width: 1200,
        height: 630,
        alt: "Piramide Soft - Desarrollo de Software en Entre Ríos",
      },
    ],
    locale: "es_AR",
    type: "website",
    countryName: "Argentina",
  },
  twitter: {
    card: "summary_large_image",
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    images: ["/logo_2.png"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  verification: {
    // Reemplazar con el código real cuando se verifique en Google Search Console
    // google: "xxxxxxxxxxxxxxxxxx",
  },
  other: {
    "geo.region": "AR-E",
    "geo.placename": "Colón, Entre Ríos",
    "geo.position": "-32.2244;-58.1418",
    ICBM: "-32.2244, -58.1418",
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": ["Organization", "LocalBusiness", "ProfessionalService"],
  "@id": `${SITE_URL}/#organization`,
  name: "Piramide Soft",
  alternateName: ["PiramideSoft", "Pirámide Soft"],
  url: SITE_URL,
  logo: `${SITE_URL}/logo_2.png`,
  image: `${SITE_URL}/logo_2.png`,
  description: DEFAULT_DESCRIPTION,
  email: "piramide_soft@gmail.com",
  telephone: "+54-9-3447-45-2943",
  priceRange: "$$",
  foundingDate: "1994",
  slogan: "Más de 30 años impulsando el futuro digital",
  areaServed: [
    {
      "@type": "AdministrativeArea",
      name: "Entre Ríos",
      containedInPlace: { "@type": "Country", name: "Argentina" },
    },
    { "@type": "Country", name: "Argentina" },
  ],
  address: [
    {
      "@type": "PostalAddress",
      streetAddress: "Colón",
      addressLocality: "Colón",
      addressRegion: "Entre Ríos",
      addressCountry: "AR",
    },
    {
      "@type": "PostalAddress",
      streetAddress: "Villaguay",
      addressLocality: "Villaguay",
      addressRegion: "Entre Ríos",
      addressCountry: "AR",
    },
  ],
  geo: {
    "@type": "GeoCoordinates",
    latitude: -32.2244,
    longitude: -58.1418,
  },
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+54-9-3447-45-2943",
      contactType: "customer service",
      areaServed: "AR",
      availableLanguage: ["Spanish", "es-AR"],
    },
  ],
  sameAs: [
    "https://www.instagram.com/piramidesoft/",
    "https://www.facebook.com/piramidesoft",
  ],
  knowsAbout: [
    "Desarrollo de software",
    "Sistemas de gestión",
    "Páginas web",
    "Aplicaciones móviles",
    "E-commerce",
    "CRM",
    "Facturación electrónica AFIP",
    "Punto de venta",
    "Gestión de stock",
  ],
  makesOffer: [
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Desarrollo de software a medida" } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Diseño y desarrollo de páginas web" } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Aplicaciones móviles iOS y Android" } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Sistemas CRM" } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "E-commerce y tiendas online" } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Facturación electrónica" } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Gestión de stock e inventario" } },
  ],
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  url: SITE_URL,
  name: SITE_NAME,
  inLanguage: "es-AR",
  publisher: { "@id": `${SITE_URL}/#organization` },
  potentialAction: {
    "@type": "SearchAction",
    target: `${SITE_URL}/blogs?search={search_term_string}`,
    "query-input": "required name=search_term_string",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es-AR">
      <head>
        <link rel="canonical" href={SITE_URL} />
        <meta name="theme-color" content="#2563EB" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
      </head>
      <body className={`${inter.variable} antialiased overflow-x-hidden`}>
        {children}
      </body>
    </html>
  );
}

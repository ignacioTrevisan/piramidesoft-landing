import dynamic from "next/dynamic";
import HeroSection from "./components/hero/HeroSection";

// Hero se carga en el bundle inicial (above the fold).
// El resto se carga en chunks separados (mantiene SSR para SEO,
// reduce el JavaScript inicial del cliente en la Home).
const NewSteps = dynamic(() => import("./components/newSteps/newSteps"));
const SobreNosotros = dynamic(() =>
  import("./sobreNosotros").then((m) => ({ default: m.SobreNosotros }))
);
const ProductsPreview = dynamic(() => import("./productsPreview"));
const ContactSection = dynamic(() =>
  import("./components/ContactSection").then((m) => ({
    default: m.ContactSection,
  }))
);

export default function Home() {
  return (
    <>
      <HeroSection />
      <NewSteps />
      <SobreNosotros />
      <ProductsPreview />
      <ContactSection />
    </>
  );
}

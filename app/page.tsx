import { SobreNosotros } from "./sobreNosotros";
import { Steps } from "./components/steps/steps";
import HeroSection from "./components/hero/HeroSection";
import ProductsPreview from "./productsPreview";

export default function Home() {
  return (
    <>
      <HeroSection />
      <SobreNosotros />
      <Steps />
      <ProductsPreview />
    </>
  );
}

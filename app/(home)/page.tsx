import HeroSection from "./components/hero/HeroSection";
import Steps from "./components/steps/steps";
import ProductsPreview from "./productsPreview";

import { SobreNosotros } from "./sobreNosotros";

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

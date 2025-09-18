import HeroSection from "./components/hero/HeroSection";
import Steps from "./components/steps/steps";
import ProductsPreview from "./productsPreview";
import { SobreNosotros } from "./sobreNosotros";
import { ContactSection } from "./components/ContactSection";
import NewSteps from "./components/newSteps/newSteps";

export default function Home() {
  return (
    <>
      <HeroSection />
      <NewSteps />
      {/* <Steps /> */}
      <SobreNosotros />
      <ProductsPreview />
      {/* <BlogsSection /> */}
      <ContactSection />
    </>
  );
}

import HeroSection from "./components/hero/HeroSection";
import Steps from "./components/steps/steps";
import ProductsPreview from "./productsPreview";
import { SobreNosotros } from "./sobreNosotros";
import { BlogsSection } from "./blogsSection";
import { ContactSection } from "./components/ContactSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <SobreNosotros />
      <Steps />
      <ProductsPreview />
      {/* <BlogsSection /> */}
      <ContactSection />
    </>
  );
}

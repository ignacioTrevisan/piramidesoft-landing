import HeroSection from "./components/hero/HeroSection";
import Steps from "./components/steps/steps";
import ProductsPreview from "./productsPreview";
import { SobreNosotros } from "./sobreNosotros";
import { BlogsSection } from "./blogsSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <SobreNosotros />
      <Steps />
      <ProductsPreview />
      <BlogsSection />
    </>
  );
}

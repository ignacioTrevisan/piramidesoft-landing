import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";

export default function HeroSection() {
  return (
    <div
      id="hero"
      className="w-full flex flex-col md:flex-row justify-around h-auto md:h-screen items-center px-4 py-8 md:py-0 overflow-x-hidden md:px-10 mt-16 md:mt-20 max-w-[100vw]"
    >
      <HeroContent />
      <HeroImage />
    </div>
  );
}

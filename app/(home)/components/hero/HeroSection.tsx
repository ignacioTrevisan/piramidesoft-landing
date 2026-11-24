import HeroContent from "./HeroContent";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative w-full flex overflow-hidden flex-col md:flex-row justify-around h-auto md:h-screen items-center px-4 py-8 md:py-0 md:px-10 mt-16 md:mt-20 max-w-[100vw]"
    >
      {/* Fondo decorativo - gradient radial sutil + patron */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-br from-white via-blue-50/40 to-white dark:from-gray-950 dark:via-blue-950/20 dark:to-gray-950"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 opacity-40 dark:opacity-20"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 30%, rgba(37, 99, 235, 0.08) 0%, transparent 50%), radial-gradient(circle at 80% 70%, rgba(37, 99, 235, 0.06) 0%, transparent 50%)",
        }}
      />
      <HeroContent />
    </section>
  );
}

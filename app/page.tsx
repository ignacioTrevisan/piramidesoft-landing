import Image from "next/image";
import TrustedByClients from "./components/conoceNuestroClientesBotton";

export default function Home() {
  return (
    <div className="w-full flex flex-col md:flex-row justify-around h-auto md:h-screen items-center px-4 py-8 md:py-0">
      <div className="w-full md:w-1/2 gap-y-2 mb-8 md:mb-0">
        <h1 className="text-5xl md:text-6xl lg:text-8xl font-bold text-center md:text-left mb-4">PiramideSoft</h1>
        <h2 className="text-xl md:text-2xl mb-3 text-center md:text-left">
          Más de 30 Años impulsando el futuro Digitial
        </h2>
        <p className="text-gray-700 text-center md:text-left text-sm md:text-base">
          En PiramideSoft desarrollamos sistemas{" "}
          <span className="font-bold">confiables</span> y{" "}
          <span className="font-bold">adaptados</span> a pequeñas y medianas
          empresas. Te ayudamos a gestionar
          <span className="font-bold"> stock</span>,{" "}
          <span className="font-bold">ventas</span> y{" "}
          <span className="font-bold">digitalizar</span> tu negocio con
          soluciones <span className="font-bold">robustas</span> y asesoramiento{" "}
          <span className="font-bold">personalizado</span>.
        </p>
        <div>
          <TrustedByClients />{" "}
        </div>
      </div>
      <div className="w-full md:w-1/2 flex justify-center">
        <Image
          src="/hero-image-sin-fondo.png"
          alt="home-hero"
          width={600}
          height={600}
          className="w-4/5 md:w-full max-w-[600px] h-auto"
          priority
        />
      </div>
    </div>
  );
}

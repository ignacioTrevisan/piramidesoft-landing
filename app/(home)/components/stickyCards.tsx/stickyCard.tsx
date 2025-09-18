"use client";
import "./stickyCard.css";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(ScrollTrigger);

const data = [
  {
    index: "1",
    title: "Sistemas de Gestión",
    image:
      "https://res.cloudinary.com/nachotrevisan/image/upload/v1756992134/hsygoyjvyw4sicampjza.jpg",
    description:
      "Desarrollamos software de escritorio y movil personalizado para almacenes, talleres, restaurantes y pequeñas empresas de la zona para optimizar sus procesos.",
  },
  {
    index: "2",
    title: "Desarrollo Web",
    image: "/newSteps/web.png",
    description:
      "Creamos sitios web modernos y funcionales para comercios y profesionales, adaptados a las necesidades.",
  },
  {
    index: "3",
    title: "Soporte Técnico",
    image: "/newSteps/mantenimiento.jpeg",
    description:
      "Hacemos instalacion, capacitacion, brindamos mantenimiento y soporte técnico continuo a nuestros clientes, con atención personalizada y tiempos de respuesta rápidos.",
  },
  {
    index: "4",
    title: "Facilidad de uso",
    image:
      "https://res.cloudinary.com/nachotrevisan/image/upload/v1750260837/gtjguuo65jho1qpgiy6a.jpg",
    description:
      "Nuestro principal enfoque es la facilidad de uso. Priorizando siempre que le puedas sacar provecho al sistema desde el dia uno",
  },
];
const StickyCard = () => {
  const container = useRef(null);

  useGSAP(
    () => {
      const stickyCards = document.querySelectorAll(".stickyCard");
      stickyCards.forEach((card, index) => {
        if (index < stickyCards.length - 1) {
          ScrollTrigger.create({
            trigger: card,
            start: "top top",
            endTrigger: stickyCards[stickyCards.length - 1],
            end: "top top",
            pin: true,
            pinSpacing: false,
          });
        }

        if (index < stickyCards.length - 1) {
          ScrollTrigger.create({
            trigger: stickyCards[index + 1],
            start: "top bottom",
            end: "top top",
            onUpdate: (self) => {
              const progress = self.progress;
              const scale = 1 - progress * 0.5;
              const rotation = (index % 2 === 0 ? 5 : -5) * progress;
              const afterOpacity = 1 - progress;

              gsap.set(card, {
                scale: scale,
                rotation: rotation,
                opacity: afterOpacity,
              });
            },
          });
        }
      });
    },
    { scope: container }
  );
  return (
    <div className="stickyCards" ref={container}>
      {data.map((cardData, index) => (
        <div className="stickyCard" key={index}>
          <div className="stickyCardIndex">
            <h1>{cardData.index}</h1>
          </div>
          <div className="stickyCardContent">
            <div className="stickyCardContentWrapper">
              <h3 className="stickyCardHeader">{cardData.title}</h3>
              <div className="stickyCardImg">
                <img src={cardData.image} alt="" />
              </div>
              <div className="stickyCardCopy">
                <div className="stickyCardCopyTitle">
                  <p>{cardData.title}</p>
                </div>
                <div className="stickyCardCopyDescription">
                  <p>{cardData.description}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StickyCard;

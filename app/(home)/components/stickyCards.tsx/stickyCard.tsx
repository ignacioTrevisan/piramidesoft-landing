"use client";
import "./stickyCard.css";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";

const data = [
  {
    index: "1",
    title: "Titulo 1",
    image: "/newSteps/1.jpg",
    description: "Ipsum ipsum adipisicing reprehenderit ipsum amet do elit.",
  },
  {
    index: "2",
    title: "Titulo 2",
    image: "/newSteps/2.jpg",
    description: "Ipsum ipsum adipisicing reprehenderit ipsum amet do elit.",
  },
  {
    index: "3",
    title: "Titulo 3",
    image: "/newSteps/3.jpg",
    description: "Ipsum ipsum adipisicing reprehenderit ipsum amet do elit.",
  },
  {
    index: "4",
    title: "Titulo 4",
    image: "/newSteps/4.jpg",
    description: "Ipsum ipsum adipisicing reprehenderit ipsum amet do elit.",
  },
];

export const StickyCard = () => {
  gsap.registerPlugin(ScrollTrigger);
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
            pinSpacing: true,
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
              <h1 className="stickyCardHeader">{cardData.title}</h1>
              <div className="stickyCardImg">
                <img src={cardData.image} alt="" />
              </div>
              <div className="stickyCardCopy">
                <div className="stickyCardCopyTitle">
                  <p>(About the state)</p>
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

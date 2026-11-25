"use client";
import React, { useState } from "react";
import { isVideoUrl, isEmbedVideoUrl, toEmbedUrl } from "@/app/lib/mediaUtils";

interface Props {
  imagenes: string[];
  titulo: string;
}

export const ImagesSelected = ({ imagenes, titulo }: Props) => {
  const [selected, setSelected] = useState(0);
  const current = imagenes[selected];
  const currentIsVideo = isVideoUrl(current);
  const currentIsEmbed = isEmbedVideoUrl(current);

  return (
    <>
      {/* Visor principal - object-contain + bg negro para que cualquier
          aspect ratio (9:16 vertical o 16:9 horizontal) se vea entero */}
      <div className="relative h-80 md:h-[28rem] overflow-hidden rounded-xl mb-4 border border-gray-200 dark:border-gray-800 shadow-md bg-black">
        {currentIsEmbed ? (
          <iframe
            key={current}
            src={toEmbedUrl(current)}
            title={`${titulo} - media ${selected + 1}`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          />
        ) : currentIsVideo ? (
          <video
            key={current}
            src={current}
            controls
            playsInline
            autoPlay
            muted
            loop
            className="w-full h-full object-contain"
          >
            Tu navegador no soporta la reproducción de video.
          </video>
        ) : (
          /* eslint-disable-next-line @next/next/no-img-element */
          <img
            src={current}
            alt={`${titulo} - imagen ${selected + 1}`}
            className="w-full h-full object-contain transition-transform duration-500 hover:scale-105"
          />
        )}
      </div>

      {/* Miniaturas */}
      {imagenes.length > 1 && (
        <div className="flex justify-center flex-wrap gap-3">
          {imagenes.map((media, index) => {
            const thumbIsVideo = isVideoUrl(media);
            const thumbIsEmbed = isEmbedVideoUrl(media);
            const isActive = index === selected;
            return (
              <button
                key={index}
                type="button"
                onClick={() => setSelected(index)}
                aria-label={`Ver media ${index + 1}`}
                aria-pressed={isActive}
                className={`relative h-20 w-20 overflow-hidden rounded-lg cursor-pointer border-2 transition-all bg-gray-100 dark:bg-gray-800 ${
                  isActive
                    ? "border-[#2563EB] ring-2 ring-[#2563EB]/30"
                    : "border-gray-200 dark:border-gray-700 hover:border-[#2563EB]/50"
                }`}
              >
                {thumbIsVideo || thumbIsEmbed ? (
                  <>
                    {thumbIsVideo && !thumbIsEmbed ? (
                      <video
                        src={media}
                        muted
                        playsInline
                        preload="metadata"
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-gray-800 to-black" />
                    )}
                    {/* Overlay con icono play */}
                    <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                      <svg
                        className="w-8 h-8 text-white drop-shadow"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </>
                ) : (
                  /* eslint-disable-next-line @next/next/no-img-element */
                  <img
                    src={media}
                    alt={`Miniatura ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                )}
              </button>
            );
          })}
        </div>
      )}
    </>
  );
};

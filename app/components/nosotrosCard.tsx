import Image from "next/image";
import React from "react";

interface Props {
  name: string;
  text: string;
  image: string;
  Roles: string[];
}

export const NosotrosCard = ({ name, text, image, Roles }: Props) => {
  return (
    <div className="w-full flex flex-col h-full bg-white rounded-2xl mt-3 p-2">
      <div className="flex-grow flex flex-col">
        <p className="text-3xl text-center">🙋</p>
        <p className="text-center">{text}</p>
        <Image
          src={image}
          alt={`${name} image`}
          width={300}
          height={100}
          className="rounded-full self-center mt-2"
        />
        <h1 className="text-3xl text-center mt-3">{name}</h1>
      </div>

      <div className="mt-auto">
        <p className="text-center">
          <span className="font-bold">Roles: </span>
          {Roles.join(", ")}
        </p>
      </div>
    </div>
  );
};

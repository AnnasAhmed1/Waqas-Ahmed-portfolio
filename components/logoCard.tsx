import Image from "next/image";
import React from "react";
import flutterIcon from "../assets/icons/flutter.png";
const LogoCard = ({ image, text }: { image?: any; text?: any }) => {
  return (
    <div className="flex flex-col justify-center items-center gap-2">
      <Image
        className={`w-[60px]/ object-contain  w-[80px] max-md:w-[60px] border border-black  p-2 rounded-full`}
        src={image}
        alt="project image"
      />
      <h1 className="text-customPrimary font-[500]  text-center text-xl max-md:text-base m-0">
        {text}
      </h1>
    </div>
  );
};

export default LogoCard;

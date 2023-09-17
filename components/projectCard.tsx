import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import ButtonComp from "./buttonComp";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import EastIcon from "@mui/icons-material/East";
import Modal from "@mui/material/Modal";

const ProjectCard = ({
  image,
  liveLink,
  githubLink,
  video,
  setOpen,
  github,
}: {
  image?: any;
  liveLink: string;
  githubLink: string;
  video?: any;
  setOpen: any;
  github: any;
}) => {
  return (
    <>
      <div
        className={`rounded-lg group border-2 shadow-xl border-black relative container1/`}
      >
        <Image
          className={`w-full h-[300px] object-contain rounded-lg bg-black py-2`}
          src={image}
          alt="project image"
        />
        <div
          className={`
      flex justify-center items-center gap-4 rounded-lg bg-opacity-90
      absolute inset-0 top-0 left-0 right-0 bottom-0 bg-customSemiDark transition-transform 
      origin-top-left scale-y-0 group-hover:scale-100 group-hover:origin-top-left
      `}
        >
          <div>
            <ButtonComp
              text="Preview"
              icon={<EastIcon className="text-lg block" />}
              onClick={() => {
                setOpen(true);
              }}
            />
          </div>
          <Link
            className=""
            href={`https://github.com/${github}/${githubLink}`}
            target="_blank"
          >
            <ButtonComp text="Github" icon={<EastIcon className="text-lg" />} />
          </Link>
        </div>
      </div>
    </>
  );
};

export default ProjectCard;

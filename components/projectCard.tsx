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
  github,
}: {
  image?: any;
  liveLink?: string;
  githubLink: string;
  video?: any;
  github: any;
}) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
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
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
          className="flex justify-center items-center border border-customPrimary outline-none bottom-0 absolute/"
          keepMounted
          disableScrollLock={true}
        >
          <div className="bg-black py-10 px-32 max-md:px-28 max-md:py-6 max-sm:px-12 flex justify-center rounded-md outline-none border border-customPrimary">
            <video
              autoPlay
              style={{
                objectFit: "contain",
              }}
              className="w-[400px] h-[400px] max-md:w-[100%] max-sm:w-[80%]"
              controls
            >
              <source src={`/project_videos/${video}.mp4`} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </Modal>
      </div>
    </>
  );
};

export default ProjectCard;

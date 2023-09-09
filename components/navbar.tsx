import Image from "next/image";
import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import ClearIcon from "@mui/icons-material/Clear";

const Navbar = ({
  navs,
  socialLinks,
  handleSocialLinks,
  mobile = false,
  activeSection,
  setActiveSection,
  scrollToSection,
}: {
  navs: Array<object>;
  socialLinks: Array<object>;
  handleSocialLinks: any;
  mobile?: boolean;
  activeSection?: any;
  setActiveSection?: any;
  scrollToSection?: any;
}) => {
  const [navOpen, setNavOpen] = useState(false);
  const [active, setActive] = useState("home");

  const sections = ["home", "about", "resume", "portfolio", "contact"];
  return !mobile ? (
    <nav className="w-[250px] max-lg:hidden fixed flex flex-col h-screen overflow-hidden justify-between pt-10 pb-6 items-center px-4/ bg-[#111418]">
      <div className="flex justify-center items-center flex-col gap-4 ">
        <Image
          src={require("../assets/profile.png")}
          alt="Profile Picture"
          className="w-[180px] border-[8px] rounded-[50%] border-[#343a40]"
        />
        <h1 className="text-customLight text-2xl">Annas Ahmed</h1>
      </div>
      <nav className="my-10 ">
        <ul className="flex flex-col gap-4">
          {navs.map((nav: any, index: number) => {
            return (
              <li
                className={`px-3 cursor-pointer ${
                  activeSection === nav.id
                    ? "text-customPrimary"
                    : "text-customSemiLight"
                }  text-lg text-center hover:text-customPrimary`}
                key={index}
                onClick={(e) => {
                  scrollToSection(e, nav?.id);
                }}
              >
                {nav?.title}
              </li>
            );
          })}
        </ul>
      </nav>
      <div className="flex w-full justify-between items-center px-16 text-customSemiLight ">
        {socialLinks.map((social: any, index: number) => {
          return (
            <p
              className="text-[8px] cursor-pointer"
              key={index}
              onClick={() => {
                handleSocialLinks(social.link, social.email);
              }}
            >
              {social.icon}
            </p>
          );
        })}
      </div>
    </nav>
  ) : (
    <nav className="hidden w-full z-[999]  max-lg:block bg-[#111418] py-4 px-[20px] fixed max-sm:px-[10px]">
      <div className="flex items-center">
        <h1 className="text-customLight font-[500] flex-1  text-2xl max-md:text-lg m-0">
          Annas Ahmed
        </h1>

        <div className="flex. w-full/ justify-between/ items-center/ px-16/ text-customSemiLight ">
          {socialLinks.map((social: any, index: number) => {
            return (
              <p
                className="text-[8px]/ inline mr-4 max-sm:mr-2 cursor-pointer"
                key={index}
                onClick={() => {
                  handleSocialLinks(social.link, social.email);
                }}
              >
                {social.icon}
              </p>
            );
          })}
        </div>
        <button
          onClick={() => {
            setNavOpen(!navOpen);
          }}
          className="transition-all ease-linear duration-[0.5s]"
        >
          {!navOpen ? (
            <MenuIcon className="text-white cursor-pointer transition-all ease-linear duration-[0.5s]" />
          ) : (
            <ClearIcon className="text-white cursor-pointer transition-all ease-linear duration-[0.5s]" />
          )}
        </button>
      </div>
      <ul
        className={`${
          !navOpen ? "hidden" : "flex"
        } flex-col gap-1/ mt-10 mb-4 transition-all ease-linear duration-[0.5s] `}
      >
        {navs.map((nav: any, index: number) => {
          return (
            <li
              className={` cursor-pointer  ${
                activeSection === nav.id
                  ? "text-customPrimary"
                  : "text-customSemiLight"
              } text-base py-3 ${
                index !== navs.length - 1 || true
                  ? "border-b border-[#555555]"
                  : null
              } text-center/ hover:text-customPrimary`}
              key={index}
              onClick={(e) => {
                scrollToSection(e, nav?.id);
              }}
            >
              {nav?.title}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;

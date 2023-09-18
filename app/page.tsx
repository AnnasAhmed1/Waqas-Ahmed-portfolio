"use client";
import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import Typewriter from "typewriter-effect";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// components
import Layout from "@/components/layout";
import Heading from "@/components/heading";
import ResumeCard from "@/components/resumeCard";
import SkillComp from "@/components/skillComp";
import ProjectCard from "@/components/projectCard";
import Navbar from "@/components/navbar";

// images
import car_app from "../assets/projects/car_flutter_app.png";
import greengen from "../assets/projects/green_gen.png";
import weather_app from "../assets/projects/weather_app.png";
// import greengenVideo from "../assets/projects/videos/green_gen.mp4";

// icons
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import ButtonComp from "@/components/buttonComp";
import GitHubIcon from "@mui/icons-material/GitHub";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import MailIcon from "@mui/icons-material/Mail";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import CallIcon from "@mui/icons-material/Call";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Modal } from "@mui/material";
import LogoCard from "@/components/logoCard";

import flutterIcon from "../assets/icons/flutter.png";
import flutterProviderIcon from "../assets/icons/flutter_provider.png";
import apiIntegration from "../assets/icons/api_integration.png";
import googleMaps from "../assets/icons/google_maps.png";
import dart from "../assets/icons/dart.png";
import firebase from "../assets/icons/firebase.png";
import githubIcon from "../assets/icons/github.png";
import leetcode from "../assets/icons/leetcode.png";
import python from "../assets/icons/python.png";
import problemSolving from "../assets/icons/problem_solving.png";

// remove portfolio link
// add product
// tab components

export default function Home() {
  const [activeSection, setActiveSection] = useState("home");

  const navs = [
    { title: "Home", id: "home", active: false },
    { title: "About Me", id: "about", active: false },
    { title: "Resume", id: "resume", active: false },
    { title: "Portfolio", id: "portfolio", active: false },
    { title: "Contact", id: "contact", active: false },
  ];
  const phoneNumber = "+92 346 1900055";
  const email = "wa02263@gmail.com";
  const linkedin = "waqas-ahmed-520ba11b6";
  const github = "WaqasAhmed123";
  const profession = "Flutter Developer";
  const details = [
    { Name: "Waqas Ahmed" },
    { Email: "wa02263@gmail.com" },
    { Age: "21" },
    { From: "Karachi, Pakistan" },
  ];
  const education = [
    {
      year: "2021-2025",
      title: "BSCS",
      institue: "University Of Karachi",
      details: "Currently pursuing third year",
    },
  ];
  const experience = [
    {
      year: "2022 - Present",
      title: "Flutter App Developer",
      institue: "Different Freelance Platforms",
      details: "More than 1 year experience in Freelancing",
    },
  ];
  const skills = [
    { title: "Flutter", percentage: 80 },
    { title: "Firebase", percentage: 65 },
    { title: "Stacked", percentage: 70 },
    { title: "Provide", percentage: 70 },
    { title: "Dart", percentage: 80 },
    { title: "Python", percentage: 75 },
    { title: "Google Maps/API integration", percentage: 65 },
    { title: "Github", percentage: 50 },
  ];

  const skillsLogos = [
    {
      image: flutterIcon,
      logoName: "Flutter",
    },
    {
      image: dart,
      logoName: "Dart",
    },
    {
      image: googleMaps,
      logoName: "Google Maps",
    },
    {
      image: apiIntegration,
      logoName: "API Integration",
    },
    {
      image: flutterProviderIcon,
      logoName: "Provider",
    },
    {
      image: flutterProviderIcon,
      logoName: "Stacked",
    },
    {
      image: firebase,
      logoName: "Firebase",
    },
    {
      image: githubIcon,
      logoName: "Github",
    },
    {
      image: python,
      logoName: "Python",
    },
    {
      image: leetcode,
      logoName: "Leet Code",
    },
    // {
    //   image: problemSolving,
    //   logoName: "Problem Solving",
    // },
  ];
  const socialLinks = [
    {
      icon: <WhatsAppIcon className="hover:text-green-600" fontSize="small" />,
      link: `https://api.whatsapp.com/send?phone=${phoneNumber}`,
    },
    {
      icon: <MailIcon className="hover:text-blue-700" fontSize="small" />,
      link: `mailto:${email}`,
      email: true,
    },
    {
      icon: <GitHubIcon className="hover:text-black" fontSize="small" />,
      link: `https://github.com/${github}`,
    },
    {
      icon: <LinkedInIcon className="hover:text-blue-800" fontSize="small" />,
      link: `https://www.linkedin.com/in/${linkedin}`,
    },
  ];
  const projects = [
    {
      image: car_app,
      githubLink: "Fizzinnovations_portfolio",
      video: "car_app",
    },
    {
      image: greengen,
      githubLink: "Appswaves_project",
      video: "greengen_app",
    },
    {
      image: weather_app,
      githubLink: "weather-app",
      video: "weather_app",
    },
  ];

  const handleSocialLinks = (link: string, email = false) => {
    !email ? window.open(link, "_blank") : (window.location.href = link);
  };

  const handleDownloadCV = () => {
    console.log("download");
    const downloadLink = "/resume.pdf";
    const a = document.createElement("a");
    a.href = downloadLink;
    a.download = "resume.pdf";
    a.click();
  };

  const updateCurrentSection = () => {
    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight;

    for (const section of navs) {
      const element = document.getElementById(section.id);
      if (element) {
        const { top, bottom } = element.getBoundingClientRect();

        if (
          top <= 0 &&
          (bottom >= 0 || (top <= windowHeight && bottom >= windowHeight))
        ) {
          setActiveSection(section.id);
          break;
        }
      }
    }
  };
  function scrollToSection(e: any, id: string) {
    console.log(id);
    e.preventDefault();
    const element = document.querySelector(`#${id}`);
    element?.scrollIntoView({ behavior: "smooth" });
    console.log(activeSection);
    if (element && id !== "home") {
      const offset = -1;
      const elementPosition =
        element.getBoundingClientRect().top + window.scrollY;

      window.scrollTo({
        top: elementPosition - offset,
        behavior: "smooth",
      });
    }
  }
  const [inputName, setInputName] = useState("");
  const [inputEmail, setInputEmail] = useState("");
  const [inputComment, setInputComment] = useState("");
  useEffect(() => {
    window.addEventListener("scroll", updateCurrentSection);
    return () => {
      window.removeEventListener("scroll", updateCurrentSection);
    };
  }, []);

  return (
    <>
      <main className="flex">
        <ToastContainer />
        <Navbar
          navs={navs}
          socialLinks={socialLinks}
          activeSection={activeSection}
          setActiveSection={setActiveSection}
          handleSocialLinks={handleSocialLinks}
          scrollToSection={scrollToSection}
          name={details[0].Name}
        />

        <div className="w-[calc(100%-250px)] max-lg:w-full ml-auto ">
          <Navbar
            navs={navs}
            socialLinks={socialLinks}
            handleSocialLinks={handleSocialLinks}
            mobile={true}
            setActiveSection={setActiveSection}
            scrollToSection={scrollToSection}
            name={details[0].Name}
          />
          <section
            id="home"
            className={`flex-[8] /
            bg-[url(../assets/home_backgorund.jpeg)]
            bg-cover
            bg-no-repeat
            w-full
            h-screen
            relative
            `}
          >
            <button
              className="absolute bottom-1 left-0 right-0 text-customLight mx-auto animate-bounce"
              onClick={(e) => {
                scrollToSection(e, "about");
              }}
            >
              <KeyboardArrowDownIcon
                style={{
                  fontSize: "4rem",
                  color: "#fff",
                }}
              />
            </button>
            <div className="bg-[#252729] flex flex-col gap-8 max-md:gap-3 justify-center text-5xl max-md:text-4xl max-sm:text-3xl text-center font-bold tracking-wider items-center text-customLight bg-opacity-60 w-full h-screen">
              <h1 className="text-3xl max-md:text-xl max-sm:text-lg font-[500]">
                Welcome
              </h1>
              <Typewriter
                // component={[ <h1 className="text-5xl font-bold">I&apos;m Annas Ahmed.</h1>]}
                options={{
                  strings: [`I'm  ${details[0].Name}`, `I'm a ${profession}`],
                  autoStart: true,
                  loop: true,
                }}
              />
              {/* <h1 className="">I&apos;m Annas Ahmed.</h1> */}
              <h1 className="text-2xl max-md:text-lg max-sm:text-base font-normal">
                from Karachi, Pakistan
              </h1>
              <ButtonComp
                text="Hire Me"
                transparent={true}
                onClick={(e) => {
                  scrollToSection(e, "contact");
                }}
              />
            </div>
          </section>
          <Layout id="about">
            <Heading text="Know Me More" subText="ABOUT ME" />
            <div className="flex max-md:flex-col max-md:gap-6 max-md:text-[14px] gap-12">
              <div>
                <h1 className="text-3xl max-sm:text-2xl font-[600]">
                  I&apos;m{" "}
                  <span className="text-customPrimary">{details[0].Name},</span>{" "}
                  a {profession}
                </h1>
                <p>
                  As a passionate Flutter developer with a year of freelancing
                  experience, I specialize in creating efficient, user-friendly,
                  and visually appealing mobile applications. I have a profound
                  love for crafting engaging digital experiences and
                  transforming ideas into functional and responsive mobile apps.
                </p>
                <p>
                  My journey in the world of mobile development began with a
                  deep fascination for creating interactive user interfaces that
                  seamlessly integrate with powerful back-end functionalities.
                  This drive has led me to explore and master the Flutter
                  framework, which enables me to build cutting-edge mobile
                  applications that provide an exceptional user experience.
                </p>
                <p>
                  With a solid foundation in modern mobile development
                  technologies and a keen eye for detail, I am dedicated to
                  delivering high-quality Flutter applications that captivate
                  users and bring ideas to life in the mobile space. Whether
                  it's crafting beautiful UI designs or implementing complex
                  functionality, I am committed to turning your mobile app
                  vision into a reality.
                </p>
              </div>
            </div>
          </Layout>
          <Layout id="resume" transparent={false}>
            <Heading text="Resume" subText="SUMMARY" />
            <div className="w-full flex max-md:flex-col max-md:gap-6 gap-12">
              <div className="flex-1">
                <h1 className="font-[600] text-2xl max-md:text-xl mb-6">
                  My Education
                </h1>
                {education.map((education, index) => {
                  return (
                    <ResumeCard
                      key={index}
                      title={education.title}
                      time={education.year}
                      institute={education.institue}
                      details={education.details}
                    />
                  );
                })}
              </div>
              <div className="flex-1">
                <h1 className="font-[600] text-2xl max-md:text-xl mb-6">
                  My Experience
                </h1>
                {experience.map((experience, index) => {
                  return (
                    <ResumeCard
                      key={index}
                      title={experience.title}
                      time={experience.year}
                      institute={experience.institue}
                      details={experience.details}
                    />
                  );
                })}
              </div>
            </div>
            <div>
              <h1 className="font-[600] text-2xl max-md:text-xl my-6">
                My Skills
              </h1>
              <div className="grid grid-cols-6 max-xl:grid-cols-5 max-md:grid-cols-4 max-md:gap-3 items-start gap-x-12 gap-y-8">
                {skillsLogos?.map((skill, index) => {
                  return (
                    <LogoCard image={skill.image} text={skill.logoName} />
                    // <SkillComp
                    //   key={index}
                    //   title={skill.title}
                    //   percentage={skill?.percentage?.toString()}
                    // />
                  );
                })}
              </div>
            </div>
            <ButtonComp
              text={`Download CV`}
              icon={<FileDownloadIcon />}
              onClick={() => {
                handleDownloadCV();
              }}
              center={true}
              className="mt-20"
              transparent={true}
            />
          </Layout>
          <Layout id="portfolio">
            <Heading text="My Work" subText="PORTFOLIO" />
            <div className="grid grid-cols-2 max-md:grid-cols-1 max-md:gap-6  gap-8">
              {projects?.map((project, index) => {
                return (
                  <>
                    <ProjectCard
                      key={index}
                      image={project.image}
                      video={project.video}
                      githubLink={project.githubLink}
                      github={github}
                    />
                  </>
                );
              })}
            </div>
          </Layout>
          <Layout id="contact" transparent={false}>
            <Heading text="Get in Touch" subText="CONTACT" />
            <div className="flex max-md:flex-col-reverse max-md:text-sm max gap-6">
              <div className="flex-1">
                <h1 className="text-xl font-[600]">ADDRESS</h1>
                <p>Karachi, Pakistan</p>
                <div className="flex flex-col gap-3 my-8">
                  <p className="flex items-center gap-1 m-0">
                    <CallIcon className="text-customPrimary" />
                    {phoneNumber}
                  </p>
                  <p className="flex items-center gap-1 m-0">
                    <WhatsAppIcon className="text-customPrimary" />
                    {phoneNumber}
                  </p>
                  <p className="flex items-center gap-1 m-0">
                    <MailIcon className="text-customPrimary" />
                    {email}
                  </p>
                </div>
                <h1 className="text-xl font-[600]">CONNECT WITH ME</h1>
                <div className="flex items-center gap-6">
                  {socialLinks.map((social: any, index: number) => {
                    return (
                      <p
                        className="text-[16px]/"
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
              </div>
              <form
                className="flex-[3]"
                onSubmit={(e) => {
                  e.preventDefault();
                  toast.success("Thanks for your response");
                  setInputName("");
                  setInputEmail("");
                  setInputComment("");
                }}
              >
                <h1 className="text-xl font-[600]">SEND US A NOTE</h1>
                <input
                  className="focus:outline-customPrimary bg-customLight border border-customSemiLight w-[48%] max-md:w-full max-md:mr-0 mb-4 mr-[4%] px-2 py-3 rounded-lg "
                  placeholder="Name"
                  type="text"
                  required
                  value={inputName}
                  onChange={(e) => {
                    setInputName(e.target.value);
                  }}
                />
                <input
                  className="focus:outline-customPrimary bg-customLight border border-customSemiLight w-[48%] max-md:w-full mb-4 px-2 py-3 rounded-lg "
                  placeholder="Email"
                  type="email"
                  required
                  value={inputEmail}
                  onChange={(e) => {
                    setInputEmail(e.target.value);
                  }}
                />
                <textarea
                  className="focus:outline-customPrimary bg-customLight border border-customSemiLight w-full px-2 py-3 rounded-lg resize-none "
                  placeholder="Leave your comment"
                  name=""
                  id=""
                  // cols={30}
                  rows={4}
                  required
                  value={inputComment}
                  onChange={(e) => {
                    setInputComment(e.target.value);
                  }}
                ></textarea>
                <ButtonComp
                  text="Send Message"
                  center={true}
                  className="mt-6"
                />
              </form>
            </div>
          </Layout>
          <div className="bg-[#f8f9fa]">
            <br />
          </div>
        </div>
      </main>
    </>
  );
}

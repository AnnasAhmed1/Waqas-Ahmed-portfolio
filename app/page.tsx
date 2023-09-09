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
import kardinal from "../assets/projects/kardinal_project.png";
import afilename from "../assets/projects/afilename_project.png";
import appswaves from "../assets/projects/appswaves_project.png";
import fizz from "../assets/projects/fizz_project.png";

// icons
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import ButtonComp from "@/components/buttonComp";
import GitHubIcon from "@mui/icons-material/GitHub";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import MailIcon from "@mui/icons-material/Mail";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import CallIcon from "@mui/icons-material/Call";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

export default function Home() {
  const [activeSection, setActiveSection] = useState("home");
  const navs = [
    { title: "Home", id: "home", active: false },
    { title: "About Me", id: "about", active: false },
    { title: "Resume", id: "resume", active: false },
    { title: "Portfolio", id: "portfolio", active: false },
    { title: "Contact", id: "contact", active: false },
  ];
  const phoneNumber = "03326556262";
  const email = "annasahmed1609@gmail.com";
  const linkedin = "annas-ahmed-3a2846207";
  const github = "AnnasAhmed1";
  const details = [
    { Name: "Annas Ahmed" },
    { Email: "annasahmed1609@gmail.com" },
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
      year: "August 2022 - Present",
      title: "FREELANCING",
      institue: "Different Freelance Platforms",
      details: "More than 1 year experience in Freelancing",
    },
  ];
  const skills = [
    { title: "React Js", percentage: 80 },
    { title: "Next Js", percentage: 70 },
    // { title: "Next Js", percentage: 70 },
    { title: "JavaScript", percentage: 80 },
    { title: "Python", percentage: 75 },
    { title: "MongoDB", percentage: 65 },
    { title: "Firebase", percentage: 65 },
    { title: "Node Js/Express Js", percentage: 50 },
    { title: "HTML/CSS", percentage: 95 },
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
      image: fizz,
      liveLink: "https://fizzinnovations-portfolio.vercel.app/",
      githubLink: "Fizzinnovations_portfolio",
    },
    {
      image: appswaves,
      liveLink: "https://appswaves-3a882.web.app/",
      githubLink: "Appswaves_project",
    },
    {
      image: kardinal,
      liveLink: "https://kardinal-react-siraj.web.app/",
      githubLink: "Appswaves_project",
    },
    {
      image: afilename,
      liveLink: "https://afile-name-siraj.vercel.app/",
      githubLink: "AfileName-Siraj",
    },
  ];

  const handleSocialLinks = (link: string, email = false) => {
    !email ? window.open(link, "_blank") : (window.location.href = link);
  };

  const handleDownloadCV = () => {
    console.log("download");
    const downloadLink = "/Annas_Ahmed_resume.pdf";
    const a = document.createElement("a");
    a.href = downloadLink;
    a.download = "Annas_Ahmed_resume.pdf";
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
      <Head>
        <title>Annas Ahmed</title>
        <meta name="description" content="Generated by Annas Ahmed" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/profile.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </Head>
      <main className="flex">
        <ToastContainer />
        <Navbar
          navs={navs}
          socialLinks={socialLinks}
          activeSection={activeSection}
          setActiveSection={setActiveSection}
          handleSocialLinks={handleSocialLinks}
          scrollToSection={scrollToSection}
        />

        <div className="w-[calc(100%-250px)] max-lg:w-full ml-auto ">
          <Navbar
            navs={navs}
            socialLinks={socialLinks}
            handleSocialLinks={handleSocialLinks}
            mobile={true}
            setActiveSection={setActiveSection}
            scrollToSection={scrollToSection}
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
                  strings: ["I'm Annas Ahmed", "I'm a MERN Stack Developer"],
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
                  <span className="text-customPrimary">Annas Ahmed,</span> a
                  MERN Stack Developer
                </h1>
                <p>
                  A passionate MERN stack developer with a year of freelancing
                  experience specializing in React.js and Next.js. I have a
                  profound love for crafting efficient, user-friendly, and
                  visually appealing web applications. With a solid foundation
                  in modern web development technologies, I&apos;m dedicated to
                  transforming ideas into functional, responsive, and engaging
                  digital experiences.
                </p>
                <p>
                  Having delved into the world of web development, I&apos;ve not
                  only acquired technical skills but also developed a keen eye
                  for detail and a problem-solving mindset. My journey began
                  with a deep fascination for creating interactive front-end
                  designs that seamlessly integrate with powerful back-end
                  functionalities. This drive has led me to explore and master
                  the React.js and Next.js frameworks, which enable me to build
                  cutting-edge web applications that provide an exceptional user
                  experience.
                </p>
              </div>
              <div>
                {details.map((detail, index) => {
                  return (
                    <li
                      key={index}
                      className={`py-3 list-none  border-[#eaeaea] ${
                        index === details.length - 1 ? "" : "border-b"
                      }`}
                    >
                      <span className="font-[600] mr-2">
                        {Object.keys(detail)}:
                      </span>
                      {Object.values(detail)}
                    </li>
                  );
                })}
                <ButtonComp
                  text="Download CV"
                  className="mt-3"
                  onClick={() => {
                    handleDownloadCV();
                  }}
                />
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
              <div className="grid grid-cols-2 max-md:grid-cols-1 max-md:gap-6 gap-x-12 gap-y-8">
                {skills?.map((skill, index) => {
                  return (
                    <SkillComp
                      key={index}
                      title={skill.title}
                      percentage={skill?.percentage?.toString()}
                    />
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
                  <ProjectCard
                    key={index}
                    image={project.image}
                    liveLink={project.liveLink}
                    githubLink={project.githubLink}
                  />
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
                    +92 332 6556262
                  </p>
                  <p className="flex items-center gap-1 m-0">
                    <WhatsAppIcon className="text-customPrimary" />
                    +92 332 6556262
                  </p>
                  <p className="flex items-center gap-1 m-0">
                    <MailIcon className="text-customPrimary" />
                    annasahmed1609@gmail.com
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

import "./page.scss";

import { Chivo, Orbitron } from "next/font/google";
import Image from "next/image";
import { Project, ProjectProps } from "./components/project";
import { Skill } from "./components/skill";
import { Tech } from "./components/skill-icon";
import { Social } from "./components/social";

const orbitronRegular = Orbitron({ subsets: ["latin"], weight: "400" });
const orbitroSemibold = Orbitron({ subsets: ["latin"], weight: "600" });
const chivoBold = Chivo({ subsets: ["latin"], weight: "700" });
const heading2Class = "text-4xl mb-6 " + orbitroSemibold.className;

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-between gap-20 mb-28">
      <AboutSection />
      <div className="flex flex-col gap-10 px-6 lg:max-w-screen-xl lg:m-auto">
        <SkillsSection />
        <ProjectsSection />
      </div>
    </main>
  );
}

function SkillsSection() {
  const skills: { tech: Tech; level: number }[] = [
    { tech: "angular", level: 5 },
    { tech: "sass", level: 4 },
    { tech: "figma", level: 3 },
    { tech: "typescript", level: 5 },
    { tech: "react", level: 3 },
    { tech: "aws", level: 2 },
    { tech: "html", level: 5 },
    { tech: "node", level: 3 },
    { tech: "java", level: 2 },
  ];

  return (
    <>
      <section id="skills" className="mb-20">
        <h2 className={heading2Class}>SKILLS</h2>
        <div className="flex-1 flex flex-col lg:grid lg:grid-cols-3 gap-y-10 gap-x-20">
          {skills.map((skill, idx) => (
            <Skill {...skill} key={idx}></Skill>
          ))}
        </div>
      </section>
    </>
  );
}

function AboutSection() {
  const aboutSectionDesktop =
    "lg:flex-row lg:gap-16 lg:max-w-screen-xl lg:m-auto";
  const aboutSectionBase =
    "flex flex-col items-center lg:flex-row gap-10 px-6 w-full";
  const highlightClass = "highlight text-center " + chivoBold.className;
  const heading1Class =
    "text-5xl mb-3 text-center lg:text-start " + orbitronRegular.className;
  const titleClass = "dark text-2xl " + orbitroSemibold.className;

  return (
    <div className="about" id="about">
      <header className="flex flex-row items-center justify-between p-6 mb-20">
        <h4 className={titleClass}>&lt;Abhner/&gt;</h4>
        <nav className="md:flex gap-4 hidden">
          <a href="#about" className="font-semibold">
            ABOUT
          </a>
          <a href="#skills" className="font-semibold">
            SKILLS
          </a>
          <a href="#projects" className="font-semibold">
            PROJECTS
          </a>
          <a href="#contact" className="font-semibold">
            CONTACT
          </a>
        </nav>
      </header>
      <section className={`${aboutSectionBase} ${aboutSectionDesktop}`}>
        <Image
          className="object-cover flex-1 rounded-full max-w-28 sm:max-w-full lg:max-w-lg"
          src={"/img/me_square.jpg"}
          alt="Abhner"
          width={500}
          height={500}
        />
        <div className="flex-1 flex flex-col gap-3">
          <div>
            <h1 className={heading1Class}>HI,</h1>
            <h1 className={heading1Class}>Nice to meet you!</h1>
          </div>
          <div className="flex justify-center lg:justify-start">
            <Social type="simple" />
          </div>
          <div>
            <p className="text-2xl text-center lg:text-start mt-3 mb-3">
              I’m <span className={highlightClass}>Abhner Araujo</span>, full
              stack developer, coffee enthusiast, song addicted and professional
              movie watcher.
            </p>
            <p className="text-2xl text-center lg:text-start mt-1">
              I am a web developer with over 6 years of experience, passionately
              dedicated to creating impactful solutions. I am motivated by the
              constant challenge of learning and the desire to create meaningful
              digital experiences. My passion for web development goes beyond
              code; I focus on delivering intuitive and visually appealing UIs
              as well as clean and scalable solutions.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

function ProjectsSection() {
  const projects: ProjectProps["project"][] = [
    {
      title: "PORTFOLIO",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vehicula consequat ante, eget consectetur ipsum tristique nec",
      img: "/img/project1.jpg",
      link: "https://www.google.com",
      stack: ["react", "next", "typescript"],
    },
    {
      title: "BLOG",
      description: "Lorem ipsum dolor sit amet",
      img: "/img/project2.jpg",
      link: "https://www.google.com",
      stack: ["react", "next", "strapi", "typescript"],
    },
    {
      title: "AI QUIZ",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vehicula consequat ante, eget consectetur ipsum tristique nec",
      img: "/img/project2.jpg",
      link: "https://www.google.com",
      stack: ["angular", "openai", "typescript"],
    },
  ];
  return (
    <section id="projects">
      <h2 className={heading2Class + " text-center"}>PROJECTS</h2>
      <div className="flex-1 grid grid-cols-1 gap-10 lg:grid-cols-2">
        {projects.map((project, idx) => (
          <Project project={project} key={idx} />
        ))}
      </div>
    </section>
  );
}

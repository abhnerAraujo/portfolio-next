import { Chivo, Orbitron } from "next/font/google";
import Image from "next/image";
import { Tech } from "./components/atoms/skill-icon";
import { Project, ProjectProps } from "./components/project";
import { Skill } from "./components/skill";
import "./page.scss";

const orbitronRegular = Orbitron({ subsets: ["latin"], weight: "400" });
const orbitroSemibold = Orbitron({ subsets: ["latin"], weight: "600" });
const chivoBold = Chivo({ subsets: ["latin"], weight: "700" });
const heading2Class =
  "text-4xl text-center lg:text-start " + orbitroSemibold.className;

export default function Home() {
  const baseClass =
    "flex min-h-screen flex-col justify-between gap-20 mt-10 pl-6 pr-6 mb-10";
  const desktopClass = "lg:pl-20 lg:pr-20";

  return (
    <main className={`${baseClass} ${desktopClass}`}>
      <AboutSection></AboutSection>
      <SkillsSection></SkillsSection>
      <ProjectsSection />
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
      <section
        id="skills"
        className="mb-10 flex flex-col lg:flex-row lg:gap-28 align-center"
      >
        <h2 className={heading2Class}>SKILLS</h2>
        <div className="flex-1 grid grid-cols-3 gap-y-10 gap-x-20">
          {skills.map((skill, idx) => (
            <Skill {...skill} key={idx}></Skill>
          ))}
        </div>
      </section>
    </>
  );
}

function AboutSection() {
  const aboutSectionDesktop = "lg:flex-row lg:gap-16";
  const aboutSectionBase = "flex flex-col items-center lg:flex-row gap-10";
  const highlightClass = "highlight text-center " + chivoBold.className;
  const heading1Class =
    "text-5xl mb-3 text-center lg:text-start " + orbitronRegular.className;

  return (
    <section className={`${aboutSectionBase} ${aboutSectionDesktop}`}>
      <Image
        className="object-cover flex-1 rounded-full max-w-28 sm:max-w-full lg:max-w-lg"
        src={"/img/me_square.jpg"}
        alt="Abhner"
        width={500}
        height={500}
      />
      <div className="flex-1 flex flex-col">
        <h1 className={heading1Class}>HI,</h1>
        <h1 className={heading1Class}>Nice to meet you!</h1>
        <p className="text-2xl text-center lg:text-start mt-3">
          I’m <span className={highlightClass}>Abhner Araujo</span>, full stack
          developer, coffee enthusiast, song addicted and professional movie
          watcher.
        </p>
        <p className="text-2xl text-center lg:text-start mt-1">
          I am a web developer with over 6 years of experience, passionately
          dedicated to creating impactful solutions. I am motivated by the
          constant challenge of learning and the desire to create meaningful
          digital experiences. My passion for web development goes beyond code;
          I focus on delivering intuitive and visually appealing UIs as well as
          clean and scalable solutions.
        </p>
      </div>
    </section>
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
    <section id="projects" className="flex flex-row gap-10 justify-between">
      <div className="flex-1 grid grid-cols-1 gap-10 lg:grid-cols-2">
        {projects.map((project, idx) => (
          <Project project={project} key={idx} />
        ))}
      </div>
      <h2 className={heading2Class}>PROJECTS</h2>
    </section>
  );
}

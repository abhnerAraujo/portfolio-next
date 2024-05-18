import Image from "next/image";

export function SkillIcon({ tech, size = "medium" }: SkillIconProps) {
  const techItem = TechSkill[tech];
  const sizeClass =
    size === "small" ? "size-6" : size === "medium" ? "size-12" : "size-20";

  return (
    <Image
      title={techItem.description}
      src={techItem.icon}
      width={0}
      height={0}
      className={sizeClass}
      alt={techItem.description}
    ></Image>
  );
}

export type Tech =
  | "angular"
  | "sass"
  | "figma"
  | "typescript"
  | "react"
  | "aws"
  | "html"
  | "node"
  | "next"
  | "java"
  | "openai"
  | "strapi";
type Size = "small" | "medium" | "large";
interface TechItem {
  tech: Tech;
  icon: string;
  description: string;
}
export const TechSkill: { [key in Tech]: TechItem } = {
  angular: {
    tech: "angular",
    icon: "/skills/angular.svg",
    description: "Angular",
  },
  sass: { tech: "sass", icon: "/skills/sass.svg", description: "Sass" },
  figma: { tech: "figma", icon: "/skills/figma.svg", description: "Figma" },
  typescript: {
    tech: "typescript",
    icon: "/skills/typescript.svg",
    description: "TypeScript",
  },
  react: { tech: "react", icon: "/skills/react.svg", description: "React" },
  aws: { tech: "aws", icon: "/skills/aws.svg", description: "AWS" },
  html: { tech: "html", icon: "/skills/html.svg", description: "HTML" },
  node: { tech: "node", icon: "/skills/node.svg", description: "Node" },
  java: { tech: "java", icon: "/skills/java.svg", description: "Java" },
  next: { tech: "next", icon: "/skills/next.svg", description: "Next" },
  openai: { tech: "openai", icon: "/skills/openai.svg", description: "OpenAI" },
  strapi: { tech: "strapi", icon: "/skills/strapi.svg", description: "Strapi" },
};

interface SkillIconProps {
  tech: Tech;
  size: Size;
}

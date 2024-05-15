import Image from "next/image";
import "./skill.scss";

export function Skill({ skill, level }: { skill: string; level: number }) {
  const imageSrc = "/img/skills/" + skill + ".png";

  return (
    <>
      <div className="flex flex-row items-center gap-2">
        <Image src={imageSrc} width={50} height={50} alt={skill}></Image>
        <div className="skill-level">
          {[...Array(5)].map((_, i) => (
            <div className={`bar ${i < level ? "-filled" : ""}`} key={i}></div>
          ))}
        </div>
      </div>
    </>
  );
}

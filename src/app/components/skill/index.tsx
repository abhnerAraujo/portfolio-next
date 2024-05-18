import { SkillIcon, Tech } from "../skill-icon";
import "./styles.scss";

export function Skill({ tech, level }: SkillProps) {
  return (
    <>
      <div className="flex flex-row items-center gap-2">
        <SkillIcon tech={tech} size="medium"></SkillIcon>
        <div className="skill-level">
          {[...Array(5)].map((_, i) => (
            <div className={`bar ${i < level ? "-filled" : ""}`} key={i}></div>
          ))}
        </div>
      </div>
    </>
  );
}

interface SkillProps {
  tech: Tech;
  level: number;
}

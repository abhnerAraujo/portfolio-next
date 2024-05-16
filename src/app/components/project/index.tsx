"use client";
import variables from "@/styles/variables.module.scss";
import { TextButton } from "../atoms/button";
import { SkillIcon, Tech } from "../atoms/skill-icon";
import "./project.scss";

export function Project({ project }: ProjectProps) {
  return (
    <div className="project-card flex flex-col gap-4 rounded-lg shadow-lg transition-all w-full min-h-10 px-10 py-5 justify-between">
      <div className="flex flex-col gap-4">
        <h3 className="text-4xl text-start underline font-semibold italic">
          {project.title}
        </h3>
        <div className="flex flex-row gap-2">
          {project.stack.map((tech, idx) => (
            <SkillIcon tech={tech} size="small" key={idx}></SkillIcon>
          ))}
        </div>
      </div>
      <div className="flex-1">
        <p className="text-lg">{project.description}</p>
      </div>
      <div className="flex flex-col gap-4">
        <div
          className="w-full border-2 rounded-sm"
          style={{
            borderColor: variables.primaryColor,
          }}
        ></div>
        <div className="flex flex-row justify-end gap-2">
          <TextButton onClick={() => console.log("click")}>See Code</TextButton>
          <TextButton
            disabled={!!project.link}
            onClick={() => console.log("click")}
          >
            Open App
          </TextButton>
        </div>
      </div>
    </div>
  );
}

export interface ProjectProps {
  project: {
    title: string;
    description: string;
    img: string;
    link: string;
    stack: Tech[];
  };
}

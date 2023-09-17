import { FC } from "react";

import { AiFillProject } from "react-icons/ai";
import { IProject } from "@/utils/models";

import projectModule from "./project.module.scss";
import { Card, Content } from "..";

export const Project: FC<{ projects: IProject[] }> = ({ projects }) => {
  return (
    <section
      aria-label="Rıdvan Demirci project "
      className={projectModule.project}
      id="project"
    >
      <Content
        aria-labelledby="Rıdvan Demirci"
        aria-label="Rıdvan Demirci Project content Wrapper"
        className={projectModule.content}
      >
        <h2>
          <AiFillProject className={projectModule.projectImage} />
          Some Important Projects
        </h2>
        {projects.map((project, index) => (
          <Card key={`my-project-${index}`} {...project} />
        ))}
      </Content>
    </section>
  );
};

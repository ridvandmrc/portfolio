import { FC } from "react";

import { BsFillArrowRightCircleFill } from "react-icons/bs";

import cardModule from "./card.module.scss";

import { IProject } from "@/utils/models";

export const Card: FC<IProject> = ({ description, link, title }) => {
  return (
    <section aria-label={title} className={cardModule.card}>
      <a href={link} target="_blank">
        <h3 className={cardModule.projectTitle}>{title}</h3>
        <p className={cardModule.projectDesc}>{description}</p>
        <BsFillArrowRightCircleFill className={cardModule.arrow} />
        <div className={cardModule.indicator}></div>
      </a>
    </section>
  );
};

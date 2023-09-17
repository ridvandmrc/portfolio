import { FC } from "react";
import Image from "next/image";

import homeModule from "./home.module.scss";
import { Social } from "@/utils";

export const Home: FC = () => {
  return (
    <section
      aria-label="Rıdvan Demirci - Portfolio Home"
      className={homeModule.home}
      id="home"
    >
      <div className={homeModule.portfolio}>
        <div className={homeModule.information}>
          <p className={homeModule.desc}>
            Special website, Project, Blogs etc.
          </p>
          <h1 content="Rıdvan Demirci" className={homeModule.name}>
            Rıdvan Demirci
          </h1>
          <div className={homeModule.pointer}></div>
          <a
            href={Social.linkedin.link}
            target="_blank"
            className="secondary-button"
          >
            Concat me!
          </a>
        </div>
      </div>
      <Image
        className={homeModule.homeBg}
        src="/home-bg.svg"
        alt="Rıdvan Demirci Home Background"
        width="100"
        height="100"
      />
    </section>
  );
};

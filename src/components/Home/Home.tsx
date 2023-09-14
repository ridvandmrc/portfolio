import { FC } from "react";
import Image from "next/image";

import homeModule from "./home.module.scss";

export const Home: FC = () => {
  return (
    <section className={homeModule.home}>
      <div className={homeModule.portfolio}>
        <div className={homeModule.information}>
          <p className={homeModule.desc}>
            Special website, Project, Blogs etc.
          </p>
          <h1 className={homeModule.name}>Rıdvan Demirci</h1>
          <div className={homeModule.pointer}></div>
          <a href="#" className={homeModule.contactLink}>
            Concat me!
          </a>
        </div>
      </div>
      <Image
        className={homeModule.homeBg}
        src="/home-bg.svg"
        alt="home background"
        width="100"
        height="100"
      />
    </section>
  );
};

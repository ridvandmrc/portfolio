import { FC } from "react";
import Image from "next/image";

import {
  FaFacebook,
  FaTwitter,
  FaGithub,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";
import { RxDividerVertical } from "react-icons/rx";

import headerModule from "./header.module.scss";
import { PortfolioImage } from "@/assets";

export const Header: FC = () => {
  return (
    <>
      <header className={headerModule.header}>
        <section className={headerModule.portfolioName}>
          <PortfolioImage />
          <p aria-description="Rıdvan Demirci portfolio">Rıdvan Demirci</p>
        </section>
        <nav className={headerModule.navigation}>
          <ul>
            <li className={headerModule.active}>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Portfolio</a>
            </li>
            <li>
              <a href="#">Project</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </nav>
        <article className={headerModule.social}>
          <RxDividerVertical />
          <a href="#">
            <FaFacebook />
          </a>
          <a href="#">
            <FaTwitter />
          </a>
          <a href="#">
            <FaGithub />
          </a>
          <a href="#">
            <FaLinkedin />
          </a>
          <a href="#">
            <FaInstagram />
          </a>
        </article>
      </header>
      <Image
        className={headerModule.background}
        src="/header.png"
        alt="header background"
        width="100"
        height="100"
      />
    </>
  );
};

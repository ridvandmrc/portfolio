"use client";

import { FC, useState } from "react";
import Image from "next/image";

import { RxDividerVertical } from "react-icons/rx";

import headerModule from "./header.module.scss";
import { PortfolioImage } from "@/assets";
import { useIntersection } from "@/hooks";
import { PageType, Pages, Social } from "@/utils";

export const Header: FC = () => {
  const [selectedPage, setSelectedPage] = useState<PageType>(Pages.HOME);

  useIntersection(Pages.PORTFOLIO, () => setSelectedPage(Pages.PORTFOLIO));
  useIntersection(Pages.PROJECT, () => setSelectedPage(Pages.PROJECT));
  useIntersection(Pages.BLOG, () => setSelectedPage(Pages.BLOG));
  useIntersection(Pages.HOME, () => setSelectedPage(Pages.HOME));

  return (
    <>
      <header
        aria-label="Rıdvan Demirci portfolio header"
        aria-labelledby="Rıdvan Demirci"
        className={headerModule.header}
      >
        <section className={headerModule.portfolioName}>
          <a href="/#home">
            <PortfolioImage />
            <p aria-description="Rıdvan Demirci portfolio">Rıdvan Demirci</p>
          </a>
        </section>
        <nav className={headerModule.navigation}>
          <ul>
            {Pages.getMenu().map((menu, index) => (
              <li key={`menu-index-${index}`}>
                <a
                  className={selectedPage === menu ? headerModule.active : ""}
                  href={`/#${menu}`}
                >
                  {menu}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <article
          aria-label="Ridvan Demirci social "
          aria-labelledby="Ridvan Demirci"
          className={headerModule.social}
        >
          <RxDividerVertical />
          {Object.entries(Social).map(([key, value], index) => (
            <a key={`${key}-index-${index}`} href={value.link} target="_blank">
              {value.icon}
            </a>
          ))}
        </article>
      </header>
      <Image
        className={headerModule.background}
        src="/header.png"
        alt="Rıdvan Demirci Header backgroun"
        width="100"
        height="100"
        unoptimized
      />
    </>
  );
};

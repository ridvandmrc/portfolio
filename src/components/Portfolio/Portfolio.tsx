import { FC } from "react";
import Image from "next/image";

import PortfolioModule from "./portfolio.module.scss";

export const Portfolio: FC = () => {
  return (
    <section className={PortfolioModule.portfolio}>
      <div className={PortfolioModule.content}>
        <h2>My Portfolio</h2>
        <div style={{ display: "flex" }}>
          <Image
            className={PortfolioModule.portre}
            src="/portre.jpeg"
            alt="home background"
            width="100"
            height="100"
          />
          <div className={PortfolioModule.careerInfo}>
            <p aria-description="Ridvan demirci portfolio">
              After completing my web design program in high {"school's "}
              informatics department, I decided to pursue further studies in the
              same field. Subsequently, I enrolled in the Computer Engineering
              program at Gebze Technical University and graduated with
              distinction.
            </p>
            <p aria-description="Ridvan demirci portfolio">
              During my final year at university, I secured internship
              opportunities at esteemed companies such as TAI, PI.Works, and
              Inosens. Following my graduation, I embarked on my professional
              journey as a part-time employee at Accenture.
            </p>
            <p aria-description="Ridvan demirci portfolio">
              During my tenure at Accenture, I had the privilege of working
              across various platforms, affording me extensive experience in
              Backend, Frontend, and cloud projects, spanning a wide range of
              technologies. Presently, I am continuing my career as a Frontend
              developer.
            </p>
          </div>
        </div>
        <div className={PortfolioModule.buttonWrapper}>
          <a href="#" className={PortfolioModule.downloadResume}>
            Download Resume
          </a>
          <a href="#" className={PortfolioModule.contactLink}>
            Contact Me!
          </a>
        </div>
      </div>
    </section>
  );
};

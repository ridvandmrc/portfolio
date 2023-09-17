import Image from "next/image";
import { FC } from "react";

export const PortfolioImage: FC<{ width?: number; height?: number }> = ({
  height,
  width,
}) => (
  <Image
    src="/portfolio.svg"
    alt="Rıdvan Demirci portfolio"
    width={width || "50"}
    height={height || "50"}
    style={{ width: "3rem", height: "3rem" }}
  />
);

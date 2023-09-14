import Image from "next/image";
import { FC } from "react";

export const PortfolioImage: FC<{ width?: number; height?: number }> = ({
  height,
  width,
}) => (
  <Image
    src="/portfolio.svg"
    alt="ridvan demirci portfolio"
    width={width || "50"}
    height={height || "50"}
  />
);

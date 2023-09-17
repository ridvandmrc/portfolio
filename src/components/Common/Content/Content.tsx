import { FC, HTMLAttributes, ReactNode } from "react";

import contentModule from "./content.module.scss";

export const Content: FC<
  { children: ReactNode } & HTMLAttributes<HTMLElement>
> = ({ children, className, ...props }) => {
  return (
    <section className={`${contentModule.content} ${className}`} {...props}>
      {children}
    </section>
  );
};

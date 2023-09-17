export const Pages = {
  HOME: "home",
  PORTFOLIO: "portfolio",
  PROJECT: "project",
  BLOG: "blog",
  getMenu: function (): string[] {
    return Object.values(this).filter(
      (item) => typeof item === "string"
    ) as string[];
  },
} as const;

type TempPageType = typeof Pages;
type TempPageKeys = TempPageType[keyof TempPageType];
export type PageType = Extract<TempPageKeys, string>;

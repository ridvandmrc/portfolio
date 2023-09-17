import type { Metadata } from "next";
import "./global.scss";

import { Social } from "@/utils";

export const metadata: Metadata = {
  title: "Rıdvan Demirci - Portfolio",
  description:
    "Welcome to Ridvan Demirci's portfolio website. Explore a showcase of my creative work in web development, design, and more. Discover my passion for crafting digital experiences that leave a lasting impression.",
  authors: { name: "Ridvan Demirci", url: Social.linkedin.link },
  keywords: [
    "Web Developer",
    "Front-End Developer",
    "Web Designer",
    "Portfolio Website",
    "Creative Projects",
    "HTML/CSS",
    "JavaScript",
    "Responsive Design",
    "Website Development",
    "User Interface",
    "User Experience",
    "Coding Projects",
    "Ridvan Demirci",
    "Rıdvan Demirci",
    "RIDVAN DEMIRCI",
    "Web Development Portfolio",
    "Design Portfolio",
    "Rıdvan Demirci Portfolio",
    "Rıdvan Demirci Linkedin",
    "Rıdvan Demirci instagram",
    "Design tokens",
    "token wizard",
    "optimistic ui",
    "react",
    "lazy load",
    "smart search",
    "conditional rendering",
    "Interactive Websites",
  ],
  viewport: { width: 400, initialScale: 1 },
};

function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

export default RootLayout;

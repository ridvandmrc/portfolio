import { IProject } from "@/utils/models";
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json<IProject[]>([
    {
      title: "Token Wizard",
      description:
        "Token wizard is a powerful and versatile library for managing design tokens in your projects. Simplify your design system by centralizing colors, typography, spacing, and more, ensuring consistent styling across different platforms and applications.",
      link: "https://github.com/ridvandmrc/token-wizard",
    },
    {
      title: "Optimistic UI",
      description:
        "Optimistic UIs don’t wait for an operation to finish to update to the final state. They immediately switch to the final state, showing fake data for the time while the real operation is still in-progress",
      link: "https://github.com/ridvandmrc/optimistic-ui-react-query",
    },
    {
      title: "React Lazy Load",
      description:
        "Lazy loading is the technique of rendering only-needed or critical user interface items first, then quietly unrolling the non-critical items later. It is now fully integrated into core react library itself.",
      link: "https://github.com/ridvandmrc/react-lazy",
    },
    {
      title: "React Dashboard Application",
      description:
        "The project is a modern dashboard application implemented using React, which supports responsive design. Additionally, the project employs a unique icon approach.",
      link: "https://github.com/ridvandmrc/dashboard",
    },
    {
      title: "Node JS backend application",
      description:
        "In this project, an application was developed with a Node.js backend. All functions of the Node.js backend were utilized, including the use of both custom and pre-existing middleware.",
      link: "https://github.com/ridvandmrc/full-nodejs-backend",
    },
    {
      title: "Form Control with React",
      description:
        "In this project, I demonstrated how to manage forms in complex applications by utilizing React forms.",
      link: "https://github.com/ridvandmrc/form-control",
    },
  ]);
}

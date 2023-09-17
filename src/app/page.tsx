import React from "react";

import { Blog, Home, Portfolio, Project } from "@/components";
import { Header } from "@/components/Header/Header";

export default async function Page() {
  const projects = await getProject();
  const blogs = await getBlog();

  return (
    <React.Fragment>
      <Header />
      <Home />
      <Portfolio />
      <Project projects={projects} />
      <Blog blogs={blogs} />
    </React.Fragment>
  );
}

async function getProject() {
  const res = await fetch("http://localhost:3000/api/project", {
    cache: "force-cache",
  });
  const repo = await res.json();
  return repo;
}

async function getBlog() {
  const res = await fetch("http://localhost:3000/api/blog", {
    cache: "force-cache",
  });
  return await res.json();
}

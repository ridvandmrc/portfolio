import { FC } from "react";
import { BiLogoBlogger } from "react-icons/bi";

import blogModule from "./blog.module.scss";
import { Card, Content } from "../Common";
import { IProject } from "@/utils/models";

export const Blog: FC<{ blogs: IProject[] }> = ({ blogs }) => {
  return (
    <section
      aria-label="Rıdvan Demirci blog"
      className={blogModule.blog}
      id="blog"
    >
      <Content
        aria-labelledby="Rıdvan Demirci"
        aria-label="Rıdvan Demirci Blog content Wrapper"
        className={blogModule.content}
      >
        <div
          aria-labelledby="Rıdvan Demirci"
          aria-label="Ridvan Demirci blog header"
          className={blogModule.header}
        >
          <BiLogoBlogger />
          <h2>My Blog Posts</h2>
        </div>
        {blogs.map((blog, index) => (
          <Card key={`my-blog-${index}-${blog.title}`} {...blog} />
        ))}
      </Content>
    </section>
  );
};

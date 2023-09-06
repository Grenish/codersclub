import React from "react";
import { blogArticles } from "../data/blogs";
import BlogArticle from "./BlogArticle";
import { SectionWrapper } from "../hoc";

const Blogs = () => {
  return (
    <SectionWrapper role="region" aria-label="Blog Section">
      <h1 tabIndex="0" id="blogs-header">
        Our Blogs
      </h1>
      <ul aria-labelledby="blogs-header" role="list">
        {blogArticles.map((article) => (
          <li key={article.id}>
            <BlogArticle article={article} />
          </li>
        ))}
      </ul>
    </SectionWrapper>
  );
};

export default Blogs;

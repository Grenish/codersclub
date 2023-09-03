import React from 'react'
import { blogArticles } from "../data/blogs";
import BlogArticle from './BlogArticle';


const Blogs = () => {
  return (
    <div>
      {blogArticles.map((article) => (
        <BlogArticle key={article.id} article={article} />
      ))}
    </div>
  )
}

export default Blogs

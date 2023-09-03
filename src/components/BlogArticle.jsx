import React from 'react';

const BlogArticle = ({ article }) => {
  return (
    <div className="blog-article">
      <h1>{article.title}</h1>
      <p>Posted on: {article.postedOn}</p>
      <p>Posted by: {article.postedBy}</p>

      <div className="article-content">
        {article.content.map((section, index) => {
          if (section.type === 'paragraph') {
            return <p key={index}>{section.text}</p>;
          } else if (section.type === 'heading') {
            return <h2 key={index}>{section.text}</h2>;
          } else {
            return null; // Handle other content types as needed
          }
        })}
        {article.content[1].subPoints && (
          <ul>
            {article.content[1].subPoints.map((point, pointIndex) => (
              <li key={pointIndex}>{point}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default BlogArticle;

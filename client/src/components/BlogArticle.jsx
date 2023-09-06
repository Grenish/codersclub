import React from "react";
import { useParams } from "react-router-dom";
import { blogArticles } from "../data/blogs";
import { Link } from "react-router-dom";
import { codersclubFavicon } from "../assets";

const BlogArticle = () => {
  const { id } = useParams();
  const article = blogArticles.find(
    (article) => String(article.id) === String(id)
  );

  if (!article) {
    return (
      <p className="text-center text-xl text-error mt-8">
        Blog article not found.
      </p>
    );
  }
  return (
    <div className="p-8 lg:p-16 bg-gray-200 min-h-screen">
      <div className="mb-5">
        <Link to="/articles">
          <button className="bg-base-100 hover:bg-accent transition-colors p-2 flex items-center gap-2 rounded-xl">
            <img src={codersclubFavicon} alt="" className="w-7" /> Go Back
          </button>
        </Link>
      </div>
      <main className="max-w-4xl mx-auto">
        <h1 className="text-4xl text-neutral text-center font-bold mb-10">
          {article.title}
        </h1>
        <article className="space-y-8 text-gray-700 text-lg leading-6">
          <div className="flex justify-between items-center">
            <p className="font-bold">{article.postedBy}</p>
            <p className="text-neutral">{article.postedOn}</p>
          </div>

          {article.content.map((section, index) => {
            const Section = section.type === "heading" ? "h2" : "p";
            return (
              <div key={index} className="space-y-5">
                <Section
                  className={
                    section.type === "heading"
                      ? "text-2xl text-secondary font-bold"
                      : "text-lg leading-6"
                  }
                >
                  {section.text}
                </Section>
                {section.subPoints &&
                  section.subPoints.map((point, pointIndex) => (
                    <li key={pointIndex} className="ml-5 list-disc">
                      {point}
                    </li>
                  ))}
              </div>
            );
          })}
          <div className="flex space-x-3">
            {article.imageUrl &&
              article.imageUrl.map((imgUrl, index) => (
                <img
                  key={index}
                  src={imgUrl}
                  alt={`Image ${index + 1} for ${article.title}`}
                  className="w-28 object-cover rounded-md my-4"
                />
              ))}
          </div>
        </article>
      </main>
    </div>
  );
};

export default BlogArticle;

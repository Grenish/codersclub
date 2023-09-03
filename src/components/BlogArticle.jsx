import React from "react";
import { useParams } from "react-router-dom";
import { blogArticles } from "../data/blogs";
import { SectionWrapper } from "../hoc";

const BlogArticle = () => {
  const { id } = useParams();
  const article = blogArticles.find(
    (article) => String(article.id) === String(id)
  );

  if (!article) {
    return (
      <p className="text-center text-xl text-indigo-600 mt-8">
        Blog article not found.
      </p>
    );
  }
  return (
    <div className="p-8 lg:p-16 bg-gray-200 min-h-screen">
      <main className="max-w-4xl mx-auto">
        <h1 className="text-4xl text-indigo-800 text-center font-bold mb-10">
          {article.title}
        </h1>
        <article className="space-y-8 text-gray-700 text-lg leading-6">
          <div className="flex justify-between items-center">
            <p className="font-bold">{article.postedBy}</p>
            <p className="text-indigo-500">{article.postedOn}</p>
          </div>
          {article.content.map((section, index) => {
            const Section = section.type === "heading" ? "h2" : "p";
            return (
              <div key={index} className="space-y-5">
                <Section
                  className={
                    section.type === "heading"
                      ? "text-2xl text-indigo-800 font-bold"
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
        </article>
      </main>
    </div>
  );
};

export default BlogArticle;

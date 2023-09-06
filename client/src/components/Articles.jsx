import React from "react";
import { Link } from "react-router-dom";
import { blogArticles } from "../data/blogs";
import { SectionWrapper } from "../hoc";
import { codersclubFavicon } from "../assets";

const Articles = () => {
  return (
    <SectionWrapper>
      <div className="mb-5">
        <Link to="/">
          <button className="bg-base-100 hover:bg-gray-200 transition-colors p-2 flex items-center gap-2 rounded-xl">
            <img src={codersclubFavicon} alt="" className="w-7" /> Go Back
          </button>
        </Link>
      </div>
      <div className="my-8">
        <span className="flex justify-between">
          <h2 className="text-2xl font-semibold text-gray-700">All Articles</h2>
        </span>
        {blogArticles.map((article) => (
          <article
            key={article.id}
            className="rounded-xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 p-0.5 shadow-xl transition hover:shadow-sm my-4"
          >
            <div className="rounded-[10px] bg-white p-4 !pt-20 sm:p-6">
              <time className="block text-xs text-gray-500">
                {article.postedOn}
              </time>

              <Link to={`/article/${article.id}`}>
                <h3 className="mt-0.5 text-lg font-bold text-gray-900">
                  {article.title}
                </h3>
                <p className="mb-6">{article.content[0]?.text}</p>
              </Link>

              <div className="mt-4 flex flex-wrap gap-1">
                <span className="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-purple-600">
                  {article.postedBy}
                </span>
                <span className="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-purple-600">
                  {article.tags}
                </span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Articles;

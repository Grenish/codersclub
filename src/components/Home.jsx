import React from "react";
import { Link } from "react-router-dom";
import { blogArticles } from "../data/blogs";
import { members } from "../constant";
import { smitlogo } from "../assets";

const Home = () => {
  const sortedArticles = blogArticles.sort(
    (a, b) => new Date(b.postedOn) - new Date(a.postedOn)
  );
  const latestArticle = sortedArticles[0];

  const totalMembers = members.length;

  return (
    <div className="px-4 py-8 max-w-7xl mx-auto">
      <div className="">
        <img src={smitlogo} alt="SMIT Logo" className="w-[250px] mx-auto" />
      </div>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8 p-6">
        <div className="h-auto p-4 rounded-lg bg-gray-100 flex flex-col justify-center items-center">
          <h3 className="text-lg font-bold text-gray-600 mb-2">
            Total Meetings
          </h3>
          <p className="text-2xl font-bold text-gray-800">{latestArticle.id}</p>
        </div>
        <Link to="/members">
          <div className="h-auto p-4 rounded-lg bg-gray-100 flex flex-col justify-center items-center">
            <h3 className="text-lg font-bold text-gray-600 mb-2">
              Total Members
            </h3>
            <p className="text-2xl font-bold text-gray-800">{totalMembers}</p>
          </div>
        </Link>
        <div className="h-auto p-4 rounded-lg bg-gray-100 flex flex-col justify-center items-center">
          <h3 className="text-lg font-bold text-gray-600 mb-2">
            No. Of Workshops
          </h3>
          <p className="text-2xl font-bold text-gray-800">0</p>
        </div>
      </div>

      <div className="my-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-6 text-center">
          Latest
        </h2>
        <article
          key={latestArticle.id}
          className="rounded-xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 p-0.5 shadow-xl transition hover:shadow-sm"
        >
          <div className="rounded-[10px] bg-white p-4 !pt-20 sm:p-6">
            <time className="block text-xs text-gray-500">
              {latestArticle.postedOn}
            </time>

            <Link to={`/article/${latestArticle.id}`}>
              <h3 className="mt-0.5 text-lg font-bold text-gray-900">
                {latestArticle.title}
              </h3>
              <p className="mb-6">{latestArticle.content[0]?.text}</p>
            </Link>

            <div className="mt-4 flex flex-wrap gap-1">
              <span className="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-purple-600">
                {latestArticle.postedBy}
              </span>
              <span className="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-purple-600">
                {latestArticle.tags}
              </span>
            </div>
          </div>
        </article>
      </div>

      <div className="my-8">
        <span className="flex justify-between">
          <h2 className="text-2xl font-semibold text-gray-700">All Articles</h2>
          <Link to="/articles">
            <button className="text-sm font-ligh text-gray-700">
              View All
            </button>
          </Link>
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
    </div>
  );
};

export default Home;

import React from "react";
import { Link } from "react-router-dom";
import { SectionWrapper } from "../hoc";
import { blogArticles } from "../data/blogs";
import { smitlogo, codersclubLogo } from "../assets";

const Home = () => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center">
        <img src={smitlogo} alt="" className="w-[250px]"/>
        <img src={codersclubLogo} alt="" className="w-[250px]"/>
      </div>

      <div className="flex flex-col items-center justify-center py-10">
        {blogArticles.map((article) => (
          <div
            className="bg-primary max-w-md w-full px-8 py-6 shadow-lg text-gray-800 mb-10 rounded-xl"
            key={article.id}
          >
            <h2 className="text-2xl font-bold mb-4">{article.title}</h2>
            <p className="mb-6">{article.content[0]?.text}</p>
            <Link
              to={`/article/${article.id}`}
              style={{ textDecoration: "none" }}
            >
              <button className="bg-info hover:bg-blue-700 text-neutral font-bold py-2 px-4 rounded">
                Read Now
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;

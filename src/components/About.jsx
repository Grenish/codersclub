import React from "react";
import { SectionWrapper } from "../hoc";
import { missionPoints, offer } from "../constant";
import { smitlogo, codersclubFavicon } from "../assets";
import { Link } from "react-router-dom";


const About = () => {
  return (
    <>
      <SectionWrapper>
        <div className="mb-5">
          <Link to="/">
            <button className="bg-base-100 hover:bg-gray-200 transition-colors p-2 flex items-center gap-2 rounded-xl">
              <img src={codersclubFavicon} alt="" className="w-7" /> Go Back
            </button>
          </Link>
        </div>
        <div className="max-w-2xl mx-auto">
          <img src={smitlogo} alt="Logo" className="w-90 h-auto mb-8" />
          <div className="flex flex-col justify-center items-center space-y-10">
            <h1 className="text-4xl font-semibold text-gray-800 mb-6 text-center">
              About Us
            </h1>
            <p className="text-lg text-gray-700 text-center">
              Welcome to the Coders Club at Sikkim Manipal Institute of
              Technology (SMIT), where innovation meets determination, and
              coding is more than just a skill; it's a way of life. Established
              with the vision to foster a community of passionate tech
              enthusiasts, our club is a hub for aspiring programmers,
              developers, and problem solvers.
            </p>

            <h1 className="text-4xl font-semibold text-gray-800 mb-6 text-center">
              Who We Are?
            </h1>
            <p className="text-lg text-gray-700 text-center">
              The Coders Club at SMIT is a dynamic and inclusive community of
              students dedicated to exploring the world of coding, computer
              science, and technology. We are a diverse group of individuals
              united by our shared passion for all things digital. Whether
              you're a fresher just beginning your coding journey or an
              experienced developer looking to expand your skills, we provide a
              welcoming and supportive environment for everyone.
            </p>

            <h1 className="text-4xl font-semibold text-gray-800 mb-6 text-center">
              Our Mission
            </h1>
            <p className="text-lg text-gray-700 text-center">
              Our mission is simple: to inspire, educate, and empower
              individuals to harness the power of coding and technology. We
              believe that coding is not just about writing lines of code; it's
              about solving real-world problems, unleashing creativity, and
              shaping the future. At Coders Club, we aim to:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              {missionPoints.map((point, index) => (
                <li key={index}>
                  <span className="font-bold">{point.title}:</span>{" "}
                  {point.description}
                </li>
              ))}
            </ul>

            <h1 className="text-4xl font-semibold text-gray-800 mb-6 text-center">
              What We Offer:
            </h1>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              {offer.map((point, index) => (
                <li key={index}>
                  <span className="font-bold">{point.title}:</span>{" "}
                  {point.description}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
};

export default About;

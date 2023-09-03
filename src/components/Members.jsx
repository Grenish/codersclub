import React from "react";
import { SectionWrapper } from "../hoc";
import { members, coordinators } from "../constant";
import { github } from "../assets";

const Members = () => {
  return (
    <SectionWrapper>
      <span className="text-xl font-extrabold underline">
        <h1>Coordinators of coderclub</h1>
      </span>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 p-5">
        {coordinators.map((coordinator) => {
          return (
            <div
              key={coordinator.id}
              className="bg-base-100 rounded-lg shadow-md p-6 flex flex-col items-center transform hover:scale-105 transition-transform"
            >
              <img
                src={coordinator.photoUrl}
                alt={coordinator.name}
                className="w-24 h-24 rounded-full object-cover mb-4 border-2 border-secondary"
              />
              <h3 className="text-xl font-bold text-neutral">
                {coordinator.name}
              </h3>
            </div>
          );
        })}
      </div>
      <div className="text-xl font-extrabold underline">
        <h1>Members of coderclub</h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 p-5">
        {members.map((member) => {
          return (
            <div
              key={member.id}
              className="bg-base-100 rounded-lg shadow-md p-6 flex flex-col items-center transform hover:scale-105 transition-transform"
            >
              <img
                src={member.photoUrl}
                alt={member.name}
                className="w-24 h-24 rounded-full object-cover mb-4 border-2 border-secondary"
              />
              <h3 className="text-lg font-bold text-neutral">{member.name}</h3>
              <div className="">
                <a href={member.github} target="_blank">
                  <img src={github} alt="github" className="w-5 h-5 object-cover my-2" />
                </a>
              </div>
            </div>
            
          );
        })}
      </div>
    </SectionWrapper>
  );
};

export default Members;

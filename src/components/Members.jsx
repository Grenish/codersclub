import React from "react";
import { SectionWrapper } from "../hoc";
import { members } from "../constant";

const Members = () => {
  return (
    <SectionWrapper>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 p-5">
        {members.map((member) => {
          return (
            <div
              key={member.id}
              className="overflow-hidden shadow-lg rounded-lg w-full md:w-auto cursor-pointer m-auto bg-white transition-transform ease-in-out duration-500 hover:scale-105"
            >
              <img
                className="w-full h-56 object-cover"
                src={member.photoUrl}
                alt={member.name}
              />
              <div className="p-4">
                <h1 className="text-gray-900 font-bold text-xl mb-2 text-center">
                  {member.name}
                </h1>
              </div>
            </div>
          );
        })}
      </div>
    </SectionWrapper>
  );
};

export default Members;

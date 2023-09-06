import React, { useState } from "react";
import { SectionWrapper } from "../hoc";
import { members, coordinators } from "../constant";
import { github } from "../assets";
import { Link } from "react-router-dom";
import { codersclubFavicon } from "../assets";

const Members = () => {
  const sortedMembers = [
    ...members.sort((a, b) => a.name.localeCompare(b.name)),
  ];
  const [searchText, setSearchText] = useState("");
  const totalMembers = members.length;

  const membersFiltered = searchText
    ? sortedMembers.filter((member) =>
        member.name.toLowerCase().includes(searchText.toLowerCase())
      )
    : sortedMembers;

  const handleSearchChange = (e) => {
    setSearchText(e.target.value);
  };

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
        <span className=" flex justify-center text-xl font-extrabold underline">
          <h1>Co-ordinators</h1>
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
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 relative">
          <div className="flex items-center space-x-4">
            <h1 className="text-xl font-extrabold underline">Members</h1>
            <p className="text-sm">{totalMembers}</p>
          </div>
          <input
            type="search"
            name="memberSearch"
            placeholder="search member"
            value={searchText}
            onChange={handleSearchChange}
            className="p-1 rounded-lg text-sm border-2 border-accent outline-none  sm:absolute sm:right-0"
            aria-label="Search members"
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 p-5">
          {membersFiltered.map((member) => {
            return (
              <div
                key={member.id}
                className="bg-base-100 rounded-lg shadow-md p-4 flex flex-col items-center transform hover:scale-105 transition-transform"
              >
                <img
                  src={member.photoUrl}
                  alt={member.name}
                  className="w-24 h-24 rounded-full object-cover mb-4 border-2 border-secondary"
                />
                <h3 className="text-md font-bold text-neutral">
                  {member.name}
                </h3>
                <div className="">
                  <a href={member.github} target="_blank">
                    <img
                      src={github}
                      alt="github"
                      className="w-5 h-5 object-cover my-2"
                    />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </SectionWrapper>
    </>
  );
};

export default Members;

import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { codersclubLogo } from "../assets";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-base-100 shadow-md w-full px-6 py-3">
      <nav className="container w-11/12 md:w-10/12 m-auto flex flex-wrap items-center justify-between p-3">
        <Link to="/" className="text-gray-800 text-xl font-bold">
          <img src={codersclubLogo} alt="Company Logo" className="w-[150px]" />
        </Link>

        <div className="block md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex items-center px-3 py-2"
          >
            {menuOpen ? (
              <CloseIcon style={{ fontSize: 30 }} />
            ) : (
              <MenuIcon style={{ fontSize: 30 }} />
            )}
          </button>
        </div>

        <div
          className={`${
            menuOpen ? "" : "hidden"
          } w-full md:flex md:items-center md:w-auto mt-2 md:mt-0`}
        >
          <div className="text-sm md:flex-grow">
            <Link
              to="/about"
              className="block mt-4 md:inline-block md:mt-0 text-gray-700 hover:text-gray-800 mx-3"
            >
              About
            </Link>
            <Link
              to="/members"
              className="block mt-4 md:inline-block md:mt-0 text-gray-700 hover:text-gray-800 mx-3"
            >
              Members
            </Link>
          </div>
          <div className="relative mx-3">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
              <SearchIcon className="h-5 w-5" />
            </span>
            <input
              type="search"
              name="search"
              id="search"
              className="py-2 pl-10 pr-4 text-sm rounded-md text-gray-700 placeholder-gray-600"
              aria-label="Search"
              placeholder="Search"
            />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

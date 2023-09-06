import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { codersclubLogo2 } from "../assets";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-base-100 shadow-md w-full px-2 sm:px-6 py-3">
      <nav className="container w-11/12 md:w-10/12 m-auto flex flex-wrap items-center justify-between p-2 sm:p-3">
        <Link to="/" className="text-gray-800 text-xl font-bold">
          <img src={codersclubLogo2} alt="Company Logo" className="w-[150px]" />
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
              to="/"
              className="block mt-4 md:inline-block md:mt-0 text-gray-700 hover:text-gray-800 mx-3"
            >
              Home
            </Link>
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
            <Link
              to="/contact"
              className="block mt-4 md:inline-block md:mt-0 text-gray-700 hover:text-gray-800 mx-3"
            >
              Contact Us
            </Link>
          </div>
          
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

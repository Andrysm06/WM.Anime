import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <nav className="bg-transparent p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo Section */}
        <div className="flex items-center">
          <a href="/">
            <span className="text-white text-2xl font-extrabold ml-2 hover:text-emerald-300">
              WM.Anime
            </span>
          </a>
        </div>

        {/* Navigation Links */}
        <div className="flex space-x-6">
          <a
            href="/"
            className="text-white text-lg hover:text-emerald-300 transition-colors duration-300"
          >
            Home
          </a>
          <a
            href="/About"
            className="text-white text-lg hover:text-emerald-300 transition-colors duration-300"
          >
            About
          </a>
          <a
            href="/Service"
            className="text-white text-lg hover:text-emerald-300 transition-colors duration-300"
          >
            Service
          </a>
          <a
            href="/Contact"
            className="text-white text-lg hover:text-emerald-300 transition-colors duration-300"
          >
            Contact
          </a>

          {/* Notification Icon */}
          <FontAwesomeIcon
            icon={faBell}
            className="text-white text-xl cursor-pointer hover:text-emerald-300 transition-colors duration-300"
          />

          {/* Login Button */}
          <button className="bg-transparent border-2 border-white text-white text-lg font-semibold py-1 px-6 rounded hover:bg-emerald-300 hover:text-black transition duration-300">
            <a href="/" className="block w-full text-center">
              Login
            </a>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

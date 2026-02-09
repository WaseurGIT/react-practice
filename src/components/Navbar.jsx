import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = (
    <>
      <li className="hover:text-orange-500 transition">
        <Link to="/" onClick={() => setIsOpen(false)}>
          Home
        </Link>
      </li>
      <li className="hover:text-orange-500 transition">
        <Link to="/soups" onClick={() => setIsOpen(false)}>
          Soups
        </Link>
      </li>
      <li className="hover:text-orange-500 transition">
        <Link to="/dishes" onClick={() => setIsOpen(false)}>
          Dishes
        </Link>
      </li>
      <li className="hover:text-orange-500 transition">
        <Link to="/drinks" onClick={() => setIsOpen(false)}>
          Drinks
        </Link>
      </li>
      <li className="hover:text-orange-500 transition">
        <Link to="/fries" onClick={() => setIsOpen(false)}>
          Fries
        </Link>
      </li>
    </>
  );

  return (
    <div className="fixed top-2 left-1/2 -translate-x-1/2 z-50 w-[95%] md:w-[90%] lg:max-w-[1300px]">
      <div className="bg-gray-200 rounded-2xl shadow px-4 md:px-10 py-2">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <h1 className="text-orange-500 text-2xl md:text-3xl font-semibold momo-signature-regular">
            Foodie
          </h1>

          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-6 text-sm text-black dancing-script">
            {links}
          </ul>

          {/* Hamburger */}
          <button
            className="md:hidden flex flex-col gap-1"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            <span
              className={`w-6 h-0.5 bg-black transition-transform duration-300 ${
                isOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`w-6 h-0.5 bg-black transition-opacity duration-300 ${
                isOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`w-6 h-0.5 bg-black transition-transform duration-300 ${
                isOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            isOpen ? "max-h-60 mt-4 border-t border-gray-300" : "max-h-0"
          }`}
        >
          <ul className="flex flex-col gap-4 py-4 text-sm text-black dancing-script">
            {links}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

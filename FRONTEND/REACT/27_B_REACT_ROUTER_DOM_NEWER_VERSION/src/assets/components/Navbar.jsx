import React from "react";
import { Link, NavLink } from "react-router-dom";
const Navbar = () => {
  const arr = ["a", "b", "c", "d"];
  return (
    <>
      <div className="bg-amber-700 text-white font-bold flex gap-10 text-3xl p-3">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "text-black" : "")}
        >
          Home
        </NavLink>

        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? "text-black" : "")}
        >
          About
        </NavLink>

        <NavLink
          to="/contact"
          className={({ isActive }) => (isActive ? "text-black" : "")}
        >
          Contact
        </NavLink>

        {/* help page */}
        <NavLink
          to="/help"
          className={({ isActive }) => (isActive ? "text-black" : "")}
        >
          Help
        </NavLink>
      </div>
    </>
  );
};

export default Navbar;

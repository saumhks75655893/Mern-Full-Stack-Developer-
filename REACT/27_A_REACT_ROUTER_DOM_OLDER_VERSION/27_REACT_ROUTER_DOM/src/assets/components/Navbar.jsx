import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
const Navbar = () => {
  const navigate = useNavigate();

  const isLoggedIn = true;
  function handleClick() {
    if (isLoggedIn) navigate("/about");
  }

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

        {/* dynamic routing multipal items in a single page */}
        {arr.map((item) => {
          return (
            <NavLink
              key={item}
              to={`/contact/${item}`}
              className={({ isActive }) => (isActive ? "text-black" : "")}
            >
              {item}
            </NavLink>
          );
        })}

        {/* help page */}
        <NavLink
          to="/help"
          className={({ isActive }) => (isActive ? "text-black" : "")}
        >
          Help
        </NavLink>
      </div>

      <button
        className="p-2 border-black border-2 m-3 rounded-xl bg-black text-green-400 font-bold"
        onClick={handleClick}
      >
        Navigate to About
      </button>
    </>
  );
};

export default Navbar;

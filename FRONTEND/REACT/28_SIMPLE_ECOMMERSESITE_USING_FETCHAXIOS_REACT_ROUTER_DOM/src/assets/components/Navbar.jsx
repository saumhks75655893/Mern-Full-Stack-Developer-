import React from "react";
import { NavLink } from "react-router-dom";
import Products from "./Products";
const Navbar = () => {
  return (
    <div className="w-full h-20 bg-yellow-500 flex items-center gap-30">
      <img
        className="w-20 ml-10 p-3"
        src="https://api.innque.com/v1/files/mweeb/7fc9ebc846ee9498211b_ChatGPT_Image_Apr_23,_2026,_07_45_10_PM.png"
        alt=""
      />
      <div className=" text-black font-bold text-2xl flex gap-10">
        <HandleNav val={"/"} title={"Home"} />
        <HandleNav val={"/product"} title={"Products"} />
      </div>
    </div>
  );
};

function HandleNav({ val, title }) {
  return (
    <NavLink
      className={({ isActive }) => (isActive ? "text-blue-700" : "")}
      to={val}
    >
      {title}
    </NavLink>
  );
}

export default Navbar;

import React, { useState } from "react";
// import { GoDash } from "react-icons/go";
import { GoChevronLeft } from "react-icons/go";
import Modal from "./Modal";
const Navbar = ({ isModalOpen, setIsModalOpen }) => {
  const obj = {
    modal: <Modal />,
  };

  function openModal(type) {
    setIsModalOpen((prev) => (prev = type));
  }

  function closeModal() {
    setIsModalOpen((prev) => (prev = ""));
  }

  return (
    <div
      style={{ padding: "20px 40px" }}
      className="max-[700px]: flex items-center relative w-screen h-14 bg-green-400 justify-between"
    >
      <div className="absolute top-0 left-0 transition duration-500 ease-in-out ">
        {isModalOpen ? obj[isModalOpen] : null}
      </div>

      <h1 className="text-3xl font-bold text-tomato-500 shadow-white shadow-2xl">
        Logo
      </h1>
      <div className="max-[700px]:hidden flex items-center gap-20">
        <a href="#" className="text-white hover:text-gray-300">
          Home
        </a>
        <a href="#" className="text-white hover:text-gray-300">
          About
        </a>
        <a href="#" className="text-white hover:text-gray-300">
          Contact
        </a>
        <a href="#" className="text-white hover:text-gray-300">
          Queries
        </a>
      </div>
      <button
        style={{ padding: "10px 20px" }}
        className="max-[700px]:hidden rounded-2xl bg-white font-semibold hover:bg-white/60 "
      >
        Login
      </button>

      <button
        style={{ padding: "10px 20px" }}
        onClick={() => openModal("modal")}
        className="max-[700px]:flex hidden flex-col  text-4xl rounded-2xl  font-semibold active:scale-2 transition-all duration-200"
      >
        <GoChevronLeft />

        {/* <GoDash />

        <GoDash /> */}
      </button>
    </div>
  );
};

export default Navbar;

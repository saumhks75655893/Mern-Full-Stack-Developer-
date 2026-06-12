import React from "react";

const Modal = () => {
  return (
    <div
      style={{ padding: "10px 20px" }}
      className="fixed flex  flex-col justify-around top-0 left-0  w-[50%] h-screen bg-black gap-40 pt-10 transition-all duration-500 transition-ease-in-out"
    >
      <div className="flex flex-col gap-5 text-center text-2xl font-bold text-black transition-all duration-500 transition-ease-in-out">
        <a
          style={{ padding: "10px 20px" }}
          href="#"
          className="text-black font-bold  hover:text-white hover:bg-green-800  bg-amber-300  rounded-lg"
        >
          Home
        </a>
        <a
          style={{ padding: "10px 20px" }}
          href="#"
          className="text-black  hover:text-white hover:bg-green-800 bg-amber-300 rounded-lg"
        >
          About
        </a>
        <a
          style={{ padding: "10px 20px" }}
          href="#"
          className="text-black  hover:text-white hover:bg-green-800 bg-amber-300 rounded-lg"
        >
          Contact
        </a>
        <a
          style={{ padding: "10px 20px" }}
          href="#"
          className="text-black hover:text-white hover:bg-green-800 bg-amber-300  rounded-lg"
        >
          Queries
        </a>
      </div>
      <button
        style={{ paddingTop: "10px", paddingBottom: "10px" }}
        className=" rounded-2xl bg-white font-bold  text-2xl hover:bg-white/60 "
      >
        Login
      </button>
    </div>
  );
};

export default Modal;

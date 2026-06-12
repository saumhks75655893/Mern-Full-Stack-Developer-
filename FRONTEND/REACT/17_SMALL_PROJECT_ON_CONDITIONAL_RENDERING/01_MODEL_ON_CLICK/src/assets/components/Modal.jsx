import React from "react";
import Button from "./Button";

const Modal = ({ title, data, closeModal }) => {
  return (
    <div className="w-screen h-screen flex items-center justify-center m-auto  bg-black relative p-2">
      <div className="absolute right-1 top-1 text-2xl">
        <Button onClick={closeModal} className="" data="❌" color="gray" />
      </div>

      <div className="w-[70%] h-[70%] bg-gray-900 rounded-3xl flex flex-col  gap-15 items-center justify-center content-center">
        <h1 className="text-white font-bold text-4xl ">{title}</h1>
        <p className="text-white text-3xl  ">{data}</p>

        <div className="flex  gap-15">
          <Button data="Yes" color="green" />
          <Button data="No" color="red" />
        </div>
      </div>
    </div>
  );
};

export default Modal;

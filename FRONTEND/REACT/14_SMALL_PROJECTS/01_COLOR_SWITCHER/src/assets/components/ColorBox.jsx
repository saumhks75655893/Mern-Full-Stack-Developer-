import React, { useState } from "react";

const ColorBox = ({ color }) => {
  return (
    <div className="">
      <div
        className="w-[300px] h-[300px] rounded-[20px] overflow-hidden text-gray-500 text-3xl font-bold content-center"
        style={{ backgroundColor: color }}
      >
        {color.toUpperCase()}
      </div>
    </div>
  );
};

export default ColorBox;

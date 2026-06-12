import React from "react";
import B from "./B";
import C from "./C";

const A = () => {
  return (
    <div className="bg-black text-white p-10 mt-5">
      A
      <B />
      <C />
    </div>
  );
};

export default A;

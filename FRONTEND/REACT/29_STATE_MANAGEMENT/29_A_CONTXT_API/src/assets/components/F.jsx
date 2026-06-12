import React from "react";
import { useMyContext } from "./MyContext";

const F = () => {
  const { setCount } = useMyContext();
  return (
    <div className="bg-green-500 p-10 ">
      F
      <button
        className="bg-black text-white px-3  py-2 rounded-2xl"
        onClick={() => setCount((prev) => prev + 1)}
      >
        Increment Count
      </button>
    </div>
  );
};

export default F;

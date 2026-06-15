import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const Cards = () => {
  const [count, setCount] = useState(0);
  // function increment() {
  //   setCount(count + 1);
  //   setCount(count + 1);
  //   setCount(count + 1);
  //   setCount(count + 1);
  //   setCount(count + 1);
  // }

  // // FUNCTIONAL UPDATES

  // function increment() {
  //   setCount(function (prev) {
  //     console.log(prev);
  //     return prev + 1;
  //   });
  // }

  // function increment() {
  //   setCount((prev) => prev + 1);
  //   setCount((prev) => prev + 1);
  //   setCount((prev) => prev + 1);
  //   setCount((prev) => prev + 1);
  //   setCount((prev) => prev + 1);
  // }

  useEffect(() => {
    console.log(count);
  }, [count]);

  return (
    <div className="flex flex-col  gap-3 items-center  bg-black/60 justify-center w-full h-50 overflow-hidden">
      <h1 className="text-7xl font-bold">{count}</h1>
      <button
        onClick={increment}
        className="p-4 font-bold text-black text-3xl bg-white"
      >
        Increment
      </button>
    </div>
  );
};

export default Cards;

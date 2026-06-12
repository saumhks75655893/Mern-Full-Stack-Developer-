import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);
  const [decVal, setDecVal] = useState(0);

  function increment() {
    setCount(count + 1);
  }

  function decrement() {
    setDecVal(decVal - 1);
  }

  useEffect(() => {
    console.log("Ye useEffect hai");
  }, [decVal]);

  return (
    <div className="flex flex-col  gap-3 items-center  bg-black/60 justify-center w-full h-[100vh] overflow-hidden">
      <h1 className="text-7xl font-bold">{count}</h1>

      <button
        onClick={increment}
        className="p-4 font-bold text-black text-3xl bg-white"
      >
        Increment
      </button>
      <h1 className="text-7xl font-bold">{decVal}</h1>
      <button
        onClick={decrement}
        className="p-4 font-bold text-black text-3xl bg-white"
      >
        Decrement
      </button>
    </div>
  );
};

export default App;

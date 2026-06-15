import React, { useEffect } from "react";
import { useSelector } from "react-redux";

const Increment = () => {
  const count = useSelector((state) => state.ProductReducer.count);
  // console.log(count);

  useEffect(() => {
    console.log("rerender hua");
  }, [count]);
  return (
    <div>
      <hr />
      <h1>Count</h1>
      <hr />
      <h2>{JSON.stringify(count)}</h2>
    </div>
  );
};

export default Increment;

import React from "react";
import { useSelector } from "react-redux";

const Increment = () => {
  const count = useSelector((state) => state.count);
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

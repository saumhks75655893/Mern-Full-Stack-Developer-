import React from "react";

const Ternary = ({ boolValue, setTrueFalse }) => {
  function changeBool() {
    {
      boolValue === true
        ? setTrueFalse((prev) => (prev = false))
        : setTrueFalse((prev) => (prev = true));
    }
  }

  const isLogedIn = { boolValue };
  return (
    <div>
      {isLogedIn ? <h1>LOgged In </h1> : <h1> Please Login</h1>}

      <button onClick={changeBool}>Click Me</button>
    </div>
  );
};

export default Ternary;

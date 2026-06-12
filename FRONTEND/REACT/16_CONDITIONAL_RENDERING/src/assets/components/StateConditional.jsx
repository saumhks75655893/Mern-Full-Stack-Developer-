import React from "react";

const StateConditional = ({ toggle, setToggle }) => {
  return (
    <div>
      <button
        onClick={() => {
          setToggle(!toggle);
        }}
      >
        Toggle
      </button>

      {toggle ? <h1>Toggle True hai. </h1> : null}
    </div>
  );
};

export default StateConditional;

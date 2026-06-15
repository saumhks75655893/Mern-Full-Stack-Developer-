import React, { useState } from "react";

const ClearUsingStateInput = () => {
  const [state, setState] = useState("");
  console.log(state);
  return (
    <>
      <div className="mb-3 flex items-center gap-5">
        <input
          type="text"
          value={state}
          placeholder="Enter Your Name"
          onChange={(e) => {
            setState(e.target.value);
          }}
        />

        <button onClick={() => setState("")} className="ml-5">
          Reset
        </button>
      </div>
      <h1 className="text-3xl font-bold text-red-500 mt-10 uppercase">
        {state}
      </h1>
    </>
  );
};

export default ClearUsingStateInput;

import React from "react";
import { useState } from "react";

const MappingConditional = () => {
  const [status, setStatus] = useState("loading");

  const obj = {
    loading: <h1>Loading....</h1>,
    error: <h1>Some error occured... </h1>,
    success: <h1>File loaded successfully...</h1>,
  };

  // if (status) {
  //   return obj[status];
  // }
  return (
    <div>
      {status ? obj[status] : null}
      <button onClick={() => setStatus((prev) => (prev = "loading"))}>
        Loading
      </button>
      <button onClick={() => setStatus((prev) => (prev = "success"))}>
        Success
      </button>
      <button onClick={() => setStatus((prev) => (prev = "error"))}>
        Error
      </button>
    </div>
  );
};

export default MappingConditional;

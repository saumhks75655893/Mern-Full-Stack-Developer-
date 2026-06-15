import React from "react";

const Result = ({ score }) => {
  return (
    <div className="mt-8 rounded-3xl p-5 bg-green-900 shadow-white">
      <h1 className="result">Result</h1>
      <h2 className="score content-center items-center">
        Your score is{" "}
        <span className="text-5xl text-amber-800 font-bold"> {score}</span>
      </h2>
    </div>
  );
};

export default Result;

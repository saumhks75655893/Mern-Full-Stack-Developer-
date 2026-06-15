import React, { useState } from "react";
import Timer from "./components/Timer";
import Questions from "./components/Questions";
import Result from "./components/Result";

const App = () => {
  const [isover, setIsOver] = useState(false);
  const [score, setScore] = useState(0);

  return (
    <div className="h-screen w-[70vw] content-center ">
      {!isover ? (
        <>
          <Timer setIsOver={setIsOver} />
          <Questions setIsOver={setIsOver} setScore={setScore} />
        </>
      ) : (
        <Result score={score} />
      )}
    </div>
  );
};

export default App;

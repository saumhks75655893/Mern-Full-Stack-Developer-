import React, { useEffect, useState } from "react";
import questions from "./questions.json";
import "../App.css";

const Questions = ({ setIsOver, setScore }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleOptionClick = (option) => {
    if (questions[currentIndex].answer === option) {
      setScore((prev) => prev + 1);
    }

    if (currentIndex < questions.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      setIsOver((prev) => (prev = true));
    }
  };

  return (
    <div className="p-8  rounded-2xl mt-8 mb-5 bg-green-800">
      <h1> {questions[currentIndex].question} </h1>

      <div className="flex flex-col mt-10 mb-4 gap-6 w-[90%] content-center m-auto">
        {questions[currentIndex].options.map((elem) => {
          return (
            <button
              onClick={() => handleOptionClick(elem)}
              key={elem}
              className="text-3xl border-2 rounded-3xl bg-amber-200 text-black font-semibold p-5"
            >
              {elem}
            </button>
          );
          console.log(elem);
        })}
      </div>
    </div>
  );
};

export default Questions;

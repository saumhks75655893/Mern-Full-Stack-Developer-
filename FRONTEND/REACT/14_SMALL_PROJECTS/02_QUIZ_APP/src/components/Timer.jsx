import React, { useEffect, useState } from "react";

const Timer = ({ setIsOver }) => {
  const [timer, setTimer] = useState(5);
  const [formatedString, setFormatedString] = useState("");

  //useEffect for timer to show the time is decreasing
  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimer((prev) => {
        if (prev <= 0) {
          clearInterval(intervalId);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  }, []);

  // useEffect for timer formatting on each timer change
  useEffect(() => {
    if (timer === 0) {
      setIsOver(true);
    }
    let formatedTimer = `${Math.floor(timer / 60)
      .toString()
      .padStart(2, 0)} : ${(timer % 60).toString().padStart(2, 0)}`;

    setFormatedString(formatedTimer);
  }, [timer]);

  return (
    <div className="p-5 text-4xl rounded-2xl bg-amber-500 font-bold text-black/60">
      ⏲ Timer : {formatedString}
    </div>
  );
};

export default Timer;

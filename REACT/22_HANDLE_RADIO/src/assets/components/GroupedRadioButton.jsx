import React from "react";
import { useState } from "react";

const GroupedRadioButton = () => {
  const [gender, setGender] = useState("male");
  const genders = ["male", "female", "other", "prefer not to say"];
  const webDev = [
    "html",
    "css",
    "js",
    "react",
    "node.js",
    "next.js",
    "express.js",
    "mongodb",
    "docker",
    "aws",
  ];
  return (
    <div
      style={{ padding: "20px" }}
      className="text-2xl flex flex-col gap-5 p-[20px]"
    >
      {webDev.map((item) => {
        return (
          <label htmlFor={item} key={item}>
            <input
              type="radio"
              id={item}
              name="gender"
              value={item}
              checked={gender === item}
              onChange={(e) => setGender(e.target.value)}
            />
            {item}
          </label>
        );
      })}
    </div>
  );
};

export default GroupedRadioButton;

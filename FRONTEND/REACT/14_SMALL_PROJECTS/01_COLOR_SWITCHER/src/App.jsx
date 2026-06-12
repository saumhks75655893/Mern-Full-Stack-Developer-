import React, { useState } from "react";
import Button from "./assets/components/Button";
import ColorBox from "./assets/components/ColorBox";

const App = () => {
  let colorArr = [
    "red",
    "black",
    "white",
    "pink",
    "tomato",
    "green",
    "blue",
    "orange",
    "aqua",
    "yellow",
  ];

  const [color, setColor] = useState("transparent");

  return (
    <div className="flex flex-col gap-10 items-center justify-center">
      <h1>🎨 COLOR SWITCHER</h1>

      <div className="flex gap-5 ">
        {colorArr.map((elem) => (
          <Button key={elem} color={elem} setColor={setColor} />
        ))}
      </div>

      <ColorBox color={color} />
    </div>
  );
};

export default App;

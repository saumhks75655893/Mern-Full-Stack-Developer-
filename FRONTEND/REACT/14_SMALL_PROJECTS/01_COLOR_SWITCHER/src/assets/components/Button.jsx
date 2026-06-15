import React from "react";

const Button = ({ setColor, color }) => {
  function setThemeColor() {
    console.log(color);
    setColor(color);
  }
  return (
    <div>
      <button
        onClick={setThemeColor}
        className="counter"
        style={{
          backgroundColor: color,
        }}
      >
        {color}
      </button>
    </div>
  );
};

export default Button;

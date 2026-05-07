import React from "react";

const Button = ({
  data,
  color,
  bgcolor,
  Px = "10px",
  Py = "20px",
  onClick,
}) => {
  return (
    <div>
      <button
        onClick={onClick}
        style={{
          paddingLeft: Py,
          paddingRight: Py,
          paddingTop: Px,
          paddingBottom: Px,
          backgroundColor: color,
        }}
        className=" rounded-2xl text-2xl text-white font-semibold"
      >
        {data}
      </button>
    </div>
  );
};

export default Button;

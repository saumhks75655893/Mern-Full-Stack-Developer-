import React from "react";

const Button = (props) => {
  return (
    <div>
      <button className="bg-amber-600 p-2 rounded-xl font-bold text-amber-200">
        {props.title}
      </button>
    </div>
  );
};

export default Button;

import React from "react";

const Button = (props) => {
  return (
    <div>
      <button className="px-4 py-2.5 bg-blue-500 rounded-3xl text-white text-xl my-2">
        {props.title}
      </button>
    </div>
  );
};

export default Button;

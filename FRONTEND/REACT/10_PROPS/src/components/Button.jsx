import React from "react";
import "../App.css";
const Button = (props) => {
  return (
    <div>
      <button onClick={props.func}>{props.title}</button>
    </div>
  );
};

export default Button;

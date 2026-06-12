import React from "react";

const Header = (props) => {
  return (
    <h1>
      {props.title} <span>{props.name}</span>
    </h1>
  );
};

export default Header;

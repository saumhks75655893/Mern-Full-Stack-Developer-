import React from "react";
import "../App.css";

const Cards = ({ name, age }) => {
  // const { data, isStudent, children } = props;
  // const { name, age } = data;
  // const [name, age] = data;

  // const { name, age } = data;
  return (
    <div className="cards">
      {/* <h1>{name}</h1>
      <h4>{age}</h4>
      <h4>{isStudent}</h4>
      <div>{children}</div> */}
      <h1>{name}</h1>
      <h1>{age}</h1>
    </div>
  );
};

export default Cards;

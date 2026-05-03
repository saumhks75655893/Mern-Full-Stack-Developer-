import React, { useState } from "react";
import "../App.css";

const Cards = (props) => {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
  }
  return (
    <div className="cards">
      <h1>{count}</h1>
      <button onClick={increment}>Increment</button>
      <h2>{props.holder}</h2>
      <p>{props.des}</p>
    </div>
  );
};

export default Cards;

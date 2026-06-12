import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useRef } from "react";
import BasicSyntac from "./assets/BasicSyntac";

const App = () => {
  const [random, setRandom] = useState();
  const countRandomRef = useRef(0);

  const generateRandomNo = () => {
    const randomNo = Math.floor(Math.random() * 100);
    console.log(randomNo);
    setRandom(randomNo);
  };

  useEffect(() => {
    console.log("re-render hua hai");
    countRandomRef.current += 1;
  });

  return (
    <>
      <h1>Random Number : {random}</h1>
      <h1>Re-render Count : {countRandomRef.current}</h1>
      <button onClick={generateRandomNo}>Generate Random Number</button>
    </>
  );
};

export default App;

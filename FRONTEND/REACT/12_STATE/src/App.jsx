import React from "react";
import { useState } from "react";
import Cards from "./assets/components/Cards";

const App = () => {
  let arr = [1];
  return (
    <>
      {arr.map((elem) => {
        return <Cards key={elem} />;
      })}
    </>
  );
};

export default App;

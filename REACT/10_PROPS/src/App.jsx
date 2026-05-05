import React from "react";
import Cards from "./components/Cards";
import Button from "./components/Button";

const App = () => {
  // const obj = {
  //   name: "Himanshu Kumar",
  //   age: 21,
  // };

  // const arr = ["Himanshu Kumar", 21];

  function clickMe() {
    console.log("Button 1 cliked");
  }

  function click2Me() {
    console.log("Button 2 cliked");
  }

  const obj = {
    name: "Himanshu Kumar",
    age: 21,
  };

  return (
    <div className="cardGallery">
      {/* Props as object */}
      {/* <Cards data={obj} isStudent="true" /> */}

      {/* Props as Array */}
      {/* <Cards data={arr} isStudent="true" /> */}

      {/* Props as function */}
      {/* <Button title="Click Me" func={clickMe} />
      <Button title="Click" func={click2Me} /> */}

      {/* Props as JSX Element */}
      {/* <Cards data={<h2>Hello World</h2>} /> */}
      {/* <Cards data={obj} isStudent="true">
        <h2>
          Hello Word! I am Himanshu Kumar, The one and only top Hacker in the
          world
        </h2>
        <h2>What are you Doing here?</h2>
      </Cards> */}

      {/* Default Props */}
      {/* <Cards title="Himanshu Kumar" age={40} /> */}

      {/* Spread Operator for Props */}
      {/* <Cards data={{ ...obj }} /> */}
      <Cards {...obj} />
    </div>
  );
};

export default App;

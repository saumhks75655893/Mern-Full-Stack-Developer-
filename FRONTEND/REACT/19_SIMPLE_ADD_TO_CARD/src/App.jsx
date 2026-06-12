import React from "react";
import Card from "./components/Card";
import Data from "./components/data.json";

const App = () => {
  return (
    <div className="w-screen overflow-hidden flex flex-col gap-10 items-center justify-center p-10 bg-black">
      {Data.map((item, index) => {
        return <Card data={item} key={index} />;
      })}
    </div>
  );
};

export default App;

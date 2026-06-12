import React, { useState } from "react";
import Hero from "./Hero";
import About from "./About";

const Layout = (props) => {
  const [count, setCount] = useState(200);
  console.log(props);

  function Kabutar(data) {
    console.log(data);
  }

  return (
    <div>
      <div className="bg-amber-500 w-full p-10 text-5xl font-bold">
        LayOut
        <Hero data={props.data} count={count} func={Kabutar} />
        <About data={props.data} count={count} />
      </div>
    </div>
  );
};

export default Layout;

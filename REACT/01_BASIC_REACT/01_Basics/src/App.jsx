import { useState } from "react";
import "./App.css";
import Navbar from "./Navbar";

function Component2() {
  return (
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQL54L8kdXRp-t0l03XKGB6WmIJtaICyLjQDA&s" />
  );
}

function Components() {
  return (
    <div>
      {/* <Navbar name="Himanshu KUmar" age={21} />
      <Navbar name="Radha Rani" age={21} />
      <Navbar name="Meera" age={20} /> */}

      {/* <h1> This is a component</h1>
      <Component2 />
      <p>lorem dfasdfaj df adfjadfajdf ad fdf adsfjadfajdf</p>
      <Component2 /> */}
    </div>
  );
}

function App() {
  const [count, setCount] = useState(0);
  //   function increment() {
  //     setCount(count + 1);
  //   }
  return (
    // <>
    //   {/* <div>
    //     {" "}
    //     HELLO WORLD
    //     <p> {2 + 2} "- it's a js"</p>
    //   </div> */}

    //   {/* component caling */}
    //   {/* <Components /> */}
    // </>

    // <div>
    //   <button onClick={increment}>Increament</button>
    //   <h1>{count}</h1>
    // </div>

    <div>
      <Navbar data={count} />
    </div>
  );
}

export default App;

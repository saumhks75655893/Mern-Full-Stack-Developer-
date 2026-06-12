import { useState } from "react";
import "./App.css";
import Button from "./components/Button";

function App() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
  }

  function decrement() {
    if (count > 0) {
      setCount(count - 1);
    }
  }

  function Reset() {
    setCount(0);
  }
  return (
    <>
      <h1>COUNTER APP</h1>
      <p>Count : {count}</p>

      <div className="btns">
        {/* <button onClick={increment}>➕ increment</button>
        <button onClick={decrement}>➖ decrement</button>
        <button onClick={Reset}>🔄 reset</button> */}

        <Button logo="➕" text="increment" func={increment} />
        <Button logo="➖" text="decrement" func={decrement} />
        <Button logo="🔄" text="reset" func={Reset} />
      </div>
    </>
  );
}

export default App;

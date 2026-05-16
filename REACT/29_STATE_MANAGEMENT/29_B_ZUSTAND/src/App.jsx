import React from "react";
import useMyStore from "./Store";
import { useEffect } from "react";

const App = () => {
  // all at once rerender happen
  // let { count, name, increment, capitalize } = useMyStore();

  // Select that key which is need - rerenderer not happen
  const name = useMyStore((state) => state.name);
  const count = useMyStore((state) => state.count);
  const increment = useMyStore((state) => state.increment);
  const capitalize = useMyStore((state) => state.capitalize);

  useEffect(() => console.log("rerender hua", name));
  return (
    <div>
      app
      <h1>{name}</h1>
      <h1>{count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={capitalize}>Capitalize</button>
    </div>
  );
};

export default App;

import { createContext, useContext, useState } from "react";

let MyContext = createContext();
let useMyContext = () => {
  return useContext(MyContext);
};

const MyContextProvider = ({ children }) => {
  const [count, setCount] = useState(0);
  const val = {
    count,
    setCount,
  };
  return <MyContext value={val}>{children}</MyContext>;
};

export { MyContextProvider, useMyContext };

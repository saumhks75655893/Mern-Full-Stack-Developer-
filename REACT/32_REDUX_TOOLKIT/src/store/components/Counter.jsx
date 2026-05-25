import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  changeByValue,
  decrement,
  increment,
} from "../feature/counter/counterSlice";

const Counter = () => {
  const dispatch = useDispatch();

  const [value, setValue] = useState(0);

  const stateValue = useSelector((state) => state.counter.value);
  // console.log(stateValue);

  function handleIncrement() {
    dispatch(increment());
  }

  function handleDecrement() {
    dispatch(decrement());
  }
  function handleInputValue(e) {
    setValue(e.target.value);
  }
  function handleOnChangeValue() {
    dispatch(changeByValue(value));
  }

  useEffect(() => {
    console.log("rerender hua hai");
  });

  return (
    <div>
      {stateValue}

      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <input
        type="number"
        placeholder="Enter Your Number"
        onChange={handleInputValue}
      />
      <button onClick={handleOnChangeValue}>Change by Value</button>
    </div>
  );
};

export default Counter;

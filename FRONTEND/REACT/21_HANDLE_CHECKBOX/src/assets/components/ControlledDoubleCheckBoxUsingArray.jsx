import React from "react";
import { useState } from "react";

const ControlledDoubleCheckBoxUsingArray = () => {
  const [isChecked, setIsChecked] = useState([]);

  console.log(isChecked);
  function checkboxHandler(e) {
    setIsChecked((prev) => {
      return prev.includes(e.target.name)
        ? prev.filter((item) => item != e.target.name)
        : [...prev, e.target.name];
    });
  }

  return (
    <>
      <div className="flex gap-5 select-none">
        <label htmlFor="cb">
          <input
            id="cb"
            type="checkbox"
            checked={isChecked.includes("check1")}
            name="check1"
            onChange={checkboxHandler}
          />
          check box 1
        </label>

        <label htmlFor="cb2">
          <input
            id="cb2"
            type="checkbox"
            checked={isChecked.includes("check2")}
            name="check2"
            onChange={checkboxHandler}
          />
          check box 2
        </label>
        <label htmlFor="cb3">
          <input
            id="cb3"
            type="checkbox"
            checked={isChecked.includes("check3")}
            name="check3"
            onChange={checkboxHandler}
          />
          check box 3
        </label>
      </div>

      <div>
        <h1> {isChecked.includes("check1") && "checkbox 1 selected"}</h1>
        <h1> {isChecked.includes("check2") && "checkbox 2 selected"}</h1>
        <h1> {isChecked.includes("check3") && "checkbox 3 selected"}</h1>
      </div>
    </>
  );
};
export default ControlledDoubleCheckBoxUsingArray;

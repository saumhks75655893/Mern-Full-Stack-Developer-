import React from "react";
import { useState } from "react";

const ControlledDoubleCheckBox = () => {
  const [isChecked, setIsChecked] = useState({
    check1: false,
    check2: false,
    check3: false,
  });

  function checkboxHandler(e) {
    const { name, checked } = e.target;
    setIsChecked((prev) => {
      return {
        ...prev,
        [name]: checked,
      };
    });
  }

  return (
    <div className="flex flex-col gap-5 select-none">
      <label htmlFor="cb">
        <input
          id="cb"
          type="checkbox"
          checked={isChecked.check1}
          name="check1"
          onChange={checkboxHandler}
        />
        check box 1
      </label>

      <label htmlFor="cb2">
        <input
          id="cb2"
          type="checkbox"
          checked={isChecked.check2}
          name="check2"
          onChange={checkboxHandler}
        />
        check box 2
      </label>
      <label htmlFor="cb3">
        <input
          id="cb3"
          type="checkbox"
          checked={isChecked.check3}
          name="check3"
          onChange={checkboxHandler}
        />
        check box 3
      </label>

      <h1> {isChecked.check1 && "checkbox 1 selected"}</h1>
      <h1> {isChecked.check2 && "checkbox 2 selected"}</h1>
      <h1> {isChecked.check3 && "checkbox 3 selected"}</h1>
    </div>
  );
};

export default ControlledDoubleCheckBox;

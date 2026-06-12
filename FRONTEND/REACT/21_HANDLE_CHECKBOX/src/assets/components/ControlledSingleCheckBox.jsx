import React from "react";
import { useState } from "react";

const ControlledSingleCheckBox = () => {
  const [isChecked, setIsChecked] = useState(true);

  console.log(isChecked);
  function checkBox(e) {
    const value = e.target.checked;
    // setIsChecked(!isChecked);
    setIsChecked(value);
  }
  return (
    <div className="select-none">
      <label htmlFor="cb" className="flex items-center justfy-center gap-2">
        <input
          type="checkbox"
          id="cb"
          checked={isChecked}
          onChange={checkBox}
        />
        <h1>Check me</h1>
      </label>

      <h1>{isChecked && "Checkbox selected"}</h1>
    </div>
  );
};

export default ControlledSingleCheckBox;

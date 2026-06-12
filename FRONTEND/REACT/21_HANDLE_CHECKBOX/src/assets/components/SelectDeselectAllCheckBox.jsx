import React from "react";
import { useState } from "react";

const SelectDeselectAllCheckBox = () => {
  const [isChecked, setIsChecked] = useState({
    check1: false,
    check2: false,
    check3: false,
  });

  function checkboxHandler(e) {
    // console.log(e.target.name);
    // console.log(e.target.checked);

    const { name, checked } = e.target;
    setIsChecked((prev) => {
      return {
        ...prev,
        [name]: checked,
      };
    });
  }

  // if all the values in the isChecked object are true then isAllChecked will be true otherwise false
  // const isAllChecked = Object.values(isChecked).every(Boolean);
  const isAllChecked = Object.values(isChecked).every((elem) => elem === true);

  // function for handling select all checkbox
  function handleSelectAll(e) {
    const { checked } = e.target;
    setIsChecked({
      check1: checked,
      check2: checked,
      check3: checked,
    });
  }

  // get the keys of the isChecked object
  const keys = Object.keys(isChecked);

  return (
    <>
      <div className="flex  gap-5 select-none">
        <label htmlFor="sa">
          <input
            type="checkbox"
            id="sa"
            checked={isAllChecked}
            onChange={handleSelectAll}
          />
          Select All
        </label>

        {/* maps each key with their checkbox */}
        {keys.map((key, index) => {
          return (
            <label key={index} htmlFor={key}>
              <input
                id={key}
                type="checkbox"
                checked={isChecked[key]}
                name={key}
                onChange={checkboxHandler}
              />
              {key.toUpperCase()}
            </label>
          );
        })}
      </div>

      <h1> {isChecked.check1 && "checkbox 1 selected"}</h1>
      <h1> {isChecked.check2 && "checkbox 2 selected"}</h1>
      <h1> {isChecked.check3 && "checkbox 3 selected"}</h1>
    </>
  );
};

export default SelectDeselectAllCheckBox;

import React, { useRef } from "react";

const BasicSyntac = () => {
  const inputRef = useRef();

  function handleInputFocus() {
    inputRef.current.style.backgroundColor = "red";
    inputRef.current.style.borderRadius = "100%";
    inputRef.current.click();
  }
  return (
    <div className="mainDiv">
      {/* <input ref={inputRef} type="text" placeholder="Enter Name" /> */}
      <div
        onClick={() => console.log("div pe click hua hai")}
        ref={inputRef}
        className="div"
      ></div>
      <button onClick={handleInputFocus}>Focus</button>
    </div>
  );
};

export default BasicSyntac;

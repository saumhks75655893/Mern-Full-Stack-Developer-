import React, { useRef } from "react";

const UncontrolledUsingUseRef = () => {
  const inputRef = useRef(null);

  function submitData() {
    console.log(inputRef.current.value);
  }
  return (
    <div>
      <input ref={inputRef} type="text" placeholder="Enter Name" />
      <button onClick={submitData}>Submit</button>
    </div>
  );
};

export default UncontrolledUsingUseRef;

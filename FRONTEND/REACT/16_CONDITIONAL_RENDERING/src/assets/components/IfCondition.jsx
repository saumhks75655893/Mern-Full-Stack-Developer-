import React from "react";
import HideShowContent from "./HideShowContent";

const IfCondition = () => {
  const comp = "c";

  if (comp === "a") {
    return (
      <div>
        <h1>COMPONET A</h1>
      </div>
    );
  }

  if (comp === "b") {
    return (
      <div>
        <h1>COMPONET B</h1>
      </div>
    );
  }

  if (comp === "c") {
    return (
      <div>
        <h1>COMPONET C</h1>
      </div>
    );
  }

  return (
    <>
      <HideShowContent />
    </>
  );
};

export default IfCondition;

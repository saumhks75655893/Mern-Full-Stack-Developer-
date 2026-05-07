import React from "react";

const ConditionalCss = () => {
  const color = "adfad";
  return (
    <div className={color === "red" ? "red-bg" : "blue-bg"}>How are you ?</div>
  );
};

export default ConditionalCss;

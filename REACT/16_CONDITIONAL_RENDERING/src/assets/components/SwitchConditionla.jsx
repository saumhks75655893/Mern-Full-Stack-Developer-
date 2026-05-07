import React from "react";
import HideShowContent from "./HideShowContent";
import IfCondition from "./IfCondition";
import SelectComponent from "./SelectComponent";

const SwitchConditionla = () => {
  const option = "";

  switch (option) {
    case "a":
      return <HideShowContent />;
      break;
    case "b":
      return <IfCondition />;
      break;

    case "c":
      return <SelectComponent />;
      break;

    default:
      return <h1>Other component</h1>;
  }
  return <div></div>;
};

export default SwitchConditionla;

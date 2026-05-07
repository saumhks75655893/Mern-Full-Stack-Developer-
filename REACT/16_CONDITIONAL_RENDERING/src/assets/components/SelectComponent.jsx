import React from "react";
import { useState } from "react";
import LogincalAndOperator from "./LogincalAndOperator";
import ConditionalCss from "./ConditionalCss";

const SelectComponent = () => {
  const [toggle, setToggle] = useState(false);

  const option = "b";
  const Component = option === "a" ? ConditionalCss : LogincalAndOperator;

  return (
    <div>
      <Component />
    </div>
  );
};

export default SelectComponent;

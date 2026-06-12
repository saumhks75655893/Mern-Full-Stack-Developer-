import React from "react";
import IfCondition from "./assets/components/IfCondition";
import Ternary from "./assets/components/Ternary";
import { useState } from "react";
import LogincalAndOperator from "./assets/components/LogincalAndOperator";
import ConditionalCss from "./assets/components/ConditionalCss";
import StateConditional from "./assets/components/StateConditional";
import SelectComponent from "./assets/components/SelectComponent";
import SwitchConditionla from "./assets/components/SwitchConditionla";
import MappingConditional from "./assets/components/MappingConditional";

const App = () => {
  const [toggle, setToggle] = useState(false);

  const option = "b";
  const Component = option === "a" ? ConditionalCss : LogincalAndOperator;

  return (
    <div>
      {/* <IfCondition /> */}

      {/* <Ternary boolValue={trueFalse} setTrueFalse={setTrueFalse} /> */}

      {/* <LogincalAndOperator /> */}

      {/* <ConditionalCss /> */}

      {/* <StateConditional toggle={toggle} setToggle={setToggle} /> */}

      {/* <SelectComponent /> */}

      {/* <SwitchConditionla /> */}

      <MappingConditional />
    </div>
  );
};

export default App;

import React, { useState } from "react";

const Hero = (props) => {
  console.log(props);

  props.func("Ye hero ka data hai");

  // props.func(count);
  return (
    <div>
      <div className="bg-amber-800 w-full h-20 p-2 mt-2">Hero</div>
    </div>
  );
};

export default Hero;

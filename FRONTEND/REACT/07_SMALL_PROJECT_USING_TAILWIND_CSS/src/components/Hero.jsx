import React from "react";
import Button from "./Button";

const Hero = () => {
  return (
    <div>
      <div className="max-w-[69%] m-auto text-center my-10">
        <h1 className="max-[820px]:text-5xl max-[340px]:text-xl text-7xl font-semibold font-serif">
          The Best Way To{" "}
          <span className="bg-amber-300 rounded-2xl px-1 py-0">Review</span>{" "}
          Creative Assets
        </h1>
        <p className="max-[820px]:text-lg  max-[340px]:text-xs text-xl my-7">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi optio
          impedit, sequi iste aperiam culpa modi ratione illum incidunt ea
          itaque exercitationem consectetur eveniet, fugiat nostrum? Cupiditate
          quam sequi animi?
        </p>
        <div className="max-[820px]:text-xl  max-[340px]:text-xs text-2xl ">
          <Button title="Take Subscription" p="p-2" />
        </div>
      </div>
    </div>
  );
};

export default Hero;

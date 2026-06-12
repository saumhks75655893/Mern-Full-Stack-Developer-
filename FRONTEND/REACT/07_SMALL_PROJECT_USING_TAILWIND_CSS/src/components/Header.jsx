import React from "react";
import Button from "./Button";

const Header = () => {
  return (
    <div>
      <div className="py-2  bg-amber-300">
        <header className="max-w-[70%] flex justify-between p-1 text-xl text-black/60 m-auto items-center">
          <h1 className="font-bold text-2xl max-[340px]:text-xs">
            <span className="text-amber-600 text-3xl max-[340px]:text-xl">
              B
            </span>
            rand
          </h1>
          <div className="max-[820px]:hidden flex gap-8 text-[19px] text-black/50 decoration-1 caret-emerald-200 underline">
            <a href="">Feature</a>
            <a href="">Use cases</a>
            <a href="">Integration</a>
            <a href="">About Us</a>
          </div>
          <div className="max-[340px]:text-xs">
            <Button title="Join Us" />
          </div>
        </header>
      </div>
    </div>
  );
};

export default Header;

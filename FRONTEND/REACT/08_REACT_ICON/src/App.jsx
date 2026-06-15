import React from "react";
import { MdOutlineHome } from "react-icons/md";
import { FaWindows } from "react-icons/fa";
import { BsApple, BsBrowserSafari, BsCloudDrizzle } from "react-icons/bs";

const App = () => {
  return (
    <div>
      <h1>REACT ICONS</h1>
      <MdOutlineHome className="text-9xl" />
      <FaWindows className="text-9xl" />
      <BsApple className="text-6xl" />
      <BsBrowserSafari className="text-7xl" />
      <BsCloudDrizzle className="text-7xl" />
    </div>
  );
};

export default App;

import React, { useState } from "react";

const Header = (props) => {
  // console.log(props);

  let [data, setData] = useState("Ye header ka data hai");

  function changeData() {
    props.func(data);
  }

  return (
    <div>
      <div
        onClick={changeData}
        className="bg-gray-800 w-full h-40 text-5xl font-bold text-white"
      >
        Header
      </div>
    </div>
  );
};

export default Header;

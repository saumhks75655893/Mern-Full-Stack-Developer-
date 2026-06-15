import React from "react";
import { CiHeart } from "react-icons/ci";
import { BiMessageRounded } from "react-icons/bi";
import { BiShare } from "react-icons/bi";

const Public = (props) => {
  return (
    <div>
      <div className="flex items-center justify-between font-bold">
        {props.icon}
        <p>{props.data} </p>
      </div>
    </div>
  );
};

export default Public;

import React from "react";
import Image from "./Image";
import Content from "./Content";
import Price from "./Price";

const Card = ({ data }) => {
  // console.log(data.image);
  return (
    <div className="w-full rounded-2xl overflow-hidden bg-white flex  gap-5 items-center justify-between p-3">
      <div className="w-50 h-full object-cover">
        <Image image={data.image} />
      </div>
      <div className="w-150 h-full">
        <Content data={data} />
      </div>
      <div className="w-50 h-full ">
        <Price data={data} />
      </div>
    </div>
  );
};

export default Card;

import React from "react";

const Price = ({ data }) => {
  return (
    <div className="text-right">
      <h1 className="text-2xl font-bold">{data.price}</h1>
      <p className="line-through text-gray-500">{data.originalPrice}</p>
      <p className="text-green-500 font-semibold">{data.discount}</p>
    </div>
  );
};

export default Price;

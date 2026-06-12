import React from "react";

const Image = ({ image }) => {
  console.log(image);
  return (
    <div>
      <img src={image} alt="product" className="w-full h-full object-cover" />
    </div>
  );
};

export default Image;

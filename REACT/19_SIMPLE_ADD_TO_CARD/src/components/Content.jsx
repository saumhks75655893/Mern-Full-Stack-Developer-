import React from "react";

const Content = ({ data }) => {
  console.log(data);
  return (
    <div className="w-full h-full flex flex-col  justify-center gap-2">
      {/* title */}
      <h1 className="font-bold text-xl">{data.title}</h1>
      {/* rating and reviews */}
      <div className="text-gray-400 text-xs font-semibold py-3">
        {data.rating} | {data.reviews} Reviews
      </div>
      {/* Details */}
      <div className="py-2">
        {data.details.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </div>
      {/* Offers */}
      <div className="mt-3 text-xs">
        {data.offers.exchangeOffer && (
          <p className="text-green-500 font-semibold">
            {data.offers.exchangeOffer}
          </p>
        )}
        {data.offers.bankOffer && (
          <p className="text-blue-500 font-semibold">{data.offers.bankOffer}</p>
        )}
      </div>
    </div>
  );
};

export default Content;

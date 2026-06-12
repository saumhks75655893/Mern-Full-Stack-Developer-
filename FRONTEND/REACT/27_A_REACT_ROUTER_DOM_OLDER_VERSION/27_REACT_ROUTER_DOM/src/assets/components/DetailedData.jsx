import React from "react";
import { useParams } from "react-router-dom";
const DetailedData = () => {
  const params = useParams();
  console.log(params);

  return (
    <div className="page">
      <h1>Detailed Info about : {params.cid}</h1>
    </div>
  );
};

export default DetailedData;

import React from "react";
import { useParams } from "react-router-dom";
import A1 from "./A1";
import A2 from "./A2";

const AboutExtend = () => {
  const param = useParams();
  console.log(param);

  return (
    <div className="page">
      <h1>About Extended : {param.id}</h1>
      {param.id === "a1" ? <A1 /> : <A2 />}
    </div>
  );
};

export default AboutExtend;

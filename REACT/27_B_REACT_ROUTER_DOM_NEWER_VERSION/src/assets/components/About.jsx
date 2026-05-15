import React from "react";
import { useLoaderData } from "react-router-dom";

const About = () => {
  let data = useLoaderData();
  console.log(data);
  return (
    <div className="page">
      <h1>About </h1>
      {data.map((elem, index) => {
        return (
          <p key={index} className="text-white text-2xl">
            {elem.name}
          </p>
        );
      })}
    </div>
  );
};

export default About;

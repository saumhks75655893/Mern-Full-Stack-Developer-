import React from "react";

const LogincalAndOperator = () => {
  const isMessage = "Hi, What are you doing?";
  return <div>{isMessage && <h1> {isMessage} </h1>}</div>;
};

export default LogincalAndOperator;

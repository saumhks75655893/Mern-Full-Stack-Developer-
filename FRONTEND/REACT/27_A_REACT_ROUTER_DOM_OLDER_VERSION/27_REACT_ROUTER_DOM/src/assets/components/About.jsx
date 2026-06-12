import React from "react";
import { Outlet } from "react-router-dom";
const About = () => {
  return (
    <div className="page flex flex-col p-4">
      <h1>About</h1>
      {/* Nested routing */}
      <Outlet />
      <h1>This page belongs to the person who created this website.</h1>
    </div>
  );
};

export default About;

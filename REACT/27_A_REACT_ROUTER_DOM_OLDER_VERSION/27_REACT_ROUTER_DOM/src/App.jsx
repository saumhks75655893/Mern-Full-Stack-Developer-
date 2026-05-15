import React from "react";
import Navbar from "./assets/components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./assets/components/Home";
import About from "./assets/components/About";
import Contact from "./assets/components/Contact";
import Help from "./assets/components/Help";
import DetailedData from "./assets/components/DetailedData";
import { Navigate } from "react-router-dom";
import A1 from "./assets/components/A1";
import A2 from "./assets/components/A2";
const App = () => {
  console.log(window.history);
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />}>
          {/* Nested Routing */}
          <Route path="a1" element={<A1 />} />
          <Route path="a2" element={<A2 />} />
        </Route>
        <Route path="/contact" element={<Contact />} />
        <Route path="/contact/:cid" element={<DetailedData />} />
        <Route path="/help" element={<Navigate to={"/"} replace />} />
      </Routes>
    </>
  );
};

export default App;

import React, { useState } from "react";
import Navbar from "./components/Navbar";
import News from "./page/News";
import Category from "./components/Category";
import Slider from "./components/Slider";
import Footer from "./components/Footer";

const App = () => {
  const [show, setShow] = useState(false);
  return (
    <div className="relative">
      <Navbar Data={setShow} className={"sticky top-0 mb-3  z-50"} />

      {show ? <Slider Data={setShow} /> : ""}

      <Category className={"sticky top-16 bg-base-100 z-30 py-2"} />

      <News Data={setShow} />

      <Footer className={"bg-base-300"} />
    </div>
  );
};

export default App;

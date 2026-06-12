import React, { useState } from "react";
import Header from "./component/Header";
import Layout from "./component/Layout";
import Footer from "./component/Footer";

const App = () => {
  const [data, setData] = useState("Himanshu Kumar");

  function Kabutar(data) {
    setData(data);
  }
  console.log(data);

  return (
    <div>
      <Header data={data} func={Kabutar} />
      {/* <Layout data={data} /> */}
      {/* <Footer data={data} /> */}
    </div>
  );
};

export default App;

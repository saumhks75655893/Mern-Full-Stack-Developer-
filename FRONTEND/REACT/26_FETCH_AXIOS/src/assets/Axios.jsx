import React from "react";
import axios from "axios";
const Axios = () => {
  const config = {
    url: "/users",
    baseURL: "https://jsonplaceholder.typicode.com",

    // headers: {
    //   Accept: "application/json",
    //   // "Content-Type": "application/json",
    //   // Authority: "Bearer adfadf",
    // },

    // timeout: 200,

    // params: {
    //   name: "Himanshu",
    //   age: 21,
    // },
  };
  async function fetchData() {
    let data = await axios(config);
    console.log(data.data);
  }
  return (
    <div>
      <button onClick={fetchData}>Fetch Data</button>
    </div>
  );
};

export default Axios;

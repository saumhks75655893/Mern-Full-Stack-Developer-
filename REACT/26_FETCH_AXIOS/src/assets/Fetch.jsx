import React from "react";

const Fetch = () => {
  // async function fetchData() {
  //   let data = await fetch("https://jsonplaceholder.typicode.com/users");
  //   console.log(await data.json());
  // }

  function fetchData() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => console.log(data));
  }
  return (
    <div>
      <button onClick={fetchData}>Fetch Data</button>
    </div>
  );
};

export default Fetch;

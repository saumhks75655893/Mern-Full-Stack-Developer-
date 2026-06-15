import React, { useState } from "react";

const MultipleInputFieldWithSincleState = () => {
  // const [inputName, setInputName] = useState("");
  // const [inputEmail, setInputEmail] = useState("");

  const [data, setData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
  });

  // function handleName(e) {
  //   setData(function (prev) {
  //     return {
  //       ...prev,
  //       name: e.target.value,
  //     };
  //   });
  // }

  // function handleEmail(e) {
  //   setData({ ...data, email: e.target.value });
  // }

  function inputHandler(e) {
    const { name, value } = e.target;
    console.log(name);
    setData({
      ...data,
      [name]: value,
    });
  }

  function handleClear() {
    setData({ name: "", email: "", phoneNumber: "" });
  }

  return (
    <div>
      <input
        type="text"
        name="name"
        value={data.name}
        placeholder="Enter Name"
        onChange={inputHandler}
      />

      <br />

      <input
        type="text"
        name="email"
        value={data.email}
        placeholder="Enter Email"
        onChange={inputHandler}
      />

      <br />

      <input
        type="text"
        name="phoneNumber"
        value={data.phoneNumber}
        placeholder="Enter Phone Number"
        onChange={inputHandler}
      />

      <br />
      <br />

      <button onClick={() => handleClear()}>Clear</button>

      <br />
      <br />

      <h1>{data.name}</h1>
      <br />
      <h1>{data.email}</h1>
      <br />
      <h1>{data.phoneNumber}</h1>
    </div>
  );
};

export default MultipleInputFieldWithSincleState;

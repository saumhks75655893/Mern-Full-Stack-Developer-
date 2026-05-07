import React from "react";
import "./App.css";
import UserCards from "./UserCards";

const App = () => {
  // const arr = ["ram", "shyam", "hari", "gopal", "krishna"];

  // const arrObj = [
  //   { name: "ram", id: 1 },
  //   { name: "shyam", id: 2 },
  //   { name: "hari", id: 3 },
  //   { name: "gopal", id: 4 },
  //   { name: "krishna", id: 5 },
  // ];

  const arrArr = [
    ["ram", "shyam", "hari", "gopal", "krishna"],
    ["sita", "gita", "laxmi", "saraswati", "durga"],
    ["lakshman", "bharat"],
    ["radha", "meera", "gopi", "yashoda"],
  ];
  return (
    <div>
      {/* Normal Array */}
      {/* {arr.map((item, key) => (
        // <h1 key={key}>{item.toUpperCase()}</h1>
      ))} */}

      {/* Array Of Objects */}
      {/* {arrObj.map((user) => (
        <div className="user">
          <h1 key={user.id}> {user.id}</h1>
          <h1 className="userName" key={user.id}>
            {user.name.toUpperCase()}
          </h1>
        </div>
      ))} */}

      {/* Array Of Arrays */}
      {/* {arrArr.map((outArr, key) => (
        <div className="user" key={key}>
          {outArr.map((item, key) => (
            <h1 key={key}>{item.toUpperCase()}</h1>
          ))}
        </div>
      ))} */}

      {/* Rendering components with .map() */}
      {arrArr.map((outArr, key) => {
        return (
          outArr.length > 4 && <UserCards key={key} userDetails={outArr} />
        );
      })}
    </div>
  );
};

export default App;

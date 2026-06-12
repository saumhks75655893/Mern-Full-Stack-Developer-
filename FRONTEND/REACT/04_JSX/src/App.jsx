import React from "react";
import "./App.css";
import Header from "./assets/Header";

function App() {
  // let age = 9;
  // let isOutOFStock = true;

  // let obj = {
  //   name: "Himanshu Kumar",
  //   age: 21,
  //   class: "First",
  // };

  // function cal() {
  //   return 8 + 2;
  // }

  // let arr = ["iron man", "spider man", "wanda", "captain"];

  // let otherJsx = <span>Hello, How are you? </span>;

  let name = "Himanshu Kumar";
  return (
    <>
      {/* <h1>HELLO</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
        fugiat in suscipit! Laboriosam, quam dolor voluptates animi nihil ad
        earum incidunt magni quasi atque mollitia omnis, eum ducimus quaerat!
        Modi.
      </p> */}

      {/* INLINE CSS IN JSX */}

      {/* <h4
        style={{
          color: "black",
          "background-color": "red",
          padding: "20px",
          marginTop: "20px",
          "font-size": "40px",
        }}
      >
        Name : {obj.name}
      </h4> */}
      {/* <h4>Age : {obj.age}</h4>
      <h4>Class : {obj.class}</h4>
      <h4>8 + 2 : {cal()}</h4> */}

      {/* CONDITIONAL RENDERING */}
      {/* 
      <p>
        {age > 18 ? (
          <p style={{ fontSize: "40px", color: "green" }}>You can drive</p>
        ) : (
          <p style={{ fontSize: "40px", color: "red" }}>You cann't drive </p>
        )}
      </p> */}

      {/* {isOutOFStock && (
        <p style={{ fontSize: "40px", color: "red" }}>Out of Stock</p>
      )} */}

      {/* JSX WITH LOOP

      {arr.map((item, index) => {
        return <h1 key={index}>{item}</h1>;
      })} */}

      {/* JSX is an expression */}
      {/* {otherJsx}
      <Header title={otherJsx} name={"Ram"} />
      <Header title={otherJsx} name="Shyam" />
      <Header title={otherJsx} />
      <Header title={otherJsx} />
      <Header title={otherJsx} /> */}

      {/* BEHIND THE SCENE : JSX WORKING */}
      {/* <h1>"Hello, HkSinha!"</h1>
      {React.createElement("h1", null, "Hello, HkSinha!")} */}

      {/* <h1 className="heading">"Hello, HkSinha!"</h1>
      {React.createElement(
        "h1",
        {
          className: "heading",
          style: {
            backgroundColor: "black",
            color: "red",
            padding: "40px",
          },
        },
        "Hello, HkSinha!",
      )} */}

      {/* FOR NESTED HTML ELEMENTS */}
      {/* <div>
        <p>Hello</p>
      </div>

      {React.createElement(
        "div",
        null,
        React.createElement(
          "p",
          {
            style: {
              color: "red",
              backgroundColor: "black",
              fontSize: "40px",
              padding: "40px",
            },
          },
          "Hello",
        ),
      )} */}

      {/* FOR IMAGE */}
      {/* <div>
        <img
          src="https://th.bing.com/th/id/OIP.Q7FpD8pmdKWC8G5alykJwwHaE1?w=204&h=180&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3"
          alt=""
        />
      </div>

      {React.createElement(
        "div",
        null,
        React.createElement("img", {
          src: "https://th.bing.com/th/id/OIP.Q7FpD8pmdKWC8G5alykJwwHaE1?w=204&h=180&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3",
          className: "image",
        }),
      )} */}

      {/* FOR JAVASCRIT EMBEDDED */}
      {/* <h1>{name}</h1>

      {React.createElement(
        "h1",
        null,
        name,
        React.createElement("img", {
          src: "https://th.bing.com/th/id/OIP.Q7FpD8pmdKWC8G5alykJwwHaE1?w=204&h=180&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3",
          className: "image",
        }),
        React.createElement("img", {
          src: "https://th.bing.com/th/id/OIP.Q7FpD8pmdKWC8G5alykJwwHaE1?w=204&h=180&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3",
          className: "image",
        }),
      )} */}

      <h1>My name is {name}</h1>
      {/* {React.createElement("h1", null, `My name is ${name}`)} */}
      {React.createElement("h1", null, "My name is ", name)}
    </>
  );
}

export default App;

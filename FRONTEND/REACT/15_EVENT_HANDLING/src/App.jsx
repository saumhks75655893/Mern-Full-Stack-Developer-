import React from "react";

const App = () => {
  // function testing(val) {
  //   console.log(val);
  // }

  // function handleSubmit(e) {
  //   e.preventDefault();
  //   console.log("form submitted");
  // }

  let parentClick = () => {
    console.log("parent clicked");
  };

  function childClick(e) {
    e.stopPropagation();
    console.log("Child click");
  }

  return (
    <>
      {/* preventDefault */}
      {/* <form onSubmit={handleSubmit} action="">
        <input type="text" placeholder="Input name" />
        <button type="submit">Submit</button>
      </form> */}

      {/* stopPropagation */}
      <div onClickCapture={parentClick}>
        Parent clicked{" "}
        <button onClickCapture={childClick}> Child Clicked</button>
      </div>

      {/* <div> */}
      {/* <button
        className="counter"
        onClick={() => {
          console.log("click hua");
        }}
      >
        Click me
      </button> */}
      {/* <input
        onChange={testing}
        type="text"
        placeholder="Enter value "
        className="border border-white"
      />
      <button>Enter</button> */}
      {/* <form action="">
        <input
          onChange={testing}
          type="text"
          placeholder="Enter Email "
          className="border border-white"
        />
        <button>Enter</button>
      </form> */}
      {/* <button onClick={() => testing("Himanshu Kumar")}>Enter</button> */}
      {/* </div> */}
    </>
  );
};

export default App;

import React, { useEffect, useReducer, useRef, useState } from "react";

const App = () => {
  const [password, setPassword] = useState("sdfasdfadsf");
  const [slider, setSlider] = useState(8);
  const [allowedNumber, setAllowedNumber] = useState(false);
  const [allowedCharacter, setAllowedCharacter] = useState("");
  const [savePassword, setSavePassword] = useState([]);

  const copyPasswordRef = useRef(null);

  // console.log(slider);
  // console.log(allowedCharacter);
  // console.log(allowedNumber);

  function GeneratePassword() {
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTRUVWXYZ";

    if (allowedNumber) str += "1234567890";
    if (allowedCharacter) str += "`~!@#$%^&*-";

    let passwordGenerated = "";
    for (let i = 0; i < slider; i++) {
      let randomPassword = Math.floor(Math.random(0, 1) * str.length);
      let value = str[randomPassword];
      passwordGenerated = passwordGenerated + value;
    }

    setPassword(passwordGenerated);
  }

  function SavePassword() {
    setSavePassword([...savePassword, password]);
  }

  function copyPassword() {
    let currentValue = copyPasswordRef.current.value;
    navigator.clipboard.writeText(password);
    copyPasswordRef.current.select();
  }

  function SavePasswordInLocalStorage() {
    savePassword.map((elem) => {
      localStorage.setItem("Password", JSON.stringify(elem));
    });
  }

  useEffect(() => {
    GeneratePassword();
  }, [slider, allowedNumber, allowedCharacter]);

  return (
    <div>
      <div
        style={{ marginBottom: "0px" }}
        className=" relative  overflow-hidden h-full flex flex-col justify-center gap-8 items-center m-auto select-none"
      >
        <h1 className="text-4xl font-bold text-white mb-5 ">
          Password Generator
        </h1>

        {/* for password */}
        <input
          ref={copyPasswordRef}
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          style={{ padding: "5px 5px" }}
          readOnly
          className="outline-black border-black border-none text-2xl font-semibold p-3 w-[70%] h-13 bg-white rounded-2xl "
          type="text"
        />

        {/* for slider  */}
        <input
          min={0}
          max={50}
          value={slider}
          onChange={(e) => {
            setSlider(e.target.value);
            console.log(e.target.value);
          }}
          style={{ padding: "5px 5px" }}
          className="outline-black border-black cursor-pointer overflow-hidden border-none w-[70%] h-3 bg-gray-200 rounded-lg"
          type="range"
        />
        <h1 className="absolute text-white font-bold text-2xl top-36 right-20">
          {" "}
          {slider}
        </h1>

        <div className="flex flex-col gap-5 text-left">
          <label htmlFor="na" className="text-white text-3xl content-start">
            <input
              type="checkbox"
              id="na"
              checked={allowedNumber}
              onChange={(e) => setAllowedNumber(e.target.checked)}
              className="w-5 h-5 border border-default-medium rounded-xl"
            />{" "}
            Number Allowed
          </label>

          <label htmlFor="ca" className="text-white text-3xl">
            <input
              type="checkbox"
              id="ca"
              checked={allowedCharacter}
              onChange={(e) => setAllowedCharacter(e.target.checked)}
              className="w-5 h-5 border border-default-medium rounded-xl"
            />{" "}
            Character Allowed
          </label>
        </div>

        <button
          onClick={copyPassword}
          style={{ padding: "12px 5px" }}
          className="text-3xl font-bold text-white bg-blue-600 w-[70%] p-3 rounded-2xl"
        >
          Copy Password
        </button>

        <button
          style={{ padding: "12px 5px" }}
          onClick={(e) => {
            (setPassword(""),
              setSavePassword([]),
              setAllowedCharacter(false),
              setAllowedNumber(false));
          }}
          className="text-3xl font-bold text-white bg-blue-600 w-[70%] p-3 rounded-2xl"
        >
          Reset Password
        </button>

        <button
          onClick={SavePassword}
          style={{ padding: "12px 5px" }}
          className="text-3xl font-bold text-white bg-blue-600 w-[70%] p-3 rounded-2xl"
        >
          Save Password
        </button>

        <div
          style={{ padding: "20px" }}
          className="w-full text-3xl font-bold bg-black/50 text-white  flex flex-col justify-center items-center"
        >
          <h1 style={{ padding: "20px" }} className="">
            Saved Passwords
          </h1>
          <div
            style={{ padding: "20px" }}
            className="w-[89%] h-60 gap-2 overflow-auto bg-blue-400 rounded-2xl"
          >
            <div>
              {savePassword.map((elem) => (
                <p key={elem}>{elem}</p>
              ))}
            </div>
            <br />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;

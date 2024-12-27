const calculatorScreen = document.querySelector(".calculator-screen");
const keys = document.querySelectorAll("button");

let currentInput = "";
let previousInput = "";
let operator = "";

keys.forEach((key) => {
  key.addEventListener("click", () => {
    const keyValue = key.value;

    if (keyValue === "all-clear") {
      currentInput = "";
      previousInput = "";
      operator = "";
      calculatorScreen.value = "";
    } else if (["+", "-", "*", "/"].includes(keyValue)) {
      if (currentInput !== "") {
        previousInput = currentInput;
        currentInput = "";
        operator = keyValue;
      }
    } else if (keyValue === "=") {
      if (currentInput !== "" && previousInput !== "") {
        currentInput = eval(`${previousInput} ${operator} ${currentInput}`);
        calculatorScreen.value = currentInput;
        previousInput = "";
        operator = "";
      }
    } else {
      currentInput += keyValue;
      calculatorScreen.value = currentInput;
    }
  });
});

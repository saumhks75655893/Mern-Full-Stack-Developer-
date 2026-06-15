let displayResult = document.querySelector(".displayResult");

function appendValue(value) {
  if (
    displayResult.innerText === "0" ||
    displayResult.innerText === "Infinity" ||
    displayResult.innerText === "Error"
  ) {
    displayResult.innerText = value;
    return;
  }
  displayResult.innerText = `${displayResult.innerText}${value}`;
}

function clearDisplay(value) {
  displayResult.innerText = "0";
}

function calculatedValue(value) {
  try {
    let result = eval(displayResult.innerText);
    displayResult.innerText = result;
  } catch (e) {
    displayResult.innerText = "Error";
  }
}

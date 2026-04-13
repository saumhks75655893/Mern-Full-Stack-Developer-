let container = document.querySelector(".container");
let randomColor = document.querySelector(".randomColor");
let applyColor = document.querySelector(".applyColor");
let inputColor = document.querySelector("#inputColor");
let colorName = document.querySelector(".colorName");

let colorChange = (color) => {
  container.style.backgroundColor = color;
  colorName.innerText = color;
};

let useApplyColorTheme = () => {
  let color = inputColor.value;
  colorChange(color);
};

applyColor.addEventListener("click", useApplyColorTheme);

// random color

let colorArr = [
  "teal",
  "black",
  "white",
  "yellow",
  "red",
  "orange",
  "tomato",
  "lightblue",
  "indigo",
  "pink",
  "grey",
  "coral",
  "aqua",
  "olive",
  "#bde0fe",
  "#faedcd",
  "#03045e",
  "#caf0f8",
  "#e85d04",
  "#00f5d4",
  "#4f772d",
];

let randomColorGenerator = (colorArr) => {
  let randomNumber = Math.floor(Math.random() * colorArr.length);
  console.log(randomNumber);
  return colorArr[randomNumber];
};

let useRandomColorTheme = () => {
  let color = randomColorGenerator(colorArr);
  colorChange(color);
};

randomColor.addEventListener("click", useRandomColorTheme);

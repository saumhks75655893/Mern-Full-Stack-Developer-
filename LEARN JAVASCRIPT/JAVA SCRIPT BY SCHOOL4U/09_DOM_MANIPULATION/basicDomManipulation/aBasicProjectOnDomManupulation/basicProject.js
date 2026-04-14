let div = document.querySelector("div");

let button = document.querySelector("button");

button.addEventListener("click", () => {
  div.style.backgroundColor = "green";
  div.style.color = "black";
  div.style.scale = "1";
  div.classList.add("circle1");
  div.style.borderRadius = "50%";
});

let stopButton = document.querySelector(".stop");

stopButton.addEventListener("click", () => {
  div.style.backgroundColor = "teal";
  div.style.color = "black";
  // div.style.scale = "0.5";
  div.style.borderRadius = "0%";
  div.classList.remove("circle1");
});

// chatgpt
const button1 = document.getElementById("myButton");

button1.addEventListener("click", () => {
  button1.classList.remove("bounce"); // reset if it's already added
  void button1.offsetWidth; // trigger reflow to restart animation
  button1.classList.add("bounce");
});

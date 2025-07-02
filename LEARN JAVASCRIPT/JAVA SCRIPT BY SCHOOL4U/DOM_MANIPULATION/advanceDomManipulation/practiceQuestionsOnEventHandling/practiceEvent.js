// // Q1 -> Build a increment-decrement counter similar to what you see in shoping cart on Amazon or Flipkart

// let decBtn = document.querySelector(".decBtn");
// let incBtn = document.querySelector(".incBtn");
// let counterValue = document.querySelector(".counterValue");

// decBtn.addEventListener("click", () => {
//   let value = counterValue.innerText;
//   if (value <= 1) {
//     return;
//   }
//   counterValue.innerText--;
// });

// incBtn.addEventListener("click", () => {
//   counterValue.innerText++;
// });

// Q2 -> Create a simple form and display the submitted details on the webpage. Ensure that if any field is left empty, the form should not be submitted.

let form = document.querySelector("form");
let nameOfForm = document.querySelector("#name");
let dob = document.querySelector("#dob");
let submitBtn = document.querySelector("#submitBtn");
let body = document.querySelector("body");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (!nameOfForm.value || !dob.value) {
    alert("Fill all the details before submit..!");
    return;
  }

  let div = document.createElement("div");
  div.innerHTML = `
  <p>Name : ${nameOfForm.value}</p>
  <p>Date Of Birth : ${dob.value}</p>
  `;

  body.append(div);
});

let nameInput = document.querySelector("#name");
let emailInput = document.querySelector("#email");

let nameValue = document.querySelector(".nameValue");
let emailValue = document.querySelector(".emailValue");

nameInput.addEventListener("input", function (e) {
  // nameValue.textContent = e.target.value;
  nameValue.textContent = nameInput.value;
  if (nameInput.value === "") {
    nameValue.textContent = "Name will be displayed here";
  }
});

emailInput.addEventListener("input", function () {
  emailValue.textContent = emailInput.value;
  if (emailInput.value === "") {
    emailValue.textContent = "Email will be displayed here";
  }
});

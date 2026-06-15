let nameInput = document.querySelector("#name");
let emailInput = document.querySelector("#email");
let passwordInput = document.querySelector("#password");

let nameError = document.querySelector(".nameError");
let emailError = document.querySelector(".emailError");
let passwordError = document.querySelector(".passwordError");

nameInput.addEventListener("input", function (e) {
  if (nameInput.value.length < 4) {
    nameError.innerText = "Name must be at least 4 characters";
  } else {
    nameError.innerText = "";
  }
});

emailInput.addEventListener("input", function () {
  if (emailInput.value === "") {
    emailError.innerText = "Email is required";
  } else if (
    !emailInput.value.includes("@") ||
    !emailInput.value.includes(".")
  ) {
    emailError.innerText = "Email must be valid (@ and . sign is required)";
  } else {
    emailError.innerText = "";
  }
});

passwordInput.addEventListener("input", function () {
  if (passwordInput.value === "") {
    passwordError.innerText = "Password can not be black";
  } else if (passwordInput.value.length < 8) {
    passwordError.innerText = "Password must be at least 8 characters";
  } else {
    passwordError.innerText = "";
  }
});

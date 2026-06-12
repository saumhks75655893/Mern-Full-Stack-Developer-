// // Q35 -> Create a show-hide password toggle.
let togglePassword = document.querySelector("#togglePassword");
let passwordInput = document.querySelector("#password");

togglePassword.addEventListener("click", function () {
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    togglePassword.classList.remove("bi-eye-slash");
    togglePassword.classList.add("bi-eye");
  } else {
    passwordInput.type = "password";
    togglePassword.classList.remove("bi-eye");
    togglePassword.classList.add("bi-eye-slash");
  }
});

// // 33-> How do you find closest ancestor element that matches a selector?
let child = document.querySelector("#child");

child.addEventListener("click", function (event) {
  console.log(event.target.closest(".parent"));
});

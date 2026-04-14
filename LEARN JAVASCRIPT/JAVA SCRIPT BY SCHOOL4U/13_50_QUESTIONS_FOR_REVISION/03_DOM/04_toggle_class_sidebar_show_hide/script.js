// // 34-> How would you toggle a class on an element is clicked (e.g, show/hide sidebar)

let button = document.querySelector("button");
let sidebar = document.querySelector(".sidebar");

button.addEventListener("click", function () {
  sidebar.classList.toggle("toggleSide");
});

// // Q36 -> Create a stikcy header on scroll. The header becomes fixed to the top after scrolling down. (Key concepts: scroll event, window.scrollY, classList.add/remove).

let navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
});

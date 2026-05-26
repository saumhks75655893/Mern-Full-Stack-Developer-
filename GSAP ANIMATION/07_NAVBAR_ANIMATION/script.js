const menu = document.querySelector("#nav i")
const cross = document.querySelector("#sidebar i")



var tl = gsap.timeline();

tl.to("#sidebar", {
  right: 0,
  duration: 0.5
})

tl.from("#sidebar h3", {
  x: 200,
  duration: 0.4,
  stagger: 0.15,
  opacity: 0,
})

tl.from("#sidebar i", {
  opacity: 0,
})

tl.pause();


menu.addEventListener("click", function () {
  tl.play();
})

cross.addEventListener("click", function () {
  tl.reverse();
})
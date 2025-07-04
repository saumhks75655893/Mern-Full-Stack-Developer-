let smallCursor = document.querySelector(".smallCursor");
let shadowCursor = document.querySelector(".shadowCursor");

let mouseX = 0;
let mouseY = 0;
let animId = null;
let timer = null;
document.addEventListener("mousemove", function (eventObj) {
  mouseX = eventObj.clientX;
  mouseY = eventObj.clientY;

  smallCursor.style.left = mouseX + "px";
  smallCursor.style.top = mouseY + "px";

  if (!animId) {
    shadowMove();
  }

  clearTimeout(timer);
  timer = setTimeout(() => {
    cancelAnimationFrame(animId);
    animId = null;
  }, 2000);
});

function shadowMove() {
  let currentX = parseFloat(shadowCursor.style.left) || 0;
  let currentY = parseFloat(shadowCursor.style.top) || 0;

  distanceX = mouseX - currentX;
  distanceY = mouseY - currentY;

  shadowCursor.style.left = currentX + distanceX * 0.1 + "px";
  shadowCursor.style.top = currentY + distanceY * 0.1 + "px";

  // console.log(distanceX, distanceY);
  animId = requestAnimationFrame(shadowMove);
}

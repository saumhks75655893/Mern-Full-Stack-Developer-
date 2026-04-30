var cursor = document.querySelector("#cursor");
var cursorBlur = document.querySelector("#cursor-blur ");

// // Mouse cursor and its pointer and shadow movement
mouseX = 0;
mouseY = 0;
let animId = null;
let timer = null;

document.addEventListener("mousemove", function (e) {
  mouseX = e.clientX;
  mouseY = e.clientY;

  cursor.style.left = mouseX + "px";
  cursor.style.top = mouseY + "px";

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
  let currentX = parseFloat(cursorBlur.style.left) || 0;
  let currentY = parseFloat(cursorBlur.style.top) || 0;

  distanceX = mouseX - currentX;
  distanceY = mouseY - currentY;

  cursorBlur.style.left = currentX + distanceX * 0.05 + "px";
  cursorBlur.style.top = currentY + distanceY * 0.05 + "px";

  // console.log(distanceX, distanceY);
  animId = requestAnimationFrame(shadowMove);
}

// scorlling animatin for navbar
gsap.to("#nav", {
  backgroundColor: "#000",
  height: "100px",
  duration: "1",
  scrollTrigger: {
    trigger: "#nav",
    scroller: "body",
    // markers: true,
    start: "top -10%",
    end: "top -11%",
    scrub: 1,
  },
});

// scrolling animation for page2

gsap.to(".main", {
  backgroundColor: "#000",
  scrollTrigger: {
    trigger: ".main",
    scroller: "body",
    start: "top -3    0%",
    end: "end -80%",
    scrub: 2,
  },
});

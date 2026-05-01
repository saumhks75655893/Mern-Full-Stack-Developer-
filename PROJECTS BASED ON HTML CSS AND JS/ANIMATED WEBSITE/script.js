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

// Hover effect on nav
// document.addEventListener("mousemove", (e) => {
//   cursor.style.left = mouseX + "px";
//   cursor.style.top = mouseY + "px";
// });

var h4All = document.querySelectorAll("#nav h4");

h4All.forEach((elem) => {
  elem.addEventListener("mouseenter", () => {
    cursor.style.scale = 3;
    cursor.style.border = "1px solid #fff";
    cursor.style.backgroundColor = "transparent";
    elem.style.color = "#95c11e";
    cursor.style.position = "fixed";
    cursor.style.left = "50%";
    cursor.style.right = "50%";
    cursor.style.transform = "translate(-50%, -50%)";
    cursor.style.transition = " all ease 0.3s";
  });

  elem.addEventListener("mouseleave", () => {
    cursor.style.scale = 1;
    cursor.style.border = "0px solid #fff";
    cursor.style.backgroundColor = "#95c11e";
    elem.style.color = "#fff";
  });
});
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

// scrolling animation for page2 - aboutUs

gsap.from(".aboutUs img, .about", {
  y: 70,
  opacity: 0,
  duration: 1.5,
  scrollTrigger: {
    trigger: ".aboutUs",
    scroller: "body",
    start: "top 75%",
    end: "top 65%",
    scrub: 1,
  },
});

gsap.from(".card", {
  scale: 0.8,
  opacity: 0.1,
  duration: 0.5,
  stagger: 0.1,
  scrollTrigger: {
    trigger: ".card",
    scroller: "body",
    start: "top 79%",
    end: "top 69%",
    scrub: 1,
  },
});

gsap.from("#colon1", {
  y: -70,
  x: -70,
  scrollTrigger: {
    trigger: "#colon1",
    scroller: "body",
    start: "top 65%",
    end: "top 60%",
    scrub: 5,
  },
});

gsap.from("#colon2", {
  y: 70,
  x: 70,
  scrollTrigger: {
    trigger: "#colon1",
    scroller: "body",
    start: "top 66%",
    end: "top 61%",
    scrub: 5,
  },
});

gsap.from("#page4 h2", {
  y: 70,
  scrollTrigger: {
    trigger: "#page4 h2",
    scroller: "body",
    start: "top 75%",
    end: "top 55%",
    scrub: 2,
  },
});

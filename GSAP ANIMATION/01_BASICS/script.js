// gsap.to("#box1", {
//   x: 1400,
//   y: 547,
//   duration: 2,
//   delay: 1,
//   backgroundColor: "red",
//   borderRadius: "50%",
//   repeat: -1,
//   yoyo: true,
// });

// gsap.from("#box2", {
//   x: 1400,
//   y: 547,
//   duration: 2,
//   delay: 1,
//   backgroundColor: "green",
//   borderRadius: "50%",
//   repeat: -1,
//   yoyo: true,
// });

// gsap.from("h1", {
//   y: 120,
//   duration: 1,
//   delay: 1,
//   stagger: 1,
//   opacity: 0,
//   // yoyo: true,
// });

// timeline
const tl = gsap.timeline();

tl.to("#box1", {
  x: 1400,
  rotate: 360,
  duration: 2,
  delay: 1,
  borderRadius: "50%",
});

tl.to("#box2", {
  x: 1400,
  rotate: 360,
  duration: 2,
  borderRadius: "50%",
});

tl.to("#box3", {
  x: 1400,
  rotate: 360,
  duration: 2,
  borderRadius: "50%",
});

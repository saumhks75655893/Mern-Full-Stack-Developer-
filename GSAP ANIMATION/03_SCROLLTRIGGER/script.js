gsap.from("#page1 #box", {
  scale: 0,
  duration: 1,
  delay: 0.5,
});

gsap.from("#page2 #box", {
  scale: 0,
  duration: 1,
  delay: 1,
  scrollTrigger: {
    trigger: "#page2 #box",
    scroller: "body",
    markers: true,
    start: "top 60%",
    scrub: true,
  },
});

gsap.from("#page3 #box", {
  scale: 0,
  duration: 1,
  scrollTrigger: {
    trigger: "#page3 #box",
    scroller: "body",
    markers: true,
    start: "top 90%",
    scrub: true,
  },
});

gsap.to("#page2 h1", {
  transform: "translateX(-210%)",
  scrollTrigger: {
    trigger: "#page2",
    scroller: "body",
    markers: true,
    start: "top 0%",
    end: "top -160%",
    scrub: true,
    pin: true,
  },
});

var tl = gsap.timeline();

tl.from("#heading", {
  y: -30,
  duration: 0.5,
  delay: 0.5,
  opacity: 0,
});
tl.from("#navs a", {
  y: -30,
  opacity: 0,
  stagger: 0.3,
});
tl.from("#content h1", {
  y: 30,
  opacity: 0,
  stagger: 0.5,
  scale: 0.5,
});

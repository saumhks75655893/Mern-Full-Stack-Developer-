let initialPath = "M 15 250 Q 625 250 1250 250";

let finalPath = `M 15 250 Q 625 250 1250 250`;

const string = document.querySelector("#string");
string.addEventListener("mousemove", (e) => {
  initialPath = `M 15 250 Q ${e.x} ${e.y} 1250 250`;
  gsap.to("svg path", {
    attr: { d: initialPath },
    duraton: 0.2,
    ease: "power3.out",
  });
});

string.addEventListener("mouseleave", () => {
  gsap.to("svg path", {
    attr: { d: finalPath },
    duration: 1.8,
    ease: "elastic.out(1, 0.2)",
  });
});

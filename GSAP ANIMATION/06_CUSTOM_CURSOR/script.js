var main = document.querySelector("#main");
var cursor = document.querySelector("#cursor  ");
var imgDiv = document.querySelector("#img");

main.addEventListener("mousemove", (e) => {
  gsap.to(cursor, {
    x: e.x,
    y: e.y,
    duration: 0.5,
    ease: "power1.out",
  });
});

imgDiv.addEventListener("mouseenter", () => {
  cursor.innerHTML = "Know More";
  gsap.to(cursor, {
    scale: 4,
    backgroundColor: "#ffffff70",
  });
});

imgDiv.addEventListener("mouseleave", () => {
  cursor.innerHTML = "";
  gsap.to(cursor, {
    scale: 1,
    backgroundColor: "#fff",
  });
});

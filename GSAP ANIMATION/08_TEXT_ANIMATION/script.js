function BreakWordInTheText() {
  const h1 = document.querySelector("h1");
  const h1Text = h1.textContent;


  const h1TextSplitted = h1Text.split('');
  const halfValue = Math.floor(h1TextSplitted.length / 2);

  var clutter = ""
  h1TextSplitted.forEach((elem, idx) => {
    if (idx < halfValue) {
      clutter += `<span class="left">${elem}</span>`
    } else {
      clutter += `<span class="right">${elem}</span>`
    }
  })

  h1.innerHTML = clutter;
}

BreakWordInTheText();


gsap.from("h1 .left", {
  y: 70,
  delay: 0.6,
  opacity: 0,
  duration: 0.5,
  stagger: 0.15,
})

gsap.from("h1 .right", {
  y: 70,
  delay: 0.6,
  opacity: 0,
  duration: 0.5,
  stagger: -0.15,
})
function page1Animation() {
  var tl = gsap.timeline();

  tl.from("nav .part1, nav h4, nav button", {
    y: -30,
    opacity: 0,
    duration: 0.4,
    delay: 0.2,
    stagger: 0.15,
  })

  tl.from(".center-part1 h1", {
    x: -200,
    opacity: 0,
    duration: 0.5,
  })
  tl.from(".center-part1 p", {
    x: -100,
    opacity: 0,
    duration: 0.3,
  })
  tl.from(".center-part1 button", {
    opacity: 0,
    duration: 0.3,
  })

  tl.from(".center-part2 img", {
    x: 200,
    opacity: 0,
    duration: 0.5,
  }, "-=0.5")

  tl.from(".section1Button img", {
    y: 200,
    opacity: 0,
    delay: 0.2,
    duration: 0.3,
    stagger: 0.15,

  })
}

page1Animation();


function page2Animation() {

  var tl2 = gsap.timeline({
    scrollTrigger: {
      trigger: ".section2",
      scroller: "body",
      start: "top 50%",
      end: "top 0%",
      scrub: 1,
    }
  });

  tl2.from(".services", {
    y: 30,
    opacity: 0,
    duration: 0.8,
  })

  tl2.from(".elem.line1.left", {
    x: -300,
    opacity: 0,
    duration: 0.8,
  }, "anime")
  tl2.from(".elem.line1.right", {
    x: 300,
    opacity: 0,
    duration: 0.8,
  }, "anime")

  tl2.from(".elem.line2.left", {
    x: -300,
    opacity: 0,
    duration: 0.8,
  }, "anim")
  tl2.from(".elem.line2.right", {
    x: 300,
    opacity: 0,
    duration: 0.8,
  }, "anim")
}

page2Animation(); 
const h1Text = document.querySelector('h1').textContent;

const h1TextSplitted = h1Text.split('');


var clutter = ""
h1TextSplitted.forEach((elem) => {
  clutter += elem
})

console.log(clutter); 
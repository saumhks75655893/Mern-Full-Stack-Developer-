// function declaration
let a = 10;
let b = 20;
add(a, b);

let c = 40;
let d = 50;
add(c, d);

function add(a, b) {
  let c = a + b;
  console.log(a, "+", b, "=", a + b);
}

// function expression (Anonymous function )

const square = function (a) {
  return a * a;
};

console.log(square);
console.log(square(3)); 


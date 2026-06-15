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

//  Return statement in functions

function MainMenu(){
  return 'hi'; 
}
console.log(MainMenu()); 

// function generateRandomNumbers(){
//   let random = Math.random(); 
//   let randomMove = random*8; 

//   return randomMove; 
// }
// console.log(generateRandomNumbers()); 
// console.log(generateRandomNumbers()); 
// console.log(generateRandomNumbers()); 
// console.log(generateRandomNumbers()); 
// console.log(generateRandomNumbers()); 

// function determineDriveStatus(){
//   let age; 
//   let status; 
//   if(age === undefined){
//     return 'Ap awtaar hai !!'; 
//   }
//   if (age > 18){
//     status = 'You can drive'; 
//   }else{
//     status = 'Use a bicycle.'
//   }

//   return status; 

// }

// let status = determineDriveStatus(); 
// console.log(status); 

// function with parameters

function sum(a,b){
  let s = a + b; 
  return s; 
}

console.log(sum(4,5));
console.log(sum(10,20));

//default


function mul(a,b,c=10){  // here value of c is default
  let m = a * b * c; 
  return m; 
}

console.log(mul(2,3));
console.log(mul(4,5,10));



// function expression (Anonymous function )

// const square = function (a) {
//   return a * a;
// };

// console.log(square);
// console.log(square(3)); 


// arrow functions are concise way to write anonymous functions

// normal anonymous function
let sum = function(num1, num2){
  return num1 + num2; 
}

console.log(sum(3,5));

// arrow functions
let sum1 = (num1, num2) => {
  return num1 + num2; 
}

console.log(sum1(3,5));


let square = num => num * num; 
console.log(square(5));




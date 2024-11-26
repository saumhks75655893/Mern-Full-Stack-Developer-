// Callback function

function greet(name, callback) {
  console.log("Hi" + " " + name);
  callback();
}

function callme() {
  console.log("I am a callback function.");
}

greet("Peter", callme);

// Callback function example

//main function
const calculate = (a, b, operation) => {
  return operation(a, b);
};

// method 1
const addition = calculate(3, 4, function (num1, num2) {
  return num1 + num2;
});

console.log("Addition is : ",addition);

// method 2 

const subtraction = (a,b) => a-b; 
const subRes = calculate(8,4,subtraction); 
console.log("Subtraction is: ",subRes);


// method 3
function multiply(a,b){
    return a * b; 
}

const mulRes = calculate(2,3,multiply); 
console.log("Multiplication is : ",mulRes);

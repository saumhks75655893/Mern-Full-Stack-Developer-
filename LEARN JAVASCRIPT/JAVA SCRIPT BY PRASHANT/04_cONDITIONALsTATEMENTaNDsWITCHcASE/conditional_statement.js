console.log("Conditional Statement");

// if-else
const age = 12;
if (age >= 18) {
  console.log("You can vote.");
} else {
  console.log("You cannot vote.");
}

// if-else if - else
const marks = 60;
if (marks > 90) {
  console.log("A+");
} else if (marks > 80) {
  console.log("A");
} else if (marks > 70) {
  console.log("B+");
} else if (marks > 60) {
  console.log("B");
} else {
  console.log("FAiled");
}

// nested if-else statement : ---------

const number = 50;
if (number > 20) {
  console.log("Greate than 20");
  if (number > 30) {
    console.log("Number is greater than 30");
  } else {
    console.log("Number is not greater than 30");
  }
} else {
  console.log("Number is not greater than 20");
}

console.log(
  "This statement will execute always either number is greater or smaller."
);

// Ternary Operator

const mark = 65;
const result = mark >= 60 ? "Passed" : "Failed";
console.log(result);

// Switch case 

const grade = "C";
switch(grade)
{
  case "A":
    console.log("A -> Very good!");
    break; 
  case "B":
     console.log("B -> Good, Keep learning!");
     break; 
  case "C":
    console.log("C -> Need improvement!")
     break; 
  case "D":
    console.log("D -> Not good!");
    break; 
  default:
    console.log("Invalid Grade!");
    
        
    
}

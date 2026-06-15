// // Q1 -> Give choice to the user to select the theme color and set the selected theme color and console it.

// let theme = prompt("Select the theme color (light, dark, pink, green): ");
// let color = "";

// if (theme === "light") {
//   color = "White";
// } else if (theme === "dark") {
//   color = "Black";
// } else if (theme === "pink") {
//   color = "Pink";
// } else if (theme === "green") {
//   color = "Green";
// }

// if (
//   theme !== "pink" &&
//   theme !== "green" &&
//   theme !== "light" &&
//   theme !== "dark"
// ) {
//   console.log("Invalid theme selection");
// } else {
//   console.log(`Your selected theme is ${theme} and the color is ${color}.`);
// }

// // Q2 -> Find the smallest of three numbers. Numbers are given by the user.

// let num1 = Number(prompt("Enter first number : "));
// let num2 = Number(prompt("Enter second number : "));
// let num3 = Number(prompt("Enter third number : "));

// if (num1 < num2) {
//   if (num1 < num3) {
//     console.log(
//       `The smallest number among ${num1}, ${num2} and ${num3} is ${num1}`
//     );
//   } else {
//     console.log(
//       `The smallest number among ${num1}, ${num2} and ${num3} is ${num3}`
//     );
//   }
// } else {
//   if (num2 < num3) {
//     console.log(
//       `The smallest number among ${num1}, ${num2} and ${num3} is ${num2}`
//     );
//   } else {
//     console.log(
//       `The smallest number among ${num1}, ${num2} and ${num3} is ${num3}`
//     );
//   }
// }

// if (num1 < num2 && num1 < num3) {
//   console.log(
//     `The smallest number among ${num1}, ${num2} and ${num3} is ${num1}`
//   );
// } else if (num2 < num3) {
//   console.log(
//     `The smallest number among ${num1}, ${num2} and ${num3} is ${num2}`
//   );
// } else {
//   console.log(
//     `The smallest number among ${num1}, ${num2} and ${num3} is ${num3}`
//   );
// }

// // Q3 -> Write a program to manage Role-based access control
// /*
// Given a user role ("admin", "editor", "viewer")
// Admin: full access
// Editor: edit access
// Viewer: read-only
// Any Other: no access
// */

// let userRole = "admin";

// switch (userRole) {
//   case "admin":
//     console.log("Full Access");
//     break;
//   case "editor":
//     console.log("Edit Access");
//     break;
//   case "viewer":
//     console.log("Read Only");
//     break;
//   default:
//     console.log("No access");
// }

// // Q4 -> Check if the number is Divisible by 3 or 5 or both.Prin "Fizz" for multiples of 3,"Buzz" for multiples of 5, "FizzBuzz" for both.

// let number = Number(prompt("Enter the number : "));

// if (number % 3 === 0 && number % 5 === 0) {
//   console.log("FizzBuzz");
// } else if (number % 3 === 0) {
//   console.log("Fizz");
// } else if (number % 5 === 0) {
//   console.log("Buzz");
// } else {
//   console.log("Number is not Divisible either by 3 or 5");
// }

// // Q5 -> Create a simple calculator. Take two numbers and an operator (+, -, *, /) and calculate the result using switch.

// let choiceOperator = prompt("Choose the operator (+, -, *, /) : ");
// let num1 = Number(prompt("Enter first number"));
// let num2 = Number(prompt("Enter second number : "));
// let result;
// switch (choiceOperator) {
//   case "+":
//     result = num1 + num2;
//     console.log(`The result of ${num1} ${choiceOperator} ${num2} = ${result}`);
//     break;
//   case "-":
//     result = num1 - num2;
//     console.log(`The result of ${num1} ${choiceOperator} ${num2} = ${result}`);
//     break;
//   case "*":
//     result = num1 * num2;
//     console.log(`The result of ${num1} ${choiceOperator} ${num2} = ${result}`);
//     break;
//   case "/":
//     result = num1 / num2;
//     console.log(`The result of ${num1} ${choiceOperator} ${num2} = ${result}`);
//     break;
//   default:
//     console.log("Invalid operator selection..!");
// }

// Q6 -> Create a simple atm program.
/*
User can choose : 
        1. Check Balance
        2. Deposit
        3. Withdraw
        4. Exit`
*/

let totalAmount = 1000;

let userChoice = Number(
  prompt(`Choose the operation :   1. Check Balance
                                        2. Deposit
                                        3. Withdraw
                                        4. Exit`)
);

if (userChoice === 1) {
  console.log(`Your current balance is : ${totalAmount}`);
} else if (userChoice === 2) {
  let depositeAmount = Number(prompt("Enter amount you want to deposite : "));
  if (depositeAmount < 1) {
    console.log("Deposite amount should be greater than 1 rupees.");
  } else {
    totalAmount = totalAmount + depositeAmount;
    console.log(
      `After deposit the amount of : ${depositeAmount}\nNow Your current balance is :  ${totalAmount} `
    );
  }
} else if (userChoice === 3) {
  let withdrawAmount = Number(
    prompt("Enter the amount you want to withdraw: ")
  );
  if (withdrawAmount > totalAmount || withdrawAmount < 1) {
    console.log(
      `Withdraw amoun should be greater than 1 or less than current balance : ${totalAmount}`
    );
  } else {
    totalAmount = totalAmount - withdrawAmount;
    console.log(
      `After withdraw the amount of : ${withdrawAmount}\nNow the Current Balance in the account is : ${totalAmount}`
    );
  }
} else if (userChoice === 4) {
  console.log("Thanks for coming...!");
} else {
  console.log("Invalid user choice...!");
}

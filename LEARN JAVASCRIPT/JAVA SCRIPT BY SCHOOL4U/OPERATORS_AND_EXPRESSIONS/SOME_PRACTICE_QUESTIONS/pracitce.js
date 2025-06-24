// Q1 -> Get user to get two numbers using prompt and print their possible arithmetic results.

// let num1 = parseInt(prompt("Enter first number : "));
// let num2 = parseInt(prompt("Enter second number : "));

// console.log(num1 + num2);
// console.log(num1 - num2);
// console.log(num1 * num2);
// console.log(num1 / num2);
// console.log(num1 % num2);
// console.log(num1 ** num2);
// console.log(num1++);
// console.log(++num1);
// console.log(--num1);
// console.log(num1--);

// Q2 -> Can you chain assignment operators? Yes

// let a = (b = c = 4);
// console.log("a = ", a);
// console.log("b = ", b);
// console.log("c = ", c);

// Q3 -> Get user to a number using prompt and check whether the number is even or odd using ternary operator.

// let num = parseInt(prompt("Enter a number : "));
// const result = num % 2 == 0 ? "Even" : "Odd";
// console.log(num, " is ", result);

// Q4 -> What is the final value of x?
/*
let x = 5
x += 3
x -= 2
x *= 4
x /= 6
x %= 3
*/

// let x = 5;
// x += 3;
// x -= 2;
// x *= 4;
// x /= 6;
// x %= 3;
// console.log("Result is = ", x);

// Q5 -> Check if a number is within a range between 10 and 20 (inclusive)

// let num = Number(prompt("Enter a number : "));
// const result = num >= 10 && num <= 20 ? "within range" : "Out of the range";
// console.log(result);

// Q6 -> Write a program to find the largest number between 3 numbers using ternary operator.
// let a = 10,
//   b = 120,
//   c = 30;
// const result = a > b ? (a > c ? a : c) : b > c ? b : c;
// console.log("The largest number is :", result);

// Q7 -> Take a email and password from the user. If the email or password is incorrect or does not match the stored values, display the message "Invalid email or password". If both email and password match the stored values, display "You are logged in successfully"

// let storedEmail = "hksinha@gmail.com";
// let storedPassword = "1234";

// let email = prompt("Enter email : ");
// let password = prompt("Enter password : ");

// const result =
//   email == storedEmail && password == storedPassword
//     ? "You are logged in successfully"
//     : "Invalid email or password";
// console.log(result);

// Q8 -> What will be the output of the following JavaScript code?
// let a = 5,
//   b = 3,
//   c = 2;
// const result = a++ + --b * c-- - ++a + b-- / --c;
// console.log("a : ", a); // 7
// console.log("b : ", b); // 1
// console.log("c : ", c); // 0
// console.log("Result : ", result); // infinity

// Q9 -> What is the output of the console.log(~a) where a=0;
// console.log("~0 = ", ~0); // -1

// Q10 -> What will be the output of the of the following JavaScript code?

// let x = 10;
// let y = 5;
// let z = "10";

// x += y * 2; // x=20
// let isEqual = x == z; // 21 != 10 - false
// let isStrictEqual = x === z; // type is not same - false
// let logicTest = (isEqual || isStrictEqual) && !(y > 10); // false || false -> false && true ===> false
// let result = logicTest ? ++x : --y; // false ? 21 : 4 ==> y=4

// console.log("x : ", x);
// console.log("y : ", y);
// console.log("z : ", z);
// console.log("isEqual : ", isEqual);
// console.log("isStrictEqual : ", isStrictEqual);
// console.log("logicTest : ", logicTest);
// console.log("result : ", result);
// console.log("typeof z : ", typeof z);

// Q11 -> What will be the output of the following JavaScript code?
// let a = 6;
// let b = 3;
// let c = "6";

// a += b << 1;
// let d = a & b;
// let e = a | b;
// let f = a ^ b;
// let g = ~a;

// let check = (a == c && d < e) || !(f === e);

// let result = check ? typeof g : --b;

// console.log("a : ", a);
// console.log("b : ", b);
// console.log("c : ", c);
// console.log("d (a & b) : ", d);
// console.log("e ( a | b) : ", e);
// console.log("f (a ^ b) : ", f);
// console.log("g (~a) : ", g);
// console.log("check : ", check);
// console.log("result : ", result);

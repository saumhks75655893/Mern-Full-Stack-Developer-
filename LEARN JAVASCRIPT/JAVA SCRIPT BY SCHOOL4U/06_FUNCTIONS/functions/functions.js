console.log("FUNCTIONS");

// // BASIC STRUCTURE
// function add(n1, n2) {
//   let result = n1 + n2;
//   console.log(`${n1} + ${n2} = ${n1 + n2}`);
// }

// add(51, 5);

// // 4 WAYS TO CREATE A FUNCTION

// // 1. Without parameter list & without return

// function func() {
//   console.log("Hello world");
// }

// func();

// // 2. Without parameter list & with return

// function func() {
//   let a = 5,
//     b = 10;
//   let add = a + b;

//   return add;
// }

// const result = func();
// console.log("result = ", result);

// // 3. With parameter list & without return

// function func(a, b) {
//   let add = a + b;
//   console.log(`${a} + ${b} = ${add}`);
// }

// func(5, 67);

// // 4. With parameter list & with return

// function func(a, b, c) {
//   let mul = a * b * c;
//   return mul;
// }

// const result = func(5, 6, 7);
// console.log("result = ", result);

// // DEFAULT VALUES

// function greet(name = "guest") {
//   console.log("Good Morning ! Mr.", name);
// }

// greet("Himanshu Kumar");
// greet();

// // expression as default VALUES

// function func(a = 2 + 3 - 3 - 4 * 5) {
//   console.log(a);
// }

// func();

// // TYPES OF FUNCTION

// // 1. Normal Function
// function func() {
//   console.log("My name is Himanshu Kumar..!");
// }
// func();

// // 2. Function expression

// let sum = function (a, b) {
//   return a + b;
// };

// console.log(sum(4, 5));

// // 3. Fat Arrow Function

// let name = () => {
//   console.log("Himanshu Kumar");
// };

// name();

// // 4. Anonymous function

// setTimeout(function () {
//   console.log("Himanshu Kumar");
// }, 3000);

// // 5. Immediate Invoked Function Expression (IIFE)

// console.log("Himanshu Kumar");
// (function () {
//   console.log("Himanshu Kumar");
// })();

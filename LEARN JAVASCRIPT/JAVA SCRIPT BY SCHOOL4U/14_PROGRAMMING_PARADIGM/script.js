// // PROGRAMMING PARADIGSM: It's a style or a way of programming.

// // 1==>  Imperative Paradigm : In this paradigm, the programer tell the computer how to do something step by step.

// // // // 1.1) Procedural Programming: Procedure hai lekin koi bhi structure nahi balki kabhi bhi ye kisi bhi function pe jump kar ja rha hai.

// function checkNumber(num) {
//   if (num < 0) negativeNumber();
//   else if (num > 0) positiveNumber();
//   else if (num === 0) zeroNumber();

//   endOftheProgram();
// }

// checkNumber(45);

// function positiveNumber() {
//   console.log("Positive number");
// }

// function negativeNumber() {
//   console.log("Negative number");
// }

// function zeroNumber() {
//   console.log("Number is equal to zero.");
// }

// function endOftheProgram() {
//   console.log("Program ended");
// }

// // // // 1.2) Structured Programming

// function checkNumber(number) {
//   if (number === 0) {
//     console.log("Number is zero");
//   } else if (number < 0) {
//     console.log("Number is negative");
//   } else if (number > 0) {
//     console.log("Number is positive");
//   }

//   console.log("End of the program");
// }
// checkNumber(345);

// // // 2==> Declarative Paradigm : You just describe what you want, not how to do it.
// // // // 2.1) Fnctional Programming

// let arr = [1, 2, 3, 4, 5];
// function doubledArray(array) {
//   return arr.map((elem) => elem * 2);
// }

// let doubledArr = doubledArray(arr);
// console.log(doubledArr);
// console.log(arr);

// // // // 2.2) Reactive Programming
// We will learn this further.

// // // 3 ==> OBJECT - ORIENTED PROGRAMMING
// // // // 3.1) Class- Based

// class car {
//   age = 15;

//   constructor(name) {
//     this.name = name;
//   }

//   start() {
//     return "Starting the car";
//   }
//   stop() {
//     return "Stopping the car";
//   }
// }

// let name = "bugatti";

// let bugati = new car(name);
// console.log(bugati);
// console.log(bugati.age);
// console.log(bugati.start());
// console.log(bugati.stop());

// // // // 3.2) Prototype - based -> will learn furthur.

// // // 4 ==> EVENT - DRIVEN PROGRAMMING

// function clicked() {
//   console.log("I'm clicked");
// }

// // // // 5 ==> ASYNCHRONOUS PROGRAMMING
// // // // // 5.1) Callback - based
// // // // // 5.2) Promise - based
// // // // // 5.3) async / await (syntactic sugar over promises)

// // works cocurrently
// setTimeout(() => {
//   console.log("task 1");
// }, 5000);

// setTimeout(() => {
//   console.log("task 2");
// }, 3000);

// setTimeout(() => {
//   console.log("task 3");
// }, 4000);

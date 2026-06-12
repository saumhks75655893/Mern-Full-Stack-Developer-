// // SYNCHRONOUS PROGRAMMING
// function task1() {
//   console.log("Task 1 completed");
// }
// task1();

// console.log("task 2");
// console.log("task 3");

// // ASYNCHRONOUS PROGRAMMING
// function taskA() {
//   setTimeout(() => {
//     console.log("Task A completed");
//   }, 2000);
// }
// taskA();
// function taskB() {
//   setTimeout(() => {
//     console.log("Task B completed");
//   }, 1000);
// }
// taskB();
// function taskC() {
//   setTimeout(() => {
//     console.log("Task C completed");
//   }, 4000);
// }
// taskC();

// PROMISE DURING FETCHING DATA FROM API

// let data = fetch("https://jsonplaceholder.typicode.com/users"); // here get a promise object
// console.log(data);

// to solve promise object we can use async/await or then method

async function fetchData() {
  let response = await fetch("https://jsonplaceholder.typicode.com/users/2");
  console.log(await response.json());
}

fetchData();

console.log("First task");
console.log("Second task");

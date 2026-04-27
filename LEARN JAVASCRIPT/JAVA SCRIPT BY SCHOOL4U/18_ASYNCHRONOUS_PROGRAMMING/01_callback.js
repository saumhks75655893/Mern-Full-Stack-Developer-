// Callback is always a function.
// HOD (higher ordre funtion) is such functions which takes another function as an argument (which are called callback function).

// // SYNCHRONOUS CALLBACKS
// // example 1
// function HOD(name, callback) {
//   callback(name);
// }

// function printName(name) {
//   console.log("Hello !! ", name);
// }
// HOD("Himanshu Kumar", printName);

// // // example 2

// function calculation(a, b, callback) {
//   callback(a, b);
// }

// function add(a, b) {
//   console.log("sum : ", a + b);
// }

// function sub(a, b) {
//   console.log("Substract : ", a - b);
// }

// function mul(a, b) {
//   console.log("Multiplication : ", a * b);
// }

// calculation(10, 5, add);
// calculation(10, 5, sub);
// calculation(10, 5, mul);

// // ASYNCHRONOUS CALLBACKS
// // example - 1

// console.log("1. Start Fetching Data .... ");

// setTimeout(() => {
//   console.log("2. Data Fetched Succefully");
//   processData();
// }, 3000);

// function processData() {
//   console.log("3. Processing Data .... ");
// }

// console.log("4. Some Other Task Processing... ");

// // // example - 2

// console.log("Fetching 1st Data ... ");
// function fetchData(data, callback) {
//   setTimeout(() => {
//     console.log(data);
//     if (callback) {
//       callback(data);
//     }
//   }, 3000);
// }

// fetchData("1st Data Fetched Successfully", () => {
//   (console.log("Fetching 2nd data ..."),
//     fetchData("2nd Data fetched Successfully", () => {
//       (console.log("Fetching 3rd data ..."),
//         fetchData("3rd Data fetched Successfully"));
//     }));
// });

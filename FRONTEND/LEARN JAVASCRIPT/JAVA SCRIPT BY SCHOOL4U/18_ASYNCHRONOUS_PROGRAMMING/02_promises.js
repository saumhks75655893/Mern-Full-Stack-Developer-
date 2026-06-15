// // Promises are objects that represent the eventual completion (or failure) of an asynchronous operation and its resulting value.

// let p1 = new Promise((resolve, reject) => {
//   // resolve({
//   //   name: "John",
//   //   age: 30,
//   // });
//   reject("Error: Something went wrong!");
// });

// p1.then((data) => {
//   console.log("Data received:", data);
// }).catch((error) => {
//   console.log(error);
// });

// // // Example of a function that returns a promise

// console.log("Fetching data ..... !!!!!!!!!!");
// function fetchData() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       let data = {
//         name: "John",
//         age: 30,
//       };

//       resolve(data);
//     }, 3000);
//   });
// }
// function fetchData2() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       let data = {
//         profession: "Developer",
//         experience: 5,
//       };

//       resolve(data);
//       // reject("Something went wrong!");
//     }, 3000);
//   });
// }
// function fetchData3() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       let data = "All Data Fetched Successfully";

//       resolve(data);
//       // reject("Something went wrong!");
//     }, 3000);
//   });
// }

// // let data = fetchData();
// // console.log(data);

// fetchData()
//   .then((data) => {
//     console.log("Result 1:", data);

//     console.log("Fetching data 2.... !!! ");
//     return fetchData2();
//   })
//   .then((data) => {
//     console.log("Result 2 : ", data);

//     console.log("Fetching data 3.... !!! ");
//     return fetchData3();
//   })
//   .then((data) => {
//     console.log("Result 3 : ", data);
//   })
//   .catch((error) => {
//     console.error("Error:", error);
//   });

// // Example of using fetch API which returns a promise
let data = fetch("https://jsonplaceholder.typicode.com/users");
console.log(data);
data.then((res) => {
  console.log(
    "Data fetched successfully!",
    res.json().then((jsonData) => {
      console.log(jsonData);
    }),
  );
});

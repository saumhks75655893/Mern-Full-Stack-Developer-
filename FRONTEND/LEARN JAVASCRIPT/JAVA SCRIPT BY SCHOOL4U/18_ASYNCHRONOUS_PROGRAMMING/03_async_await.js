// function getData() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("Data received");
//     }, 2000);
//   });
// }

// async function fetchData() {
//   let res = await getData();
//   console.log(res);

//   console.log("Function work completed...");
//   console.log("Finish");
// }

// fetchData();

// console.log("Outside of async function");

// // Example 2 : Fetching data from API using async await

// console.log("Fetching Data.... !!!!!!!!! ");
// function getData() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       let res = fetch("https://jsonplaceholder.typicode.com/posts");
//       resolve(res);
//     }, 2000);
//   });
// }

// async function fetchData() {
//   let res1 = await getData();
//   console.log("Response 1 : ", res1);

//   let res2 = await getData();
//   console.log("Response 2 : ", await res2.json());
// }

// fetchData();

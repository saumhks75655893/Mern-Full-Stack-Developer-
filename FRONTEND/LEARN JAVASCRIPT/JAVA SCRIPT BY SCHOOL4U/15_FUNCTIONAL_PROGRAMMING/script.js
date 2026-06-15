/*

Imperative foreach v/s Declarative foreach
Imperative map v/s Declarative map
Imperative filter v/s Declarative filter
Imperative reduce v/s Declarative reduce
Imperative every v/s Declarative every
Imperative find v/s Declarative find

*/

// // // // 1-> PURE FUNCTON : same input ke liye same output
// // just return after completing the work but within the function not outside of the function.
// function add(a, b) {
//   return a + b;
// }

// let addition = add(4, 5);
// console.log(addition);

// // // //  2-> IMMUTABILITY: don't change, not modified
// try to make a copy and made then modified instead of the original.

// // immutability
// let obj = {
//   name: "alice",
// };

// // console.log(obj);
// // obj.age = 23;
// // console.log(obj);

// // // mutability
// function notMutable(obj) {
//   let newObj = { ...obj };
//   newObj.age = 23;
//   return newObj;
// }

// console.log(obj);
// let newObj = notMutable(obj);
// console.log(obj);
// console.log(newObj);

// // array immutability
// let arr = [1, 2, 3, 4, 5];

// function notMutableArr(arr) {
//   let newArr = [...arr];
//   newArr.push("hello");
//   return newArr;
// }

// let newArr = notMutableArr(arr);
// console.log(arr);
// console.log(newArr);

// // // find last element of the array
// let arr = [1, 2, 3, 4, 5];

// function lastElement(arr) {
//   // return arr.pop(); // find last element
//   return arr.slice(0, -1); // remove last element
// }

// console.log(lastElement(arr));

// // // // 3-> Avoid shared state

// // ❌ shared state(bad):
// let total = 0;
// function amount(n) {
//   total += n;
// }

// amount(100);
// console.log(total);

// // ✅ avoid shared state

// function add(a, b) {
//   return a + b;
// }

// console.log(add(4, 5));

// // // // 4-> Avoid Side Effect

// // ❌ side effect
// function logMessage(msg) {
//   console.log(msg); // interaction with console (bom)
// }
// logMessage("hello world");

// // ✅ NO side effect

// function capitalizeFirstLetter(str) {
//   return str[0].toUpperCase() + str.slice(1);
// }

// let result = capitalizeFirstLetter("hello");
// console.log(result);

// // // // 5-> Reuse or Compose

// // ✅ break the big logics into small chunks

// const lowerCase = (str) => str.toLowerCase();
// const removeSpace = (str) => str.replaceAll(" ", "");
// const addTheRate = (str) => "@" + str;

// function createUserName(str) {
//   return addTheRate(removeSpace(lowerCase(str)));
// }

// let result = createUserName("Himanshu Kumar Sinha");
// console.log(result);

// // // 6-> DON'T ITERATE (IMPERATIVE)
// avoid for, while, etc. Use map, filter, reduce.
// let even = [];
// for (let n of [1, 2, 3, 4]) {
//   if (n % 2 === 0) even.push(n);
// }

// // console.log(even);

// let evens = [1, 2, 3, 4].filter((n) => n % 2 === 0);
// console.log(evens);

// // // // 7 -> LOOSE COUPLING

// // ❌ tightly coupled
// function getUser() {
//   return fetch("https://api.twitter.com/1.1/users");
// }
// function getProduct() {
//   return fetch("https://api.twitter.com/1.1/products");
// }

// function getReviews() {
//   return fetch("https://api.twitter.com/1.1/reviews");
// }

// console.log(getUser());
// console.log(getProduct());
// console.log(getReviews());

// // ✅ loosely coupled

// let endpoint = "https://api.twitter.com";

// function getUser(endpoint) {
//   return fetch(`${endpoint}/1.1/users`);
// }
// function getProduct(endpoint) {
//   return fetch(`${endpoint}/1.1/products`);
// }

// function getReviews(endpoint) {
//   return fetch(`${endpoint}/1.1/reviews`);
// }

// console.log(getUser(endpoint));
// console.log(getProduct(endpoint));
// console.log(getReviews(endpoint));

// // ✅ less loosely coupled
// let endpoint = "https://api.twitter.com";

// async function getData(endpoint, route) {
//   const response = await fetch(`${endpoint}/${route}`);
//   return response.json;
// }

// console.log(getData(endpoint, "1.1/users"));
// console.log(getData(endpoint, "1.1/products"));
// console.log(getData(endpoint, "1.1/reviews"));

// ✅ SOME OTHER EXAMPLE ON LOOSELY COUPLING

// ❌ first way : tightly coupled
// let user = {
//   name: "Himanshu Kumar",
//   email: "hksinha@75.gmail.com",
//   phone: 9246897580,
// };
// function sendEmail(user) {
//   console.log("Email sent to : ", user.email);
// }
// function sendSms(user) {
//   console.log("Sms send to : ", user.phone);
// }

// function sendWpMsg(user) {
//   console.log("Whatsapp message send to : ", user.phone);
// }

// sendEmail(user);
// sendSms(user);
// sendWpMsg(user);

// // ✅ second way : loosely coupled
// let user = {
//   name: "Himanshu Kumar",
//   email: "hksinha@75.gmail.com",
//   phone: 9246897580,
// };
// function sendMessage(msg, sendTo) {
//   console.log(`${msg} sent to ${sendTo}`);
// }

// sendMessage("Email", user.email);
// sendMessage("Message", user.phone);
// sendMessage("Whatsapp message", user.phone);

// // ✅ third way: more loosely coupled

// let user = {
//   name: "Himanshu Kumar",
//   email: "hksinha@75.gmail.com",
//   phone: 9246897580,
// };

// let user1 = {
//   name: "Sunder Kumar",
//   email: "sundaram@75.gmail.com",
//   phone: 9246897580,
// };

// let user2 = {
//   name: "Kamlesh Kushwaha",
//   email: "kamleshkushwaha@75.gmail.com",
//   phone: 9246897580,
// };
// function sendEmail(user) {
//   console.log("Email sent to : ", user.email);
// }
// function sendSms(user) {
//   console.log("Sms send to : ", user.phone);
// }

// function sendWpMsg(user) {
//   console.log("Whatsapp message send to : ", user.phone);
// }

// function sendMessage(user, fn) {
//   console.log("Since You are authorized then, ");
//   fn(user);
// }

// sendMessage(user, sendEmail);
// sendMessage(user1, sendWpMsg);

// // // // 8 -> FIRST - CLASS AND HIGHER ORDER FUNCTION

// // ✅ first example
// let function1 = function func() {
//   return "hello";
// }; // first-class function

// let function2 = function func(fn, name) {
//   console.log(`${fn()} ${name}`);
// }; // first-class function (function2), heigher-order function (function2), callback function (fn())

// function2(function1, "ram");

// // ✅ Second example

// const greet = () => "hello";
// const callWithName = (fn, name) => `${fn()} ${name}`;

// // console.log(callWithName(greet, "ram"));
// const greetUser = (name) => callWithName(greet, name);
// console.log(greetUser("Ram"));

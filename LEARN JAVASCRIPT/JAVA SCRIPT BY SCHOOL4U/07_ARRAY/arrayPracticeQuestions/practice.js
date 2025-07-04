// Q1-> For an array with marks of students find the average marks of the entire class.
// let marks = [67, 73, 89, 72, 90, 95, 57, 61, 99];
// let totalMarks1 = marks.reduce((acc, curr) => {
//   return acc + curr;
// });
// let avgMarks = totalMarks1 / marks.length;
// console.log("Using reduce method : ", avgMarks);

// let totalMarks = 0;
// let avgMarks2;
// for (let val of marks) {
//   totalMarks = totalMarks + val;
//   avgMarks2 = totalMarks / marks.length;
// }
// console.log("Using looping method : ", avgMarks2);

// // Q2 -> Create an array with given length(n) and store natural members from 1 to n;

// let n = Number(prompt("Enter the number : "));
// let arr = new Array(n);

// for (let i = 0; i < n; i++) {
//   arr[i] = i + 1;
// }

// console.log(arr);

// // Q3 -> Create an array with given length n and fill with 0;

// let n = Number(prompt("Enter the number : "));
// let arr = new Array(n);

// for (let i = 1; i <= n; i++) {
//   arr.fill(0);
// }

// console.log(arr);

// // Q4 -> Consider an array of mcu heroes ([ironman, captain, black-window,wanda, hulk,black-panther])
// /*
//   a) Add spiderman at the end and thor at the start
//   b) Remove black-widow and add hawkeye at its place
//   c) Check whether captain is present in the array
// */

// let heroes = [
//   "ironman",
//   "captain",
//   "black - window",
//   "wanda",
//   "hulk",
//   "black - panther",
// ];
// console.log("original array : ", heroes);
// // a
// heroes.push("spiderman");
// heroes.unshift("thor");
// console.log("after complete a : ", heroes);
// // b
// heroes.splice(3, 1, "hawkeye");
// console.log("after completing b : ", heroes);
// // c
// console.log(heroes.includes("captain"));

// // Q5 -> How to check if given thing is array or not? How to convert other datatypes to array? What if we try to convert an object to an array?

// let a = 5;
// console.log(Array.isArray(a)); // to check the given thins is array or not;

// let a = [1, 2, 3];
// console.log(typeof a);

// let b = { n: "1", m: "2" };
// let c = Array(b);
// console.log(c, typeof c);

// let b = "hello";
// console.log(b.split(""));
// console.log(Array.from(b));

// if we try to convert object to an array we will find an empty array

// // Q6 -> We have four variables a,b,c and d, a contains any number, b contains any string, c contains any object, and d contains any array. Can we create an array from all these four variables? if yes. How?
// let a = 10;
// let b = "hi";
// let c = { 1: "h", 2: "e", 3: "l", 4: "l", 5: "o" };
// let d = [1, 2, 3, 4, 5];
// let arr = new Array(a, b, c, d);
// console.log(arr);
// let arr1 = Array.of(a, b, c, d);
// console.log(arr1);

// // Q7 -> Check given string is polindrome or not;

// let isPolindrome = function (str) {
//   let newStr = str.split("");

//   let reveStr = [];
//   for (let i = 0; i < str.length; i++) {
//     let ch = newStr.pop();
//     reveStr.push(ch);
//   }

//   let polindromeString = reveStr.join("");
//   return polindromeString;
// };

// let str = prompt("Enter string : ");
// let polindromeString = isPolindrome(str);

// if (str === polindromeString) {
//   console.log(`${str} is a polindrome string.`);
// } else {
//   console.log(`${str} is not a polindrome string.`);
// }

// let str = "ullu";
// let revStr = str.split("").reverse().join("");
// if (str === revStr) {
//   console.log("Polindrome string.");
// } else {
//   console.log("Not a Polindrome string.");
// }

// // Q8 -> Capitalize the first letter of every word in a sentence.
// let str =
//   "you will get your own things but in a very different place with some questioniary.";
// console.log("Sentece without uppercase : ", str);

// let newstr = str.split(" ");
// let upperCaseArr = [];
// newstr.map((elem) => {
//   upperCaseArr.push(elem[0].toUpperCase() + elem.slice(1));
// });

// let upperCaseStr = upperCaseArr.join(" ");
// console.log("Sentence with uppercase : ", upperCaseStr);

// let newStr = str.split(" ").map((elem) => {
//   return elem.charAt(0).toUpperCase() + elem.slice(1);
// });
// console.log("Upper case sentece : ", newStr.join(" "));

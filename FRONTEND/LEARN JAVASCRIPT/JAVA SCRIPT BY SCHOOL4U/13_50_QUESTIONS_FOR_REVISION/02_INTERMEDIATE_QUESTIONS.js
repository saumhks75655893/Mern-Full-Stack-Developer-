// // Q16 -> What is the difference between parseInt and number?

// let a = "345.34534";
// let b = parseInt(a); // 34
// let c = Number(a); // 34.345

// console.log(typeof b, b);
// console.log(typeof c, c);

// let d = parseInt("10", 2);
// let e = Number("10", 2);
// console.log(typeof d, d); // Output: number 2
// console.log(typeof e, e); // Output: number 10

// let f = parseInt("110", 8);
// let g = parseInt("110", 16);
// let h = parseInt("110", 2);
// console.log(typeof f, f); // Output: number 64
// console.log(typeof g, g); // Output: number 272
// console.log(typeof h, h); // Output: number 6

// // Q17 -> Why does 0.1 + 0.2 !== 0.3?

// let a = 0.1 + 0.2;
// console.log(a);
// let b = 0.3;
// console.log(b);

// console.log(a === b); // Output: false

// // Q18 -> Explain the floating-point precision issues in JavaScript
// // Floating-point precision issues arise because JavaScript uses the IEEE 754 standard for representing numbers, which can lead to inaccuracies in arithmetic operations involving decimal numbers.

// // // Q19 -> How would you handle high-precision decimal math operations in js?

// // To handle high-precision decimal math operations in JavaScript, you can use libraries like Big.js, Decimal.js, or bignumber.js. These libraries provide methods for precise arithmetic operations without the floating-point precision issues inherent in JavaScript's native number type.

// // inbuild method
// let a = 0.1;
// let b = 0.2;

// let c = Number((a + b).toFixed(4));
// console.log(c);
// console.log(c === 0.3); // Output: true

// // library method
// const Decimal = require("decimal.js");

// let a = Decimal(0.1);
// let b = Decimal(0.2);
// console.log(Number(a.plus(b)) === 0.3);

// // // Q20 -> What is the difference between slice and splice?

// // // The slice() method returns a shallow copy of a portion of an array into a new array object,
// // Not changes in original array
// // return an array containing the selected elements.
// // It's works both array as well as string.

// //  splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.
// // It returns the removed elements as an array.
// // Changes the original array
// // It works only on arrays.

let a = [1, 2, 3, 4, 6];
let str = "Himanshu";

let slicedResult = a.slice(1);
console.log(slicedResult); // Output: [2, 3, 4, 6]
console.log(str.slice(1, 3)); // Output: "imanshu"
console.log(str.slice(3, 7));
console.log(str.slice(-4, -2));

// let splicedResult = a.splice(1, 2, 10, 11, 12);
// console.log(splicedResult); // Output: [1, 2, 3, 4, 6]
// console.log(a);
// console.log();

// let strArr = Array.from(str);
// console.log(strArr);
// console.log();

// strArr.splice(1, 3);
// strArr.splice(1, 0, "M", "e", "e", "r", "a");
// console.log();

// console.log(strArr); // Output: ['H', 'M', 'e', 'e', 'r', 'a', 'n', 's', 'h', 'u']

// // // Q21 -> Create  a function that reverse each word of a given sentence E.g -> 'Mai hun Himanshu' -> 'uhsnamiH nuh iaM'

// let sentence = "Mai hun Himanshu Kumar Sinha";

// function reverseEachWord(sentenceToReverse) {
//   let words = sentenceToReverse.split(" ");
//   let reverseSentance = words.reverse();
//   let reveredSentence = reverseSentance.map((word) => {
//     return word.split("").reverse().join("");
//   });
//   return reveredSentence.join(" ");
// }

// console.log(reverseEachWord(sentence));

// // // Q22-> In an array of number and strings, only add those numbers which are not strings.

// let arr = [1, 2, 3, 4, 5, "1", "2", "45", "345", 40];

// let add = 0;
// arr.map((elem) => {
//   if (typeof elem === "number") {
//     add += elem;
//   }

//   return;
// });

// console.log(add);

// // // Q23 -> How would you check if a number is integer.

// let num = 45;
// console.log(Number.isInteger(num)); // Output: true

// if (num % 1 === 0) console.log(true);
// else console.log(false); // Output: true

// // // Q24 -> Create a function to reverse a number

// function reverseNumber(num){
//   console.log(Number(num.toString().split('').reverse().join('')));
// }

// reverseNumber(789107);

// // // Q25 -> Write a function that returns a passed string with letters in alphabetical order.

// function sortStringAlphabetically(str) {
//   return str.toLowerCase().split("").sort().join("");
// }

// console.log(sortStringAlphabetically("Himanshu")); // Output: "aaahhimnsu"

// // // Q26 -> Write a javascript function that accepts a string as parameter and converts the first letter of each word of the string in upper case.

// function eachWordUppercase(str) {
//   return str.split(" ").map((elem) => {
//     return elem.charAt(0).toUpperCase() + elem.slice(1);
//   }).join(" ");
// }

// let result = eachWordUppercase("himanshu kumar sinha");
// console.log(result);

// // // Q27 -> Write a javascript function to get the first element of the array. Passing a parameter 'n' will return the first 'n' element of the array;

// function firstElement(arr, n = 1) {
//   if (n <= 0) return [];
//   if (n > arr.length) return arr;
//   return arr.slice(0, n);
// }

// let arr = [1, 2, 3, 4, 5, 6];
// console.log(firstElement(arr, 3));

// // // Q28 -> Write a javascript function to get the number of occurrences of each letter in a given string.

// function letterOccurrences(str) {
//   let obj = {};

//   for (let char of str) {
//     char = char.toLowerCase();
//     if (char === " ") continue; // Skip spaces
//     else if (obj.hasOwnProperty(char)) {
//       obj[char] += 1;
//     } else {
//       obj[char] = 1;
//     }
//   }

//   return obj;
// }

// let obj = letterOccurrences("Himanshu Kumar Sinha");

// for (let key in obj) {
//   console.log(`${key} occurs ${obj[key]} times`);
// }

// console.log()
// console.log()

// let value = Object.entries(obj);
// value.forEach((elem) => {
//   console.log(`${elem[0]} occurs ${elem[1]} times`);
// });

// // // Q29 -> Write a javascript program to find the most frequent item of an array.

// let arr = [1, 2, 3, 4, 5, 6, 6, 6, 6, 6, 1, 5, 5, 5, 5, 2, 3, 1, 2, 3];

// function mostFrequent(arr) {
//   let freqObj = {};
//   arr.forEach((elem) => {
//     if (freqObj.hasOwnProperty(elem)) {
//       freqObj[elem] += 1;
//     } else {
//       freqObj[elem] = 1;
//     }
//   });

//   let value = Object.values(freqObj);
//   let maxFreq = Math.max(...value);

//   let entriesObj = Object.entries(freqObj);

//   let mostFrequentItems = entriesObj.filter((elem) => {
//     return elem[1] === maxFreq;
//   });

//   return mostFrequentItems;
// }

// let mostFrequentItems = mostFrequent(arr);
// console.log("Most Frequent Items:");
// mostFrequentItems.forEach((elem) => {
//   console.log(elem);
// });

// // Q30 -> Write a javascript program to suffle an array.

let arr = [1, 2, 3, 4, 5];

for (let key in arr) {
  let randomIndex = Math.floor(Math.random() * arr.length);
  // let temp = arr[key];
  // arr[key] = arr[randomIndex];
  // arr[randomIndex] = temp;

  [arr[key], arr[randomIndex]] = [arr[randomIndex], arr[key]];
}

console.log(arr);

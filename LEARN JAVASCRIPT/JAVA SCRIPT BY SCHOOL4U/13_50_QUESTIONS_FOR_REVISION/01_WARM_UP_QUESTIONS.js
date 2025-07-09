// // Q1 -> Create a function that returns the last element of an array.
// let arr = [1, 2, 3, 4, 5];
// let arr2 = [];

// function lastElement(array) {
//   if (array.length <= 0) {
//     return "an empty array"; // Return 'an empty array' if the array is empty
//   }
//   return array[array.length - 1]; // Return the last element of the array
// }

// let result = lastElement(arr2);
// console.log("The result is : ", result);

// // Q2 -> Find the combination of two arrays.

// let arr1 = [1, 2, 3];
// let arr2 = [4, 5, 6];

// function combineArrays(array1, array2) {
//   // return array1 + "," + array2; // Combine the two arrays into a string with commas

//   return [...array1, ...array2]; // Combine the two arrays into a single array and then join them into a string with commas

//   // return array1.concat(array2); // Combine the two arrays into a single array and then join them into a string with commas
// }

// console.log(combineArrays(arr1, arr2)); // Output: [1, 2, 3, 4, 5, 6]

// // Q3-> Generate a random integer between 0 to 18.

// console.log(Math.floor(Math.random() * 19)); // Output: A random integer between 0 and 18

// // Q4 -> Creates a function that takes an array containing both  numbers and strings and returns an array containing only the string  values.

// let mixedArray = [1, "hello", 2, "world", 3, "JavaScript"];

// function filterStringArray(array) {
//   return array.filter((obj) => typeof obj === "string");
// }
// console.log(filterStringArray(mixedArray)); // Output: ["hello", "world", "JavaScript"]

// // Q5 -> Find the maximum number in an array.

// let numbers = [10, 5, 456, 789, 467, 8, 20, 105];
// function findMaxNumber(array) {
//   if (array.length === 0) {
//     return "Array is empty"; // Return 'Array is empty' if the array is empty
//   }
//   return Math.max(...array); // Use Math.max to find the maximum number in the array
// }

// let maxNumber = findMaxNumber(numbers);
// console.log("The maximum number in the array is:", maxNumber); // Output: 20

// // Q6 -> Write a function that returns the length of given object. (number of keys)

// let obj = {
//   1: "one",
//   2: "two",
//   3: "three",
//   4: "four",
//   5: "five",
//   6: "six",
// };
// function getObjectLength(obj) {
//   if (typeof obj !== "object" || obj === null) {
//     return "Invalid input"; // Return 'Invalid input' if the input is not an object
//   }
//   return Object.keys(obj).length; // Return the number of keys in the object
// }
// let result = getObjectLength(obj);
// console.log("length of the keys of the object is :", result); // Output: 6

// // Q7 -> In an array of objects, filter out those objects which have gender's value male.

// let arr = [
//   { name: "Himanshu", age: 20, gender: "male" },
//   { name: "Anjali", age: 22, gender: "female" },
//   { name: "Rohit", age: 24, gender: "male" },
//   { name: "Priya", age: 30, gender: "female" },
//   { name: "raghav", age: 25, gender: "male" },
// ];

// function filterArrayObject(arr) {
//   return arr.filter((obj) => {
//     if (obj.gender === "male") {
//       return true;
//     }
//   });
// }
// console.log(filterArrayObject(arr)); // Output: [{ name: "Himanshu", age: 20, gender: "male" }, { name: "Rohit", age: 24, gender: "male" }]

// // Q8 -> Given an arra of strings, return a new array where all strings are in uppercase.

// let stringArray = ["hello", "world", "javascript", "is", "fun"];

// function convertToUpperCase(array) {
//   return array.map(str => str.toUpperCase());
// }

// console.log(convertToUpperCase(stringArray)); // Output: ["HELLO", "WORLD", "JAVASCRIPT", "IS", "FUN"]

// // Q9 -> Check if an object is empty (has no keys).

// let obj = { 1: "one", 2: "two", 3: "three", 4: "four", 5: "five" };
// let obj1 = {};

// function isEmptyObject(obj) {
//   return Object.keys(obj).length === 0; // Check if the object has no keys
// }

// let result = isEmptyObject(obj1);
// console.log(result);

// // Q10 -> Create an array of numbers and double each value using .map().

// let numbersArray = [1, 2, 3, 4, 5];
// let doubleArray = numbersArray.map((num) => num * 2);

// console.log(doubleArray); // Output: [2, 4, 6, 8, 10]

// // Q11 -> Convert an array to a comma-separated string.

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let commaSeperate = arr.join(","); // Use the join() method to convert the array to a comma-separated string
// console.log(commaSeperate); // Output: "1,2,3,4,5,6,7,8,9,10"

// // Q12 -> Write a function to flatten a nested array (one level deep). [e.g -> [1,2,3,[1, 2], [3, 4],5,6,7] -> [1, 2, 3, 4]].

// let nestedArray = [1, 2, 3, [1, [1, [5, 6, 7], 2], 2], [3, 4], 5, 6, 7];

// function flattenArray(array) {
//   return array.flat(); // Use the flat() method to flatten the array one level deep
// }

// let flattenedArray = flattenArray(nestedArray);
// console.log(flattenedArray); // Output: [1, 2, 3,

// // Q13 -> Write a function that checks if all elements in an array are numbers.

// let arr = [1, 2, 3, "ram", 4, 5, 6];

// function areAllNumbers(array) {
//   return array.every((element) => {
//     return typeof element === "number"; // Check if each element is a number
//   });
// }

// console.log(areAllNumbers(arr)); // Output: true if all elements are numbers, false otherwise

// //  Q14 -> Build a simple isPrime() function to check if a number is prime.

// let num = 3;

// function isPrime(num) {
//   if (num <= 1) {
//     return false; // Return 'Not a prime number' if num is less than or equal to 1
//   }
//   for (let i = 2; i <= Math.sqrt(num); i++) {
//     if (num % i === 0) {
//       return false; // Return 'Not a prime number' if num is divisible by i
//     }
//   }
//   return true; // Return 'Prime number' if no divisors were found
// }

// let result = isPrime(num);
// console.log(
//   result ? `${num} is a prime number!` : `${num} is not a prime number`
// ); // Output: "Prime number"

// // Q15 -> Create a function that removes duplicate elements from an array.

// let arr = [1, 2, 3, 4, 5, 1, 2, 3, 10, 1, 3, 10, 40, 50];

// function removeDuplicate(array) {
// let set = new Set(array);
// return [...set];

// return [...new Set(array)];
// let uniqueElements = [];
// for (let i = 0; i < array.length; i++) {
//   if (!uniqueElements.includes(array[i])) {
//     uniqueElements.push(array[i]);
//   }
// }
// return uniqueElements;

//   let resultArr =  array.filter((item, index) => array.indexOf(item) === index);
//   return resultArr;
// }

// console.log(removeDuplicate(arr)); // Output: [1, 2, 3, 4, 5, 10, 40, 50]

console.log("*********** ARRAY METHODS ************ ");

// // PUSH, POP,UNSHIFT, SHIFT (change in original array)
// let arr = [1, 2, 3, 4, 5];
// console.log(arr);
// // push
// let a = arr.push(10);
// console.log(arr, a);
// // poop
// let b = arr.pop();
// console.log(arr, b);
// // unshift
// let c = arr.unshift(10);
// console.log(arr, c);
// // shift
// let d = arr.shift();
// console.log(arr, d);

// // SPLICE (change in original array), SLICE (not change in original array)

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(arr);
// // slice
// let newArr = arr.slice(3, 5);
// let newArr1 = arr.slice(-9, -1);
// console.log(newArr);
// console.log(newArr1);

// // splice
// let a = arr.splice(2, 5);
// console.log(arr); // after removed element remain elements array
// console.log(a); // removed elements array
// let b = arr.splice(2, 0, 3, 4, 5, 6, 7);
// console.log(arr);
// console.log(b);

// // CONCAT, JOIN, TOSTRING, INCLUDES, INDEXOF (Not change in original array)

// concat
// let arr = [true, false, null, undefined, NaN];
// let arr1 = [10, 20, 30];
// let arr2 = ["hi", "Hello", "What", "are", "you", "doing?"];
// let arr3 = arr.concat(arr1);
// console.log(arr);
// console.log(arr1);
// console.log(arr3);

// // spread operator(...)
// console.log(arr);
// console.log(arr1);
// console.log(arr2);
// let arr4 = [...arr, ...arr1, ...arr2];
// console.log(arr4);

// // join
// let arr1 = [1, 2, 3, 4];
// let joinArr = arr1.join();
// let joinArr1 = arr1.join("_");
// let joinArr2 = arr1.join("");
// console.log(arr1);
// console.log(joinArr, "      typeof joinArr : ", typeof joinArr);
// console.log(joinArr1, "     typeof joinArr1 : ", typeof joinArr1);
// console.log(joinArr2, "     typeof joinArr2 : ", typeof joinArr2);

// // INCLUDES
// let arr = [1, 2, 3, 4, "lichi"];
// let includesRes = arr.includes("lichi");
// console.log(arr);
// console.log(includesRes);

// // TOSTRING
// let arr = ["ram", "shyam", "mohan"];
// let tostringRes = arr.toString();
// console.log(arr);
// console.log(tostringRes);

// // INDEXOF
// let arr = ["ram", "shyam", "mohan"];
// let indexofRes = arr.indexOf("shyam");
// let indexofRes1 = arr.indexOf("shyama"); // if not present returns -1
// console.log(arr);
// console.log(indexofRes);
// console.log(indexofRes1);

// // REVERSE, SORT (changes original array)
// // REVERSE
// let arr = ["ram", "shyam", "mohan"];
// let reverseRes = arr.reverse();
// console.log(arr);
// console.log(reverseRes);

// // SORT
// let arr1 = [1, 5, 6, 4, 0, 10, 345, 22345];
// let shortRes = arr.sort();
// let shortRes1 = arr1.sort();
// console.log(arr);
// console.log(arr1);
// console.log(shortRes);
// console.log(shortRes1);

// // FIND (no change in original array)
// let arr1 = ["apple", "mango", "guava"];
// let findRes = arr1.find((item) => {
//   return item === "mango";
// });
// let findRes1 = arr1.find((item) => {
//   return item === "lichi";
// });

// console.log(arr1);
// console.log(findRes);
// console.log(findRes1);

// // FLAT (no change in original array)

// let heroes = [
//   "spiderman",
//   "thor",
//   [
//     "howkeye",
//     "captain-america",
//     [
//       "hulk",
//       "black-window",
//       "iron-man",
//       ["loki", "wonda", ["doctor-strange", "thanos"], "groot"],
//       "captain-marvel",
//     ],
//     "black-panther",
//   ],
//   "ant-man",
// ];
// let flatRes = heroes.flat();
// let flatRes1 = heroes.flat(2);
// let flatRes2 = heroes.flat(Infinity);
// console.log(heroes);
// console.log(flatRes);
// console.log(flatRes1);
// console.log(flatRes2);

// // DEEP ANALYSIS OF SORT() METHOD

// let a = [1, 2, 5, 10, 20, 40, 55];
// let b = JSON.parse(JSON.stringify(a)); // deep copy of array a

// console.log("array a : Original array : ", a);
// // console.log("sort method without using compare :", a.sort()); // [1,10,2,20,40, 5,55] -> due to the string convertion

// console.log("*".repeat(50));
// let sortRes = a.sort((a, b) => {
//   console.log(a, b);
//   return a - b;
// });
// console.log("array a : sort method with compare : ", sortRes);

// console.log("*".repeat(50));
// console.log("array b: original array : ", b);
// let sortRes1 = b.sort((a, b) => {
//   console.log(a, b);
//   return b - a;
// });

// console.log("array b: sort method with compare : ", sortRes1);

// ARRAY ITERATION FUNCTION OR FUNCTIONAL ARRAY METHODS (map(return new array), filter(return new array), reduce(returns single value), foreach(returns undefined))

let arr = [1, 2, 3, 4, 5];

// MAP() - element, index, array

// arr.map((element, index, arr) => {
//   console.log(element, index, arr);
// });

// let elemVal = "";
// let mapArray = arr.map((elem) => {
//   elemVal = elemVal + elem + " ";
//   return elem * 2;
// });

// console.log("Original array : ", arr);
// console.log("Before map array element :", elemVal);
// console.log("Mapped Array : ", mapArray);

// // FOREACH() - element, index, array

// let foreachArr = arr.forEach((elem) => {
//   return elem * 2;
// });

// console.log("Original array :", arr);
// console.log("foreach Array : ", foreachArr);

// // FILTER() - element, index, array

// let filterArr = arr.filter((elem) => {
//   return (elem * 1.5) % 2 === 0;
// });

// console.log(arr);
// console.log("filtered array : ", filterArr);

// REDUCE() - prevVal(accumulator) and currVal(current)

let reduceRes = arr.reduce((prevVal, currVal) => {
  return prevVal + currVal;
}, 100);

console.log("Reduce result : ", reduceRes);

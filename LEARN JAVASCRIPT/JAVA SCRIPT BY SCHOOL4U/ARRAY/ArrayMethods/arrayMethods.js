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



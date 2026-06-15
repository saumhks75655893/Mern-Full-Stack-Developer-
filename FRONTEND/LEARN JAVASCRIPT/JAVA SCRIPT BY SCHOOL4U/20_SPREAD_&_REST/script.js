// //// Spread Operator (...) -> spreads the values

// let arr = [1, 2, 3, 4, 5];
// console.log(...arr);

// // Spread array
// let arr1 = [1, 2, 3];
// let arr2 = [...arr1, 4, 5];
// console.log(arr2);

// // Copying array (Shallow Copy)
// let original = [10, 20, 30];
// let copy = [...original];
// console.log(copy);

// // Mergin Arrays
// let boys = ["Himanshu", "Raghav"];
// let girls = ["Meera", "Sita"];
// let students = [...boys, ...girls];
// console.log(students);

// // Spread string
// let str = "Himanshu Kumar";
// let letters = [...str];
// console.log(letters);

// // Spread in function call
// function add(a, b, c) {
//   return a + b + c;
// }
// let num = [5, 6, 1];
// let res = add(...num);
// console.log(res);

// // Spread objects

// let user = {
//   name: "Himanshu Kumar",
//   age: 23,
// };

// let updatedUser = {
//   ...user,
//   location: "Rammando",
//   hobby: "Coding",
// };

// console.log(user);
// console.log(updatedUser);

// // Mergin Objects

// let a = { x1: 1, x2: 2 };
// let b = { y1: 1, y2: 2 };
// let res1 = { ...a, ...b };
// console.log(res1);

/// //// /// REST OPERATOR

// // Rest in function argument

// function add(...arr) {
//   let result = arr.reduce((acc, curr) => {
//     return acc + curr;
//   });
//   return result;
// }

// let result = add(1, 2, 34, 5, 56, 100);
// console.log(result);

// // Destructuring in Rest Operator
// let arr = ["manas", "muskan", "mehek", "harshit", "rishav", "shaurav"];
// let [first, second, third, ...otherStudents] = arr;
// console.log(first);
// console.log(second);
// console.log(third);
// console.log(otherStudents);

// Destructing in Object in rest Operator
let obj = {
  name: "Himanshu",
  age: 21,
  passion: "coding",
  hobby: "Listening Music",
};

let { name, age, ...otherData } = obj;

console.log(name);
console.log(age);
console.log(otherData);

// // Destructuring : -----

// let obj = {
//   name: "Himanshu Kumar",
//   age: 21,
//   address: {
//     vill: "Rammando",
//     pincode: 232103,
//   },
// };

// let {
//   name,
//   age,
//   address: { vill },
//   address: { pincode },
// } = obj;
// console.log(name);
// console.log(age);
// console.log(vill);
// console.log(pincode);

// // // DESTRUCTURING ARRAYS : ------

// // Basic Destructuring

// let numbers = [1, 2, 3, 45];
// let [first, second, third, fourth] = numbers;
// console.log(first);
// console.log(second);
// console.log(third);
// console.log(fourth);

// // Destructuring with Rest Operator
// let numbers = [1, 2, 3, 45];
// let [a, b, ...rest] = numbers;
// console.log(a);
// console.log(b);
// console.log(rest);

// // Default values
// let [a, b, c, d = 0] = [1, 2, 3];
// console.log(a, b, c, d);

// // Skip Array elements
// let [, b, , , e] = [10, 20, 30, 40, 50];
// console.log(b, e);

// // Swap elements values using Destructuring
// let a = 5,
//   b = 6;
// console.log(a, b);
// [b, a] = [a, b];
// console.log(a, b);

// // // DESTRUCTURING OBJECTS

// // Basic Destructuring

// let obj1 = { name: "HK", age: 21 };
// let { name, age } = obj1;
// console.log(name, age);

// // Destructuring with Rest Operator

// let obj = {
//   name: "hk",
//   age: 21,
//   city: "Chandauli",
// };

// let { name, ...rest } = obj;
// console.log(name, rest);

// // Default values in destructuring
// let { name, age = 19 } = {
//   name: "hk",
// };
// console.log(name, age);

// // Renaming in Destructuring

// let { name: fullName } = {
//   name: "Hk",
// };
// console.log(fullName);

// // Nested Destructuring

// let obj = {
//   name: "hk",
//   age: 21,
//   address: {
//     city: "Chandauli",
//     pincode: 232103,
//     arr: [1, 2, 3, 4, 5],
//   },
// };

// let {
//   name: fullName,
//   age,
//   address: {
//     city,
//     pincode: code,
//     arr: [a, b, c],
//   },
// } = obj;

// console.log(fullName, age, city, code, a, b, c);

// Objects in Parameters
function greet({ name, age }) {
  console.log(`Hello ${name}, You are ${age} years old. `);
}

let obj = {
  name: "hk",
  age: 21,
};

greet(obj);

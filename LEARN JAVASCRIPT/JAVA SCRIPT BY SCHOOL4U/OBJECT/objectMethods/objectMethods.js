console.log("******************** OBJECT METHODS ****************** ");

// let obj = {
//   name: "Himanshu Kumar",
//   age: 21,
//   class: "PG",
// };

// looping in object

// console.log(obj);
// for (let key in obj) {
//   console.log(key, obj[key]);
// }

// // Object.keys(obj)

// let key = Object.keys(obj);
// console.log(key);

// // Object.values(obj);
// let value = Object.values(obj);
// console.log(value);

// // Object.entries(obj);

// console.log(Object.entries(obj));

// // Object copying

// let obj2 = {
//   ...obj,
// };

// console.log(obj2);

// // object coping using assign

// let obj2 = {};
// Object.assign(obj2, obj);
// console.log(obj2);

// // FREEZE AND SEAL METHODS

// let obj = {
//   name: "Himanshu Kumar",
//   age: 21,
//   class: "PG",
// };

// // freeze() no change in object further

// Object.freeze(obj);

// obj.name = "hk sinha"; // updation/ modification not allowed
// obj.collage = "BBAU"; // No addition is allowed
// delete obj.age; // No deletion is allowed
// console.log(obj);

// // seal() no addition and deletion allowed but updation is allowed
// Object.seal(obj);
// console.log(obj);
// obj.collage = "BBAU"; // addition not allowed
// delete obj.age; // deletion not allowed
// obj.name = "hk sinha"; // updation is allowed
// console.log(obj);

// // hasOwnProperty() - to check the key is present or not

// console.log(obj.hasOwnProperty("name")); // if find true
// console.log(obj.hasOwnProperty("age"));
// console.log(obj.hasOwnProperty("qualification")); // otherwise false

// DESTRUCTURING

let obj = {
  name: "himanshu",
  className: "PG",
};

console.log(obj);

// let name = obj.name;
// let className = obj.className;
// console.log(name, className);

// destructuring
let { name, className } = obj;
console.log(name, className);

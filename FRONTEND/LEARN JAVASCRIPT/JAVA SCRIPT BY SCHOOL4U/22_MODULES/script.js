// // // // COMMON JS IMPORTS :=============

// let nm = require("./math.js");
// console.log(nm);

// const obj = require("./math.js");
// let { name1, age } = obj;

// const { name1, age } = require("./math.js");
// console.log(name1, age);

// // // Importing function

// let { sum, sub } = require("./math");
// let res1 = sum(1, 5);
// console.log(res1);

// let res2 = sub(5, 10);
// console.log(res2);

// // // // // ES6 OR MODERN JS MODULE IMPORTS :=============
// // default import
// import cal from "./math.js";
// let { sum, sub } = cal;
// let res = sum(10, 5);
// console.log(res);
// let res1 = sub(10, 5);
// console.log(res1);

// Named import

import addString, { sum as sumFunc, sub, mul, devide, modulo } from "./math.js";

let res1 = sumFunc(5, 34);
console.log(res1);

let res2 = sub(5, 34);
console.log(res2);

let res3 = mul(5, 4);
console.log(res3);

let res4 = devide(5, 2);
console.log(res4);

let res5 = modulo(5, 2);
console.log(res5);

let addStr = addString("Himanshu", "Kumar");
console.log(addStr);

// // // // COMMON JS EXPORTS : ==========

// // EXPORTING VARIABLES

// let name1 = "Himanshu Kumar";
// let age = 21;
// console.log(name);
// module.exports = name1
// module.exports = {
//   name1,
//   age,
// };

// // EXPORTING FUNCTION
// function sum(a, b) {
//   return a + b;
// }

// function sub(a, b) {
//   return a - b;
// }

// module.exports = {
//   sum,
//   sub,
// };

// // // // ES6 OR MODERN JS MODULE EXPORTS :========

function sum(a, b) {
  return a + b;
}
function sub(a, b) {
  return a - b;
}
function mul(a, b) {
  return a * b;
}
function devide(a, b) {
  return a / b;
}
// another way to export function in named export
export function modulo(a, b) {
  return a % b;
}

// // default export
// // export default sum;
// export default {
//   sum,
//   sub
// }

// // Named Export

// export { sum };
// export { sub, mul };
// export { devide };

// Named and Default export

export default function conCatinate(s1, s2) {
  return (s1.slice(0, 1) + s1.slice(1)).toLowerCase().concat(s2) + "@" + "1234";
  return (s1.slice(0, 1) + s1.slice(1)).toLowerCase().concat(s2) + "@" + "1234";
}

export { sum };
export { sub, mul };
export { devide };

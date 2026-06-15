// Operators
// Operators are symbols operates on operands

// 1-  arithmetic Operators

let a = 20;
let b = 7;

console.log("a + b = " + (a + b));
console.log("a - b = " + (a - b));
console.log("a * b = " + a * b);
console.log("a / b = " + a / b);
console.log("a % b = " + (a % b));
console.log("a ** b = " + a ** b);

// CHALLENGE 1

let priceItem = 150;
let totalItem = 3;
let totalPrice = priceItem * totalItem;
let discount = (totalPrice * 10) / 100;
let discountPrice = totalPrice - discount;

console.log("Price per item = ", priceItem);
console.log("Number of items = ", totalItem);
console.log("Total Price = ", totalPrice);
console.log("Discount = ", discount);
console.log("Discounted Price = ", discountPrice);

// 2- ASSIGNMENT Operators

let a4 = 5;
console.log("a4 = ", a4);
console.log("a4 += 5 = ", (a4 += 5));
console.log("a4 -= 5 = ", (a4 -= 5));
console.log("a4 *= 5 = ", (a4 *= 5));
console.log("a4 /= 5 = ", (a4 /= 5));
console.log("a4 %= 5 = ", (a4 %= 5));
console.log("a4 **= 5 = ", (a4 **= 5));

// 3- COMPARISON OPERATORS

let a3 = 10;
let b3 = "10";

console.log("a3 == b3  ", a3 == b3);
console.log("a3 === b3  ", a3 === b3);
console.log("a3 != b3  ", a3 != b3);
console.log("a3 !== b3  ", a3 !== b3);
console.log("a3 > b3  ", a3 > b3);
console.log("a3 < b3  ", a3 < b3);
console.log("a3 >= b3  ", a3 >= b3);
console.log("a3 <= b3  ", a3 <= b3);

// 4- LOGICAL OPERATORS

console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);

console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(false || false);

console.log(!true);
console.log(!false);

// 5- INCREMENT AND DECREMENT OPERATORS

let a2 = 5;

console.log("a2 =", a2);
console.log("a2++ =", a2++);
console.log("a2 =", a2);
console.log("--a2 =", --a2);
console.log("a2-- =", a2--);
console.log("a2 =", a2);

let b2 = 5;
console.log(b2++ + ++b2 - 10);

// 6- TERNARY OPERATORS

// CHALLENGE 2 AND EXAMPLE
let age = 20;
console.log(age >= 18 ? "Eligible for booking" : "Not eligible for booking");

// CHALLENGE 3
let username = "username";
let password = "password";

const result10 =
  username && password ? "Login successful" : "username & password required";

console.log(result10);

// CHALLENGE 4
// find largest Number
let a1 = 5,
  b1 = 130,
  c1 = 20;

const result7 = a1 > b1 ? (a1 > c1 ? a1 : c1) : b1 > c1 ? b1 : c1;
console.log("result 7 : ", result7);

// 7- BITWISE OPERATORS

// bitwise and
console.log(5 & 3);
console.log(4 & 7);

// bitwise or
console.log(8 | 11);
console.log(26 | 15);

// bitwise not
console.log("~3 :", ~3);
console.log("~-6 :", ~-6);

// TRUTHY AND FALSY VALUES

const result5 = undefined && "ram" ? "True" : "False";
console.log(result5);

// SHORT - CIRCUITING;

// -> ( || )
console.log("LOGICAL OR");
let result6 = "" || null || "Ram" || undefined;
console.log(result6);

let result0 = "" || undefined || NaN || null;
console.log(result0);

// -> ( && )
console.log("LOGICAL AND");
let result1 = "Ram" && true && undefined && 55;
console.log(result1);

let result2 = "Ram" && true && 53;
console.log(result2);

// -> ( ?? )
console.log("NULLISH COALESCING");
let result3 = undefined ?? "Ram";
console.log(result3);

let result4 = null ?? true;
console.log(result4);

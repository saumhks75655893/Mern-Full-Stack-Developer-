// Operators
// Operators are symbols operates on operands

// 1-  arithmetic Operators

// let a = 20;
// let b = 7;

// console.log("a + b = " + (a + b));
// console.log("a - b = " + (a - b));
// console.log("a * b = " + a * b);
// console.log("a / b = " + a / b);
// console.log("a % b = " + (a % b));
// console.log("a ** b = " + a ** b);

// CHALLENGE 1

// let priceItem = 150;
// let totalItem = 3;
// let totalPrice = priceItem * totalItem;
// let discount = (totalPrice * 10) / 100;
// let discountPrice = totalPrice - discount;

// console.log("Price per item = ", priceItem);
// console.log("Number of items = ", totalItem);
// console.log("Total Price = ", totalPrice);
// console.log("Discount = ", discount);
// console.log("Discounted Price = ", discountPrice);

// 2- ASSIGNMENT Operators

// let a = 5;
// console.log("a = ", a);
// console.log("a += 5 = ", (a += 5));
// console.log("a -= 5 = ", (a -= 5));
// console.log("a *= 5 = ", (a *= 5));
// console.log("a /= 5 = ", (a /= 5));
// console.log("a %= 5 = ", (a %= 5));
// console.log("a **= 5 = ", (a **= 5));

// 3- COMPARISON OPERATORS

// let a = 10;
// let b = 6;

// console.log("a == b  ", a == b);
// console.log("a === b  ", a === b);
// console.log("a != b  ", a != b);
// console.log("a !== b  ", a !== b);
// console.log("a > b  ", a > b);
// console.log("a < b  ", a < b);
// console.log("a >= b  ", a >= b);
// console.log("a <= b  ", a <= b);

// 4- LOGICAL OPERATORS

// console.log(true && true);
// console.log(true && false);
// console.log(false && true);
// console.log(false && false);

// console.log(true || true);
// console.log(true || false);
// console.log(false || true);
// console.log(false || false);

// console.log(!true);
// console.log(!false);

// 5- INCREMENT AND DECREMENT OPERATORS

// let a = 5;

// console.log("a =", a);
// console.log("a++ =", a++);
// console.log("a =", a);
// console.log("--a =", --a);
// console.log("a-- =", a--);
// console.log("a =", a);

// let b = 5;
// console.log(b++ + ++b - 10);

// 6- TERNARY OPERATORS

// CHALLENGE 2 AND EXAMPLE
// let age = 20;
// console.log(age >= 18 ? "Eligible for booking" : "Not eligible for booking");

// CHALLENGE 3
// let username = "username";
// let password = "password";

// const result =
//   username && password ? "Login successful" : "username & password required";

// console.log(result);

// CHALLENGE 4
// find largest Number
// let a = 5,
//   b = 130,
//   c = 20;

// const result = a > b ? (a > c ? a : c) : b > c ? b : c;
// console.log(result);

// 7- BITWISE OPERATORS

// // bitwise and
// console.log(5 & 3);
// console.log(4 & 7);

// // bitwise or
// console.log(8 | 11);
// console.log(26 | 15);

// // bitwise not
// console.log(~3);
// console.log(~(-6))

// TRUTHY AND FALSY VALUES

// const result = undefined && "ram" ? "True" : "False";
// console.log(result);

// SHORT - CIRCUITING

// // -> ( || )
// console.log("LOGICAL OR");
// let result = "" || null || "Ram" || undefined;
// console.log(result);

// let result0 = "" || undefined || NaN || null;
// console.log(result0);

// // -> ( && )
// console.log("LOGICAL AND");
// let result1 = "Ram" && true && undefined && 55;
// console.log(result1);

// let result2 = "Ram" && true && 53;
// console.log(result2);

// // -> ( ?? )
// console.log("NULLISH COALESCING");
// let result3 = undefined ?? "Ram";
// console.log(result3);

// let result4 = null ?? true;
// console.log(result4);

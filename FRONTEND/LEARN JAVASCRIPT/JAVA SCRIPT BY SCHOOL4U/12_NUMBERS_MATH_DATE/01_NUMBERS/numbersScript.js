console.log("************** Numbers *********************");

// let a = 10;
// let b = 20;
// console.log(typeof a, a);
// console.log(typeof b, b);
// let c = 10.5;
// console.log(typeof c, c);
// let d = 452345n;
// console.log(typeof d, d);

// // NUMBERS CREATION USING LITERAL METHOD AND CONSTRUCTOR METHOD

// // LITERAL METHOD

// let a = 10;
// let b = Number(10.2);
// console.log(typeof a, a);
// console.log(typeof b, b);

// // CONSTRUCTOR METHOD

// let c = new Number(20);
// console.log(typeof c, c);

// // // NUMBERS PROPERTIES AND METHODS

// // PROPERTIES
// console.log(Number.MAX_VALUE);
// console.log(Number.MIN_VALUE);
// console.log(Number.POSITIVE_INFINITY);
// console.log(Number.NEGATIVE_INFINITY);
// console.log(Number.NaN);

// let a = 1 / 0;
// console.log("Check Not a number : ", isNaN(a));
// console.log("Check Not a number : ", Number.isNaN());

// console.log(Number.EPSILON);

// // METHODS

// let a = 10.34534;
// console.log(Number.isInteger(a));
// console.log(Number.parseInt(a));
// console.log(Number.parseFloat(a));
// console.log(parseInt(a));
// console.log(parseFloat(a));

// let b = 1 / 0;
// console.log(Number.isFinite(b));
// console.log(isFinite(b));

// // NUMBER INSTANCE METHODS (USED ON NUMBER PRIMTIVES)

// let num = 7565893.345345;

// // // toFixed method
// console.log(num.toFixed()); // output before decimal point
// console.log(num.toFixed(2)); // output after decimal 2 places
// console.log(typeof num.toFixed());

// // // toExponential method
// console.log(num.toExponential()); // output the number into exponential form
// console.log(num.toExponential(2)); // output the number into exponential form at 2 places after decimal point
// console.log(typeof num.toExponential()); // output the type of the number into exponential form

// // // toPrecision method
// console.log(num.toPrecision()); // output the number into precision form
// console.log(num.toPrecision(7)); // output same as before decimal point number
// console.log(num.toPrecision(3)); // output will be in the form of exponential notation
// console.log(typeof num.toPrecision());

// // // toString method

// console.log(num.toString());
// console.log(typeof num.toString());

// // // valueOf method (return premitive value)

// let num = new String("3452345");
// console.log(num);
// console.log(num.valueOf());
// console.log(typeof num);

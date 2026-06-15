console.log("******************** MATH METHODS *********************");

let num = 34.6345243;
console.log("Round :", Math.round(num));
console.log("Floor :", Math.floor(num));
console.log("Ceil :", Math.ceil(num));

let num1 = 234;
let num2 = -345;
let num3 = 0;
let num4 = -0;

console.log("Abs :", Math.abs(num1));
console.log("Abs :", Math.abs(num2));
console.log("Abs :", Math.abs(num3));
console.log("Abs :", Math.abs(num4));

console.log("Sqrt : ", Math.sqrt(256));
console.log("Sqrt : ", Math.sqrt(4));
console.log("Sqrt : ", Math.sqrt(9));

console.log("Pow : ", Math.pow(2, 3));
console.log("Pow : ", Math.pow(3, 2));
console.log("2**3 : ", 2 ** 3);
console.log("3**2 : ", 3 ** 2);

console.log("Min : ", Math.min(1, 2, 3, 45, 0, 10));
console.log("Min : ", Math.max(345, 345, 4353, 3, 242, 5, 2356, 1));

console.log("Random : ", Math.random());
console.log("Random : ", Math.random() + 1);
console.log("Random : ", Math.random() * 10 + 1);

let minValue = 5;
let maxValue = 25;
let diff = maxValue - minValue;
console.log(
  "Random (Min to Max range) : ",
  Math.floor(Math.random() * (diff + 1) + minValue)
);

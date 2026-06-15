// // CHALLENGE-1: Print all even numbers from 0 to 100

// console.log("Even Numbers : ");
// for (let i = 0; i <= 100; i++) {
//   if (i % 2 == 0) {
//     console.log(i);
//   }
// }

// CHALLENGE -2: Calculate how many vowels and consonents are in a given string using for of loop

let str = "Himanshu UUU kumar";
let vowel = 0;
let consonent = 0;
for (let value of str) {
  if (value === " ") {
    continue;
  } else if (
    value === "a" ||
    value === "e" ||
    value === "i" ||
    value === "o" ||
    value === "u" ||
    value === "A" ||
    value === "E" ||
    value === "I" ||
    value === "O" ||
    value === "U"
  ) {
    vowel++;
  } else {
    consonent++;
  }
}

console.log(`Number of vowels in ${str} is : ${vowel}`);
console.log(`Number of consonents in ${str} is : ${consonent}`);

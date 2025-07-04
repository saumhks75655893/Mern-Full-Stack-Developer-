// // LOOPs - this is a way to repeat a block of code multiple times

// // 1. FOR LOOP
// let i;
// for (i = 1; i <= 5; i++) {
//   console.log(i);
// }
// let j;
// for (j = 1; j <= 50; j++) {
//   console.log(j);
// }

// // 2. WHILE LOOP

// let i = 1;
// while (i <= 5) {
//   console.log(i);
//   i++;
// }

// // 3. DO WHILE LOOP

// do {
//   console.log("Hello World..!");
// } while (false);

// 4. FOR-OF LOOP

let str = "Himanshu Kumar";
for (let val of str) {
  console.log(val);
}

let arr = [1, 2, 3, 4, 5];
for (let val of arr) {
  console.log(val);
}

// 5. FOR-IN LOOP

let obj = {
  name: "Himanshu",
  age: "21",
  isStudent: true,
};

for (let key in obj) {
  console.log(key);
}

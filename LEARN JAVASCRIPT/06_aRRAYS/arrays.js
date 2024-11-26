// // Arrays in html

// const words = ["hello", "world", "welcome"];
// console.log(words);
// console.log(words[0]);
// console.log(words[1]);
// console.log(words[2]);

// for (let i = 0; i < words.length; i++) {
//   console.log(words[i]);
// }

// // mixed data type array
// const mixed = [
//   "hello",
//   10,
//   true,
//   345.2,
//   { 1: "himanshu", 2: "sundaram", 3: "Pritesh" },
//   function hello() {
//     console.log("Hello world");
//   },
// ];
// console.log(mixed);

// for (let i = 0; i < mixed.length; i++) {
//   console.log(mixed[i]);
// }
// console.log(mixed[4][2]);


// Common Array Methods 

const methArray = [1,2,"Hi","Hello"]; 
// 1. indexOf()
console.log("Index of 2 is ",methArray.indexOf(2));

// 2. includes()
console.log("Includes 5 : ",methArray.includes(5));

// 3. push() 
methArray.push(10); 
console.log(methArray);

//4. unshift()
methArray.unshift(50);
console.log(methArray);

// 4. pop()
console.log(methArray.pop());
console.log(methArray);


const newArr = []; 
console.log(newArr)
console.log(newArr.pop())  
console.log(newArr)

// 5. shift()
methArray.shift(); 
console.log(methArray);

// 6. sort()
methArray.push(30)
console.log(methArray);
methArray.sort()
console.log(methArray);

// 7. slice()
const sliceArray = methArray.slice(1,4); 
console.log(sliceArray);




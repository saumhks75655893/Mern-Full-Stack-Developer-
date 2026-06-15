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

// const methArray = [1,2,"Hi","Hello"];
// // 1. indexOf()
// console.log("Index of 2 is ",methArray.indexOf(2));

// // 2. includes()
// console.log("Includes 5 : ",methArray.includes(5));

// // 3. push()
// methArray.push(10);
// console.log(methArray);

// //4. unshift()
// methArray.unshift(50);
// console.log(methArray);

// // 4. pop()
// console.log(methArray.pop());
// console.log(methArray);

// const newArr = [];
// console.log(newArr)
// console.log(newArr.pop())
// console.log(newArr)

// // 5. shift()
// methArray.shift();
// console.log(methArray);

// // 6. sort()
// methArray.push(30)
// console.log(methArray);
// methArray.sort()
// console.log(methArray);

// // 7. slice()
// const sliceArray = methArray.slice(1,4);
// console.log(sliceArray);


// ---------------------------------------------------------------------------------------------------------
// ARRAY INFORMATION BY PRASHANT

// let numbers = [1,2,3,4,65,4,3,
//   10,
//   12,
//   1435,
//   2345
// ];
// console.log(numbers);
// console.log(numbers[0]);
// console.log(numbers[1]);

// let mixedValue = [1,2,3,'hello',null, {name:'himanshu'}, ['hi',
//   'hello']
// ]
// console.log(mixedValue);

// // typeof the array
// console.log(typeof mixedValue);

// ARRAY PROPERTIES AND METHODS : ----------

// to find that the given variable is an array or not
// console.log(Array.isArray(mixedValue));

// // length
// console.log(mixedValue.length);

// Methods

// let arr = [1,2,3]; 

// 1. push/pop 

// console.log(arr);
// console.log(arr.length);
// arr.push(6); 
// console.log(arr);
// console.log(arr.length);
// console.log('Popped element ',arr.pop()); 
// console.log(arr);
// console.log(arr.length);

// 2. shift/unshift

// console.log(arr);
// console.log(arr.length);
// arr.unshift(6)
// console.log(arr);
// console.log(arr.length);
// arr.shift(); 
// console.log(arr);
// console.log(arr.length);

// 3. Splice

// let arr1 = [1,2,3,4,5]; 
// console.log(arr1); 
// arr1.splice(1,2); 
// console.log(arr1); 

// 4. toString

// let arr2 = [3,4,5,6]; 
// console.log(arr2)
// let arr3 = arr2.toString(); 
// console.log(arr3)
// console.log(typeof arr3);

// 5. sort

// let arr3 = [4,7,1, 10,3453,56,2,5,7,12435,2451,24526,2,,23452,6,2345, null]; 
// let arr3 = [9,6,0,1,3,2,9]; 
// console.log(arr3)
// arr3.sort(); 
// console.log(arr3.sort())

// 6. valueOf

// let arr4 = [1,2,3,4,5]; 
// console.log(arr4);
// console.log(arr4.valueOf());

// 7. array are referenced type

// let arr4 = [1,2,3,4,5]; 
// let arr5 = arr4; 
// console.log(arr4)
// console.log(arr5)

// arr5[0] = 100; 
// console.log(arr4)

// 8. de-structuring

let a = [1,2,3,4]; 

let [i,j,k,l] = a; 

console.log(i + ' ' +  j +  ' ' +  k + ' ' + l);

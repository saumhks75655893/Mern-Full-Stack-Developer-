// // Q1 -> What is pure function, and why it is useful in UI rendering?
// *******************************************************************************************
/*
pure function : -----------------------
 1. Given the same input, always returns the same output
The function's result depends only on its input arguments.

2. No side effects
The function does not modify anything outside itself.
No reading or writing to:
global variables
files
DOM
databases
etc.


🍳why it is useful in UI rendering? : ----------------

Pure functions are very useful in UI rendering—especially in frameworks like React—because they make rendering predictable, efficient, and bug-free. Here's why:

✅1. Predictable Output = Reliable UI :-----------------
A pure rendering function (like a React component) will always produce the same UI for the same input (props/state).

This ensures the UI doesn't break unexpectedly.


✅2. No Side Effects = No Hidden Bugs:-----------------
UI components shouldn't change data, modify DOM directly, or trigger alerts.

Pure functions avoid this, so UI updates are controlled and safe.


✅3. Easier to Test:------------------
Pure functions don’t rely on the environment.

You can write simple unit tests:

expect(Greeting({ name: "Himanshu" }).props.children).toEqual(["Hello, ", "Himanshu"]);


✅4. Better Performance with Re-Renders:-----------------
React and similar libraries can optimize rendering when they know components are pure.

For example:

Memoization (e.g., React.memo) works best with pure components.

They re-render only when input changes, improving performance.

✅5. Debugging Becomes Easier:---------------
If something goes wrong, you just check:

What were the inputs (props/state)?

Was the function pure?

No need to dig into complex state changes or global effects.


=======> IN SHORT 

✅ Predictable	: Same input → Same output
✅ Side-effect-free : 	No unexpected behavior
✅ Testable	:  Easy to write unit tests
✅ Performant : 	Helps with memoization and re-rendering
✅ Debuggable :  Simpler to trace problems

*/

// // // ======> Q2 -> How would you use .map() to tranform a list of products into a list of HTML elements.
// ******************************************************************************************

// let valueArr = [
//   { name: "Himanshu Kumar", age: 23, phone: 7991861858 },
//   {
//     name: "Radha ",
//     age: 22,
//     phone: 5463453453,
//   },
//   {
//     name: "Meera",
//     age: 21,
//     phone: 9589489494,
//   },
//   { name: "Maya", age: 25, phone: 999345345345 },
//   {
//     name: "Sundaram",
//     age: 23,
//     phone: 9106537863,
//   },
// ];

// let container = document.querySelector(".container");

// valueArr.map((elem) => {
//   let div = document.createElement("div");
//   div.className = "valueContainer";
//   div.innerHTML = `
//       <p class="name">${elem.name}</p>
//       <p class="email">${elem.age}</p>
//       <p class="phone">${elem.phone}</p>
//   `;

//   container.append(div);
// });

// // // // ========> Q3 -> How do you use .reduce() to calculate the total price in a shopping cart?
// ******************************************************************************************

// let priceCart = [1, 1, 1, 1];

// let price = priceCart.reduce((prev, next) => {
//   console.log(prev);
//   return prev + next;
// }, 0);

// console.log();
// console.log(price);

// // // // =======> Q4 ->  Explain immutability and how you update an object in a array without mutating the original.
// ***************************************************************************************

// let obj = {
//   name: "himanshu",
//   age: 23,
//   interest: "research",
// };

// let newObj = { ...obj };
// newObj.hobby = "coding";
// console.log(obj);
// console.log(newObj);

// let user = {
//   name: "Meera",
//   age: 21,
// };

// function UpdateUser(users, name) {
//   let newUsers = { ...users, name };
//   return newUsers;
// }

// console.log(user);
// let updatedUser = UpdateUser(user, "Maya");
// console.log(user);
// console.log(updatedUser);

// ****************************************************************************************
// // // // =======> Q5 -> How would you compose multiple functions to transfrom date step-by-step (e.g. sanitize -> trim -> capitalize)? Scenario : You're preparing user input before storing it. (Expected knowledge: Function composition, chaining, pipe or compose logic.)
// *****************************************************************************************

// compose - right to left
// pipe - left to right

// // //=======> A Example

// let add2 = (num) => num + 2;
// let multiply5 = (num) => num * 5;
// let substract6 = (num) => num - 10;

// // first way to compose
// let result = substract6(multiply5(add2(6)));
// console.log("substract6(multiple5(add2))) result : ", result);
// console.log();

// // now create a compose utility function
// function compose(...func) {
//   return function getValue(value) {
//     return func.reduceRight((acc, currFun) => {
//       return currFun(acc);
//     }, value);
//   };
// }

// // now create a pipe utility function
// function pipe(...func) {
//   return function getValue(value) {
//     return func.reduce((acc, currFun) => {
//       return currFun(acc);
//     }, value);
//   };
// }

// let result1 = compose(substract6, multiply5, add2)(6);
// console.log();
// let result2 = pipe(add2, multiply5, substract6)(6);
// console.log();
// console.log("Compose result : ", result1);
// console.log();
// console.log("Pipe result :", result2);
// console.log();

// // // ====> QUESTION'S ANSWER

// let senitizeStr = (str) => str.replaceAll(" ", "");
// let trimStr = (str) => str.trim();
// let caplitalizeStr = (str) => str.toUpperCase();

// console.log(
//   caplitalizeStr(
//     trimStr(senitizeStr("        himanshu kumar sinha              "))
//   )
// );
// // utility compose function

// function compose(...fns) {
//   return function getValue(str) {
//     return fns.reduceRight((acc, currStrFns) => {
//       return currStrFns(acc);
//     }, str);
//   };
// }

// let result = compose(
//   caplitalizeStr,
//   trimStr,
//   senitizeStr
// )("             himanshu kumar sinha                 ");

// // utility pipe function

// function pipe(...fns) {
//   return function getValue(str) {
//     return fns.reduce((acc, currStrFns) => {
//       return currStrFns(acc);
//     }, str);
//   };
// }

// let result1 = pipe(
//   caplitalizeStr,
//   trimStr,
//   senitizeStr
// )("             himanshu kumar sinha                 ");
// console.log(result);
// console.log(result1);

//******************************************************************************************
// // // // =========> Q6 -> What is the difference between forEach and map, and when is it wrong to use map?
//******************************************************************************************

// ========> forEach vs map — The Key Differences
// ========> Feature	forEach

// ✅ Purpose	Executes a function for each item
// ✅ Return value	undefined
// ✅ Mutability	Doesn't return a new array
// ✅ Usable in chain	Not usually (returns undefined)
// ✅ Side effects	Common (e.g., logging, updates)

// ========>  Feature map
// ✅ Creates a new array by transforming items
// ✅ Returns the new transformed array
// ✅ Returns a new array (original remains same)
// ✅ Can be chained with .filter(), .reduce()
// ✅ Not intended for side effects

// ========>  ✅ When to Use Each One

// 🔸 Use forEach:
// When you just want to do something for each element (e.g., logging, updating UI, pushing to another array).
// You don’t need a returned array.

// 🔸 Use map:
// When you want to transform each item and get a new array as a result.

//*********************************************************************************************
// // // // // Q7 -> How do you implement your own version of .map() function on array?
// ********************************************************************************************

// let arr = [1, 2, 3, 4, 5];

// // // square
// // function square(arr) {
// //   let squareArr = [];
// //   for (let i = 0; i < arr.length; i++) {
// //     squareArr.push(arr[i] * arr[i]);
// //   }
// //   return squareArr;
// // }

// // // cube
// // function cube(arr) {
// //   let squareArr = [];
// //   for (let i = 0; i < arr.length; i++) {
// //     squareArr.push(arr[i] * arr[i] * arr[i]);
// //   }
// //   return squareArr;
// // }

// // //diameter
// // function diameter(arr) {
// //   let squareArr = [];
// //   for (let i = 0; i < arr.length; i++) {
// //     squareArr.push(2 * arr[i]);
// //   }
// //   return squareArr;
// // }

// // console.log("Original array  :", arr);
// // console.log("Using square large function :", square(arr));
// // console.log("Using cube large function :", cube(arr));
// // console.log("Using diameter large function :", diameter(arr));

// // // now differenciate the logic and working

// // let squareLogic = (r) => r * r;
// // let cubeLogic = (r) => r * r * r;
// // let diameterLogic = (r) => 2 * r;

// // function square(arr) {
// //   let squareArr = [];
// //   for (let i = 0; i < arr.length; i++) {
// //     squareArr.push(squareLogic(arr[i]));
// //   }
// //   return squareArr;
// // }

// // // cube
// // function cube(arr) {
// //   let squareArr = [];
// //   for (let i = 0; i < arr.length; i++) {
// //     squareArr.push(cubeLogic(arr[i]));
// //   }
// //   return squareArr;
// // }

// // //diameter
// // function diameter(arr) {
// //   let squareArr = [];
// //   for (let i = 0; i < arr.length; i++) {
// //     squareArr.push(diameterLogic(arr[i]));
// //   }
// //   return squareArr;
// // }

// // console.log("Original array  :", arr);
// // console.log("Using square logic function :", square(arr));
// // console.log("Using cube logic function :", cube(arr));
// // console.log("Using diameter logic function :", diameter(arr));

// // // // Now make a single function and pass the logics

// // let squareLogic = (r) => r * r;
// // let cubeLogic = (r) => r * r * r;
// // let diameterLogic = (r) => 2 * r;

// // function Calculate(arr, logic) {
// //   let squareArr = [];
// //   for (let i = 0; i < arr.length; i++) {
// //     squareArr.push(logic(arr[i]));
// //   }
// //   return squareArr;
// // }

// // console.log("Original array  :", arr);
// // console.log(
// //   "Using squarelogic with single  function :",
// //   Calculate(arr, squareLogic)
// // );
// // console.log(
// //   "Using cubelogic with single function :",
// //   Calculate(arr, cubeLogic)
// // );
// // console.log(
// //   "Using diameterlogic with single function :",
// //   Calculate(arr, diameterLogic)
// // );

// // // Now creating our own map function

// let squareLogic = (r) => r * r;
// let cubeLogic = (r) => r * r * r;
// let diameterLogic = (r) => 2 * r;

// // original map function working

// let result = arr.map((elem) => squareLogic(elem));
// console.log(result);

// // Now our ownMap function
// function Calculate(logic) {
//   let squareArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     squareArr.push(logic(arr[i]));
//   }
//   return squareArr;
// }

// Array.prototype.ownMap = Calculate;

// let result2 = arr.ownMap(squareLogic);
// console.log(result2);

// ***************************************************************************************************
// ***************************************************************************************************
// ***************************************************************************************************

/*
Imperative foreach v/s Declarative foreach
Imperative map v/s Declarative map
Imperative fitler v/s Declarative fitler
Imperative reduce v/s Declarative reduce
Imperative every v/s Declarative every
Imperative find v/s Declarative find
*/

// // /// ============================================>  Imperative forEach V/S Declarative forEach

// let arr = [1, 2, 3, 4, 5, 6];
// // // Declarative foreach
// // let newArr = [];
// // arr.forEach((elem) => console.log(elem * 2));

// // console.log(arr);
// // console.log(newArr);

// // Imperative foreach

// let newArr1 = [];

// let logic = (elem) => {
//   console.log(elem * 2 + 4);
// };

// function ownForEach(logic) {
//   for (let i = 0; i < arr.length; i++) {
//     logic(arr[i]);
//   }
// }

// Array.prototype.OwnforEach = ownForEach;
// let result = arr.OwnforEach(logic);
// console.log(result);

// // /// ==================================================> Imperative map v/s Declarative map
// // ===> Declarative map

// let arr = [1, 2, 3, 4, 5];
// let result = arr.map((elem) => elem % 2);
// console.log(result);

// // Imperative map
// let logic = (elem) => {
//   return elem % 2;
// };

// function ownMap(logic) {
//   let mapArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     mapArr.push(logic(arr[i]));
//   }

//   return mapArr;
// }

// Array.prototype.ownMapFun = ownMap;

// let result1 = arr.ownMapFun(logic);
// console.log(result1);

// // /// ===============================================> Imperative fitler v/s Declarative fitler

// // ====> Declarative filter

// // let arr = [1, 2, 3, 4, "hello", "hi"];
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

// let result = arr.filter((elem) => typeof elem === "NaN");
// console.log(result);

// // ======> Imperative filter

// // function logic(elem) {
// //   if (typeof elem === "string") {
// //     return elem;
// //   }
// //   return;
// // }
// function logic1(elem) {
//   if (elem % 2 !== 0) {
//     return elem;
//   }
//   return;
// }

// function ownFilterFunction(logic) {
//   let filterArr = [];

//   for (let i = 0; i < arr.length; i++) {
//     if (logic(arr[i])) {
//       filterArr.push(arr[i]);
//     }
//   }

//   return filterArr;
// }

// Array.prototype.ownFilter = ownFilterFunction;

// let result1 = arr.ownFilter(logic1);
// console.log(result1);

// // // /// ===============================================> Imperative  reduce v/s Declarative reduce
// // ===> Declarative reduce

// let arr = [1, 2, 3, 4, 5];

// let result = arr.reduce((acc, curr) => {
//   return acc * curr;
// }, 40);

// console.log(result);

// // ====> Imperative reduce

// let logic = (elem, startPoint) => {
//   return startPoint * elem;
// };
// function ownReduceFunction(logic, startPoint) {
//   let result = startPoint;

//   for (let i = 0; i < arr.length; i++) {
//     result = logic(arr[i], result);
//   }

//   return result;
// }

// Array.prototype.ownReduce = ownReduceFunction;
// let result1 = arr.ownReduce(logic, 40);
// console.log(result1);

// // // /// ===============================================> Imperative  every v/s Declarative every

// // // =====> Declarative every

// const numbers = [12, 14, 18, 22];

// const allAbove10 = numbers.every((num) => num > 10);
// console.log(allAbove10);

// // // =====> Imperative every

// let logic = (elem) => {
//   if (elem > 10) {
//     return true;
//   }
//   return false;
// };
// function ownEveryFunction(logic) {
//   let flag = true;
//   for (let i = 0; i < numbers.length; i++) {
//     flag = logic(numbers[i]);
//     if (flag === false) {
//       break;
//     }
//   }
//   return flag;
// }

// Array.prototype.ownEvery = ownEveryFunction;
// let result1 = numbers.ownEvery(logic);
// console.log(result1);

// // /// ===============================================> Imperative  find v/s Declarative find

// // =====> Declarative find
const users = [
  { id: 101, name: "Alice" },
  { id: 102, name: "Bob" },
  { id: 103, name: "Charlie" },
];

const targetId = 102;

const user = users.find((u) => u.id === targetId);

console.log(user); // { id: 102, name: "Bob" }

// // ======> Imperative find

function ownFindFunction(users) {
  let res = {};
  for (let i = 0; i < users.length; i++) {
    if (users[i].id === targetId) {
      console.log(users[i]);
    }
    break;
  }
}

console.log(ownFindFunction(users));

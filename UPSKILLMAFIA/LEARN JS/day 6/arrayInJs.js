console.log("Array IN Java Script");
// array creation 

const emptyArray = []; 
const nums = [1,2,3,4,5]; 
console.log(nums); 

// data accessing
console.log(nums[2]); 

for(let num of nums){
    console.log(num); 
}


// Adding and Removing

// ADDING: --

nums.push(10); // at the end 
console.log(nums); 
nums.unshift(20); // at the beginning
console.log(nums); 


// Removing
nums.pop();//from the end 
console.log(nums); 
nums.shift();//from the beginning
console.log(nums); 


// looping through Arrays 

for(let i=0; i<nums.length; i++)
{
    console.log(nums[i]); 
}

// Basic array methods 
const color = ['white', 'red', 'green','black']; 
// 1. indexof()
let a = color.indexOf('blue'); 
console.log("Index of blue : ",a); 

// 2. slice

const sliceColors = color.slice(1,2); 
console.log(sliceColors); 
console.log(color.slice(1,color.length)); 

// 3. splice

const spliceColors = color.splice(1,2); 
console.log(spliceColors); 
console.log(color.splice(0,color.length)); 

// 4. Array transformation with .map() and .filter()

const numbers = [1,2,3]; 
const doubled = numbers.map(num => num*2); 
console.log(doubled); 
console.log(numbers); 

const even = numbers.filter(num => num%2===0); 
console.log(even); 

// 5. checking for elements with .includes()

const fruits = ['apple','guava']; 
console.log(fruits.includes('guava')); 

// 6. Concatinating array : ------

const arr1 = [1,2]; 
const arr2 = [3,4]; 

const arr3 = arr1.concat(arr2); 
console.log(arr3); 

// 7. Spread Operator 

const numbers1 = [1,2,3]; 
const copynumbers1 = [...numbers1]; 
console.log(copynumbers1);// copied array 
console.log(numbers); // main array
copynumbers1.push(10); //value insert in copynumbers1
console.log(copynumbers1); //change made
console.log(numbers); // main array


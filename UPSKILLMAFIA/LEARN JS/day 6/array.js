const arr = []; 
const number = [1,2,3,4]; 

console.log(number[0]);   

// using loop 
for(let a=0; a<number.length; a++)
{
    console.log(number[a]); 
}

// some method

// 1. Adding and removing elements 
// add
arr.push('hi'); 
arr.push('hello'); // at the end
arr.unshift('what'); 
arr.unshift('You'); //at the beginning of the array

console.log(arr); 

// delete
arr.pop(); // from the end 
arr.shift(); //from the beginning 

console.log(arr); 

// spreading in arrays(...)
const numbers = [1,2,3]; 
const copynumbers = [...numbers];
console.log(copynumbers); 

//  array merging 
const a = [1,2,3]; 
const b = [4,5,6]; 
const combined = [...a, ...b]; 
console.log(combined);
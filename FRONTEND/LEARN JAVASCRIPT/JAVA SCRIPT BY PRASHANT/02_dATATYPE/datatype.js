// Primitive data type (nn bb ss u)
/* 
n - number 
n - null
b - boolean
b - BigInt
s - String 
s - Symbol
u - undefined 

*/
let f = Symbol("I am a nice symbol.")
console.log(f);

let B = BigInt("565") + BigInt("5");
console.log(B);

// number data type
let a = 23; 

// string data type
a = 'Hello';

// boolean data type
a = true;

console.log("The value of a is : ",a);
console.log("The type of a is : ",typeof(a));

// Type conversion 

let b = 20; 

b = String(b); 
b = Number(b);
b = Boolean(b);
b = Number(b);  // out 1 

console.log("The value of b is : ",b);
console.log("The type of b is : ",typeof(b));

// Some NaN(Not a number) output
let c = "ten"; 

c = Number(c);  // NaN
c = Boolean(c);

c = undefined; 
c = String(c);  // undefined
c = Number(c);  // NaN
c = Boolean(c); // False

console.log("The value of c is : ",c); // NaN result
console.log("The type of c is : ",typeof(c));

let d; 
// d = Boolean(d); //false
d = Number(d); // NaN
console.log("Value of d : ", d);

let e = null; 
// e = Boolean(null); //false
e = Number(e);
console.log("Value of e : ", e);

// Non-Primitive data type - Object 

const student = {
    "name" : "Himanshu kumar",
    "roll" : 150,
    "Dept" : "Computer Science"
}

console.log(student);
console.log(student['name'])
console.log(student['roll'])
console.log(student['Dept'])

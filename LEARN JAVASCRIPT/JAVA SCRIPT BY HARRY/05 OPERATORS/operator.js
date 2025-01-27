// Operators 

// 1. ARITHMETIC OPERATOR

let a = 10;
let b = 4;

console.log("a + b = ", a+b); 
console.log("a - b = ", a-b); 
console.log("a * b = ", a*b); 
console.log("a / b = ", a/b); 
console.log("a % b = ", a%b); 
console.log("a ** b = ", a**b); 
console.log("a++ = ", a++); 
console.log("++a = ", ++a); 
console.log("a-- = ", a--); 
console.log("--a = ", --a); 

// 2. ASSIGNMENT OPERATOR 

let assignment = 9; 
console.log(assignment);

assignment += 2; 
console.log(assignment);

assignment -= 2; 
console.log(assignment);

assignment *= 2; 
console.log(assignment);

assignment /= 2; 
console.log(assignment);

assignment %= 2; 
console.log(assignment);

assignment **= 2; 
console.log(assignment);


// LOGICAL OPERATORS (RELATIONAL OPERATORS)

let log1 = true; 
let log2 = false; 

// and
console.log("log1 && long2 " , log1 && log2);
console.log("log1 && long1 ", log1 && log1);
console.log("log2 && long2 ", log2 && log2);

// or
console.log("log1 || long2 ", log1 || log2);
console.log("log1 || long1 ",log1 || log1);
console.log("log2 || long2 ", log2 || log2);

// not
console.log('not log2 : ', !log2);

// COMPARISON OPERATOR 

let comp1 = 10; 
let comp2 = 20; 

console.log('comp1 == comp2 ', comp1 == comp2)
console.log('comp1 != comp2 ', comp1 != comp2)
console.log('comp1 === comp2 ', comp1 === comp2)
console.log('comp1 !== comp2 ', comp1 !== comp2)
console.log('comp1 > comp2 ', comp1 > comp2)
console.log('comp1 < comp2 ', comp1 < comp2)
console.log('comp1 <= comp2 ', comp1 <= comp2)
console.log('comp1 >= comp2 ', comp1 >= comp2)

// turnery operator 
comp1 > comp2 ? console.log(comp1) : console.log(comp2);


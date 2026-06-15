// The formula for Compound Interest (A = P(1 + (r/n))^nt)

/*
A = amount 
P = Principal 
r = rate of interest 
n = number of times interest is compounded per year
t = time (in years)

*/

// You invest $1000 for 10 years at 9% interest compounded yearly. How much will you have at the end of the three years?

let A = 50000;
const r = 5 / 100; // 5% interest rate
const t = 3; // 3 years
const n = 1;
let P;

let D = (1 + r/n) ** (n * t); 
P = A/D;

console.log("For the Total amount ",A," the Principal amount is : ",P.toFixed(3)); 



// Arrow function 

//regular function 
function greet() {
    console.log("Hello world"); 
}
greet()

// Arrow function without parameter
const greet1 =  () => {
    console.log("Hello world");
    
}

greet1(); 

// Arrow function with parameter
const greet2 =  (count) => {
    for(let i=1; i<=count; i++) console.log("Hello world",i);
    
}

greet2(5); 

// Through Expression Arrow function 

const square = (num) => num * num; 
let n = 4; 
console.log("Square of ",n," is :",square(n));

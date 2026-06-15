// Q1 
// let a = prompt("Enter your number : "); 
let a = 10; 

function oddEven(a){
  if(a%2 == 0){
    return "EvenNumber"; 
  }else{
    return "OddNumber";  
  }
}

console.log(oddEven(a)); 


// Q2 

let b=19, c=12; 

function largerOfTwoNumbers(x,y){
  if(x > y){
    return x; 
  }else{
    return y; 
  }
}


console.log("Larger number is : ",largerOfTwoNumbers(b,c));

// Q3

function celsiusToFohrenheit(C){
    let F = (9/5) * C + 32; 
    return F; 
}

let C = 36.11111; 

console.log("The fahrenheit is :",Math.ceil(celsiusToFohrenheit(C))); 
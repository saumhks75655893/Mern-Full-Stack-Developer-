// anonymous functions means there will be no name of the function; 

let sum = function(a, b){
  return a+b; 
}

console.log("sum  =  "+sum(10,20));

// here sum is the reference of the anonymous function 

let mySum = sum; 
console.log("sum = " + mySum(40,50)); 

// function can also pass as the argument to other functions, anything

let sumThreeNumbers = function(a,b,c, sumOfTwoNumbers){
  let sum1 = sumOfTwoNumbers(a,b); 
  return sumOfTwoNumbers(sum1, c); 
}


console.log('a + b + c : '+sumThreeNumbers(10,5,5,sum));


console.log(sumThreeNumbers);
console.log(typeof sumThreeNumbers);



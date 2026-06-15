// Q1
let multiply = (num1, num2) => num1 * num2;
console.log('Multiply = '+ multiply(2,3)); 


// Q2

let twice = (num1,num2) => num1 * num2; 
let runTwice = (num1,twice) => {
  let resNum = twice(num1,num1); 
  return resNum * num1; 
};  

console.log('Answer is : ' + runTwice(10, twice)); 

// Q3

// let mybuttonValue = document.querySelector('#my-button'); 
// let iniValue = 1; 
// mybuttonValue.innerText = iniValue; 
// let intervalId = setInterval(()=> {mybuttonValue.innerText *= 2},2000);
// let growDouble = setTimeout(()=>clearInterval(intervalId),10000);
// mybuttonValue.addEventListener('click',growDouble)

function doubleSize(){
  let doubleSize = document.querySelector('#my-button'); 
  setTimeout(()=>doubleSize.classList.add('js-doubleSize'),2000);
}

// Q4
let doubleSize1 = document.querySelector('#my-button');
doubleSize1.addEventListener('click',doubleSize);
// Q5
let arr = [1,2,3,4,5]; 
let sumOfElement=0; 
arr.forEach(num=> sumOfElement+=num);
console.log(sumOfElement);

// Q6
let square = arr.map((num) => num * num); 
console.log(square);

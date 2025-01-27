// Q1
let arr = [5,6];
console.log(arr);

arr.unshift(4);
console.log(arr);

arr.push(7);
console.log(arr);

// Q2

let arr1 = [1,2,3,4,6,'hello','hi',7.7,0.9];
function returnPosition(element, arr){
  for(let i=0; i<arr.length; i++){
    if(arr[i] == element){
      return i;
      break;
    }
  }
  return false;
}

// let element = prompt('Enter the Element to the In the array : ');
let element = 4;
let pos = returnPosition(element,arr1);

if(pos != false){
  console.log(`Position of ${element} is ${pos}`);
}else{
  console.log(`${element} not found in the array.`);

}

function elementAtPosition(arr, pos){
  return ar[pos-1]; 
}

let ar = [11,92,38,43,5,16,70,8]; 
let po = 1; 
console.log(`Element at position ${po} is ${elementAtPosition(ar,po)}`);


// Q3

let arr2 = [1,2,3];
let arr3 = arr2.slice(0,arr2.length);

console.log(arr2);
console.log(arr3);

// Q4 &  Q5

function isPrime(num) {
  if (num <= 1) {
    return false;
  }

  for (let i = 2; i <= num / 2; i++) {
    if (num % i == 0) {
      return false;
    }
  }

  return true;
}
let i = 1;
let j = 1;
let arr5 = [];
while (true) {
  if (isPrime(i)) {
    arr5.push(i);
    if (j == 5) {
      console.log("Completed !!");
      break;
    }
    j++;
  }
  i++;
}

console.log(arr5);



// Q6
for(let i=10; i>=1; i--){
  console.log(i);
}

// Q7
let arr6 = [1,-6,5,7,-98]; 
let arr7 = [];
for(let i=0; i<arr6.length; i++){
  if(arr6[i] < 0){
      continue;
  }
  arr7.push(arr6[i]); 
}

console.log(arr7);

// Q8

let arr8 = ['KG','Coding','Javascript','Course','is','Best']; 

let str = ''; 

for(let i=0; i<arr8.length; i++){
  str += arr8[i] + ' '; 
}

// same as upper code this will work
console.log(str);
console.log(arr8.join(" ")); 


// Find the sum of first n numbers where n is a variable.

let n = 153;
let sum = 0;
for (i = 0; i <= n; i++) {
  sum += i;
}
console.log("Sum of first ", n, " numbers is : ", sum);

// Print table of n where n is a variable.

n = 153;
let j = 1;
while (j <= 10) {
  console.log(n, " x ", j, " = ", n * j);
  j++;
}

//  Check if it is a prime number.
n = 153;
let flag = false;
for (m = 2; m <= n / 2; m++) {
  if (n % m == 0) {
    flag = true;
  }
}
if (flag == true) {
  console.log(n, " is not a prime number.");
} else {
  console.log(n, " is a prime number.");
}

//  Print all its factors.

n = 153;
let result = "";
for (m = 1; m <= n; m++) {
  if (n % m == 0) {
    result += m + " ";
  }
}
console.log("The factors of ", n, " is : ", result.trim());

// Find sum of all digits of a number.
n = 153;
temp = n;
digSum = 0;
while (temp > 0) {
  let last = temp % 10;
  digSum = digSum + last;
  temp = Math.floor(temp / 10);
}
console.log("Sum of the digits of the ", n, " is : ", digSum);

// Check if it is an Armstrong number.
// An Armstrong number is one whose sum of digits raised to the power three
// equals the number (ex 153 => 1^3 + 5^3 + 3^3 = 153)

n = 153;
temp = n;
temp1 = n; 
numDig = 0; 
digSum = 0;
// find the number of digit
while (temp > 0) {
    let last = temp % 10;
    numDig ++;
    temp = Math.floor(temp / 10);
  }
//   checking the number is armstrong or not.
while (temp1 > 0) {
  let last = temp1 % 10;
  digSum = digSum + Math.pow(last,numDig);
  temp1 = Math.floor(temp1 / 10);
}
if(n == digSum){
    console.log(n," is a armstrong number.");
}else{
    console.log(n," is not a armstrong number.");
}
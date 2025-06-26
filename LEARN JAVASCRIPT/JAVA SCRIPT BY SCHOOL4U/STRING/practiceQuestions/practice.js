// // Q1 -> Create a program to take fullname from user and generate an username start with @, followed by thier full name and ends with underscore followed by the lenght of the name.

// let fullname = prompt("Enter your full name : ");
// let username =
//   "@" +
//   fullname.toLowerCase().trim().replaceAll(" ", "") +
//   "_" +
//   fullname.length;
// console.log(fullname);
// console.log(username);

// Q2 -> Take a string and a character from the user:
/*
  a) count how many times that character appear in the string
  b) Case-insensitive version
  c) Find all occurenance position
*/

let noOfOccurences = 0;
let occurenancePositions = "";

function CharacterCountInString(str, ch) {
  for (let index in str) {
    if (str[index].toLowerCase() === ch.toLowerCase()) {
      noOfOccurences++;
      occurenancePositions = occurenancePositions + index + "  ";
    }
  }
  return;
}

let userStr = prompt("Enter the String : ");
let userChar = prompt("Enter the character : ");
CharacterCountInString(userStr, userChar);
console.log(
  `Number of occurenance of '${userChar}' in '${userStr}' is : ${noOfOccurences}`
);
console.log(`Positions of occurenance is : ${occurenancePositions}`);

// // 3. Count words present in the given string

// let userString = prompt("Enter the string :");
// userString1 = userString.split(" ");
// console.log(`Number of world in '${userString}' is : ${userString1.length}`);

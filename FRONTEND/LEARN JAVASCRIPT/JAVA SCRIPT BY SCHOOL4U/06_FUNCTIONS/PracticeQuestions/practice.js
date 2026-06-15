// // Q1 -> Write a regular function that takes a string and return it with the first letter capitalized.

// function capitalFirstLetter(str) {
//   console.log(str[0].toUpperCase() + str.slice(1));
// }

// capitalFirstLetter("raghu");

// // Q2 -> Show an alert message that says "Please login" after 5 seconds on your website

// setTimeout(() => {
//   alert("Please Login...");
// }, 5000);

// // Q3 -> Make an arrow function that takes a price  and a discount, and return the price after discount.

// let discountedPrice = (price, discount) => {
//   return price - price * (discount / 100);
// };

// console.log(discountedPrice(200, 5));
// console.log(discountedPrice(5760, 20));

// // Q4 -> Create a function that builds a username from a fullname

// let userName = (fullname) => {
//   console.log(
//     "@" +
//       fullname.toLowerCase().trim().replaceAll(" ", "") +
//       fullname.length * 75
//   );
// };

// userName("Himanshu Kumar Sinha");

// // Q5 -> Write a function that takes a traffic light color and gives the correct instruction (e.g "go" for green, "stop" for red, "caution" for yellow, and "invalid color" for anything else)

// let trafficInstructionBasedOnColor = (color) => {
//   if (color === "green") {
//     alert("Go");
//   } else if (color === "red") {
//     alert("Stop");
//   } else if (color === "yellow") {
//     alert("Caution");
//   } else {
//     alert("Invalid Color");
//   }
// };

// trafficInstructionBasedOnColor("green");
// trafficInstructionBasedOnColor("red");
// trafficInstructionBasedOnColor("yellow");
// trafficInstructionBasedOnColor("indigo");

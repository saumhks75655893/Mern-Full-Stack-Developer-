// object

let car = {
  make: "Toyota",
  model: "Camary",
  year: 2020,
};

// dot notation
console.log(car.make);
console.log(car.model);
car.make = "Rolls Royce";
console.log(car.make);

// Bracket notation
console.log(car["make"]);

// iterating through objects // for in loop

for (let key in car) {
  console.log(key, ":", car[key]);
}

console.log("model " in car);
console.log(car.hasOwnProperty("year"));

// Arrays

const fruits = ["apple", "kiwi", "papaya", "orange"];
console.log(fruits);

for (let i = 0; i < fruits.length; i++) {
  console.log(i, " => ", fruits[i]);
}

// for of loop
for (let fruit of fruits) {
  console.log("MyFruit : ", fruit);
}

// associative array
let arr = { apple: 10, grapes: 20 };
arr["guava"] = 30;
arr["banana"] = 40;

// Printing the array
// returned by keys() method
console.log("Associative array"); 
console.log(Object.keys(arr));

// printing the size
console.log("Size = " + Object.keys(arr).length);

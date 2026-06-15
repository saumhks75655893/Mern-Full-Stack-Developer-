console.log("***************** OBJECT ***************");

// // object creation ( Literal method )

// let obj = {
//   name: "HKS",
//   age: 21,
//   class: "PG",
//   hobby: ["playing games", "listening music", "programming"],
// };

// console.log(obj);

// let car = {
//   brand: "Toyota", // properties
//   color: "red", // properties
//   speed: "130", // properties
//   drive: function () {
//     console.log("The car is driving."); // methods/ behaviour
//   },
//   start: () => {
//     console.log("Starting the car..."); // methods / behaviour
//   },
//   stop: () => {
//     console.log("Stoping the car..."); // methods / behaviour
//   },
// };

// console.log(car);
// car.drive();
// console.log(car["speed"]);
// car.start();
// car["stop"]();

// // object creation ( constructor method )

// let car = new Object({
//   brand: "lamborgini",
// });

// car.price = "1.2 CR";
// car.modal = " LBRGN75";

// let car2 = {
//   brand: "Rolls Royce",
//   price: "4 CR",
// };
// car2.modal = "RR7575";
// car2.status = "running";
// console.log(car);
// console.log(car2);

// // special characters
// let obj = {
//   "*": "Himanshu",
// };

// console.log(obj["*"]);

// UPDATING OR ADDING NEW PROPERTIES

let obj = {
  name: "Himanshu Kumar Sinha",
  age: 21,
  greet: function () {
    console.log("Good Morning! Mr. " + this.name); // this keyword
  },
};

console.log(obj);
obj.name = "Himanshu Kumar"; /// updating
obj.hobby = "Reading"; /// adding
obj.greet(); // this keyword calling

console.log(obj);

delete obj.age; // delete
console.log(obj);

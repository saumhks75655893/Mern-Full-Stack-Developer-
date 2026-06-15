// // OOPS
// // *********************************************************************************************
// // problem - for multiple student there will be need to create multiple object so there is introduced object.

// // ========================> OBJECT LITERAL

// const Student = {
//   name: "Hks",
//   age: 21,
//   loc: "Rammando",
//   introduce: function () {
//     // console.log(this);
//     console.log(
//       `My name is ${this.name}, my age is ${this.age} and I am from ${this.loc}`
//     );
//   },
// };
// const Student1 = {
//   name: "Meera",
//   age: 20,
//   loc: "Varanasi",
//   introduce: function () {
//     // console.log(this);
//     console.log(
//       `My name is ${this.name}, my age is ${this.age} and I am from ${this.loc}`
//     );
//   },
// };
// const Student2 = {
//   name: "Shaumya",
//   age: 21,
//   loc: "MP",
//   introduce: function () {
//     // console.log(this);
//     console.log(
//       `My name is ${this.name}, my age is ${this.age} and I am from ${this.loc}`
//     );
//   },
// };

// console.log(typeof Student);
// Student.introduce();
// Student1.introduce();
// Student2.introduce();

// // // ====================> FACTORY FUNCTION : doesn't involve prototype by default.
//
// function createStudent(name, age, passion) {
//   return {
//     name,
//     age,
//     passion,
//     introduce: function () {
//       // console.log(this);
//       console.log(
//         `My name is ${this.name}, my age is ${this.age} and I am from ${this.loc}`
//       );
//     },
//   };
// }

// let s1 = createStudent("himanshu", 21, "Reading");
// let s2 = createStudent("Meera", 19, "Studying");
// let s3 = createStudent("Ninja", 20, "Cooking");
// console.log();
// s1.introduce();
// s2.introduce();
// s3.introduce();

// // // // ====================> CONSTRUCTOR METHOD

// function createStudent(name, age) {
//   this.name = name;
//   this.age = age;
//   return this;
// }

// let res = new createStudent("ram", 21);
// let res1 = new createStudent("sita", 19);
// console.log(res);
// console.log(res1);

// // // =====================> CLASS SYNTAX (ES6) : --------------

class createStudent {
  constructor(name = "Sanjay Singhaniya", age = 21, passion = "Coding") {
    this.name = name;
    this.age = age;
    this.passion = passion;
  }

  intro() {
    console.log(`${this.name}, ${this.age} and ${this.passion}`);
  }
}

let res = new createStudent("Himanshu Kumar", 26, "reading");
let res1 = new createStudent();

console.log(res);
console.log(res1);
res.intro();
res1.intro();

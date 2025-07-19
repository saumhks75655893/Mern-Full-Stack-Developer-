// // // ==========> CLASS AND OBJECT
// class Car {
//   constructor(name, color, mileage) {
//     this.name = name;
//     this.color = color;
//     this.mileage = mileage;
//   }

//   start() {
//     console.log(`${this.name} is starting...`);
//   }

//   stop() {
//     console.log(`${this.name} is stopping...`);
//   }
// }

// let buggati = new Car("buggati", "brown", 5);
// console.log(buggati);
// let toyota = new Car("toyota", "silver", 28);
// console.log(toyota);
// let bmw = new Car("bmw", "black", 38);
// console.log(bmw);

// // // ====================> ABSTRACTION AND ENCAPSULATION

// =======> 1st example
// class Car {
//   #fuel = 100; // noone can use fuel property outside of the class : encapsulation : security provided

//   constructor(name, color) {
//     this.name = name;
//     this.color = color;
//   }

//   #burnFuel() {
//     // encapsulation: noone can use burnFuel function outside the class
//     this.#fuel -= 1;
//   }
//   start() {
//     // abstraction - hiding the complexity and giving a single method named start.
//     this.#burnFuel();
//     console.log(
//       `${this.name} started... and remaining fuel is : ${this.#fuel} .`
//     );
//   }
// }

// let bmw = new Car("bmw", "white");
// console.log(bmw);
// bmw.start();

// // =======> 2nd example

// class BankAccount {
//   #balance = 500; // encapsulation
//   constructor(holderName, balance = 100) {
//     this.holderName = holderName;
//     this.#balance = balance;
//   }

//   deposit(balance) {
//     // abstraction
//     if (typeof balance !== "number") {
//       console.error("Invalid balance type...");
//       return;
//     }
//     this.#balance += balance;
//     console.log(`updated balance : ${this.#balance}`);
//   }

//   set setter(balance) {
//     // set method to set value of #balance
//     if (typeof balance !== "number") {
//       console.error("Invalid input... ");
//       return;
//     }
//     console.log("Balance set succefully");
//     this.#balance = balance;
//   }

//   get getter() {
//     // get method to get value of #balance
//     return this.#balance;
//   }
// }

// let amanAcc = new BankAccount("Aman");
// console.log(amanAcc);
// amanAcc.setter = 5000;
// amanAcc.deposit(56466);

// // // // ==========================> INHERITANCE

// class Car {
//   constructor(brand, color) {
//     this.brand = brand;
//     this.color = color;
//   }

//   start() {
//     console.log(`${this.brand} is starting...`);
//   }
//   stop() {
//     console.log(`${this.brand} is stopping...`);
//   }
// }

// class ElectricCar extends Car {
//   constructor(brand, color, battery) {
//     super(brand, color);
//     this.battery = battery;
//   }
//   charging() {
//     console.log(`${this.brand} is charging...`);
//   }
// }

// let tesla = new ElectricCar("tesla", "black", 220);
// console.log(tesla);
// tesla.start();
// tesla.stop();
// tesla.charging();

// let car = new Car("Toyota", "Silver");
// console.log(car);

// // // ======================> POLYMORPHISM

class MediaPlayer {
  play() {
    console.log("Play Media");
  }
}

class MusicPlayer extends MediaPlayer {
  play() {
    console.log("Play Music");
  }
}

class VideoPlayer extends MediaPlayer {
  play() {
    console.log("Play Video");
  }
}

let ob1 = new MusicPlayer();
ob1.play();
let ob2 = new VideoPlayer();
ob2.play();
let ob3 = new MediaPlayer();
ob3.play();

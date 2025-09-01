// // =====> PROTOTYPE

// normal use of the prototype
function BankAccount(holdername, balance = 0) {
  this.holdername = holdername;
  this.balance = balance;
}

BankAccount.prototype.checkBalance = function () {
  console.log(`Accont balance is : ${this.balance}`);
};

BankAccount.prototype.withdraw = function (withdrawAmt) {
  this.balance -= withdrawAmt;
  console.log(`After withdraw the balance is : ${this.balance}`);
};

BankAccount.prototype.deposit = function (depoAmt) {
  this.balance += depoAmt;
  console.log(`Updated balane is : ${this.balance}`);
};

let rohanAccount = new BankAccount("Rohan", 1000);
console.log(rohanAccount);
rohanAccount.withdraw(500);
rohanAccount.checkBalance();
rohanAccount.deposit(1500);

let reshamaAccount = new BankAccount("Reshama", 7000);
console.log(reshamaAccount);
reshamaAccount.withdraw(500);
reshamaAccount.checkBalance();
reshamaAccount.deposit(1500);

let rajatAccount = new BankAccount("Rajat", 5000);
console.log(rajatAccount);
rajatAccount.withdraw(500);
rajatAccount.checkBalance();
rajatAccount.deposit(1500);

// // // ================> FOR CLASS

class Student {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  introduceMyself() {
    console.log(`My name is ${this.name} and my age is ${this.age}`);
  }
}

let s1 = new Student("Raghav", 456);
console.log(s1);

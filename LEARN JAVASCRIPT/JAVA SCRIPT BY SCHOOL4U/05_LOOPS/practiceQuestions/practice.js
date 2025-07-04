// // Q1 -> Calculate sum of first n numbers

// let n = 100;
// let sum = 0;
// for (let i = 1; i <= n; i++) {
//   sum += i;
// }

// console.log("sum = ", sum);

// // Q2 -> Calculate the sum of numbers from m to n;
// let m = 10;
// let n = 15;
// let sum = 0;
// while (m <= n) {
//   sum += m;
//   m++;
// }

// console.log("sum =", sum);

// // Q3 -> Print all odd numbers from 0 to n;

// let n = 50;
// for (let i = 0; i <= n; i++) {
//   if (i % 2 !== 0) {
//     console.log(i);
//   }
// }

// // Q4 -> Create a number knock game. (Ask the user to keep guesing the number until the user enter correct guess);

// let number = 15;
// let count = 0;
// while (true) {
//   let guessNumber = Number(prompt("Guess the number : "));
//   if (isNaN(guessNumber)) {
//     alert("Enter valid number...!");
//   } else if (guessNumber < number) {
//     alert("Your guessed number is lesser...!");
//     count++;
//   } else if (guessNumber > number) {
//     alert("Your guessed number is greater...!");
//     count++;
//   } else if (guessNumber == number) {
//     count++;
//     alert(`Congratulations !.. You winnnnn ... !!!`);
//     alert(`You have taken ${count} round to guess the number...!!!`);
//     alert(`${guessNumber} is right guess...`);
//     break;
//   }
// }

// // Q5 -> Simple password checker. (fixed attempts)

// let password = "75655";
// let noOfAttempts = 0;
// let userPassword = null;

// while (password !== userPassword && noOfAttempts < 3) {
//   userPassword = prompt("Enter password :");
//   noOfAttempts++;

//   if (userPassword === password) {
//     alert("Congrates !! Your password matched ...!!!");
//   } else if (noOfAttempts >= 3) {
//     alert("Your attempts is over, Sorry!!");
//   } else {
//     alert("Your password is incorrect, Please try again...!");
//   }
// }

// // Q6 -> Create a program to find the factorial of n

// let n = 7;
// let temp = n;
// let fact = 1;
// while (temp >= 1) {
//   fact *= temp;
//   temp--;
// }

// console.log(`Factorial of ${n} is : ${fact}`);

// // Q7 -> Print the pattern

// for (let i = 1; i <= 5; i++) {
//   let str = "";
//   for (let j = 1; j <= i; j++) {
//     str = str + i + " ";
//   }
//   console.log(str);
// }

// Q7 -> Build a simple text based adventure game

while (true) {
  alert("You wake in the dark forest");
  let choice = prompt("Do you go 'left' or 'right' ? ");

  if (choice === "left") {
    alert("You walk into a swamp...");
    alert("You see something shinny in the mud.");
    let choice = prompt("Do you want to pick it up ? (yes / no) : ");
    if (choice === "yes") {
      alert("It's a magic stone! You are teleported to satety");
      alert("You win!");
    } else if (choice === "no") {
      alert("You sink slowly into the mud.");
      alert("Game Over !!!");
    } else {
      alert("Invalid choice");
    }
  } else if (choice === "right") {
    alert("You find a cave!!");
    let choice = prompt("Do You enter the cave ? (yes / no) :");
    if (choice === "yes") {
      alert("A dragon wakes up and chases you. You barely escape!");
    } else if (choice == "no") {
      alert(
        "You set up camp outside the cave. A peaceful night under the stars."
      );
      alert("You win !!!");
    } else {
      alert("Invalid choice !!!!");
    }
  } else {
    alert("Invalid Choice !.. Please try again..");
  }

  let playChoice = prompt("Do You want to play again? (yes / no) ");

  if (playChoice == "no") break;
  else;
}

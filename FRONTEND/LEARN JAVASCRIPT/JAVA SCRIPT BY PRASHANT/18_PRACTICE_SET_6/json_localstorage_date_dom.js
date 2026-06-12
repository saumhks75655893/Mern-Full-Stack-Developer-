// Q1 &&
function greetingOnTime(time) {
  if (time > 0 && time <= 12) {
    // alert(`Good morning! Mr. ${name}`);
    console.log(`Good Morning!!`);
    document.querySelector(".greetings").innerText = `Good Morning`;
  } else if (time > 12 && time <= 18) {
    // alert(`Good After noon! Mr. ${name}`);
    console.log(`Good After Noon!!`);
    document.querySelector(".greetings").innerText = `Good After Noon`;
  } else {
    // alert(`Good night! Mr. ${name}`);
    console.log(`Good Night!!`);
    document.querySelector(".greetings").innerText = `Good Night`;
  }
}

let theTime = new Date();
let currentTime = theTime.getHours();
// currentTime = 21;
greetingOnTime(currentTime);

// Q2
function greetingOnTimeWithName(time, name) {
  if (time > 0 && time < 12) {
    // alert(`Good morning! Mr. ${name}`);
    console.log(`Good Morning!! Mr. `, name);
    document.querySelector(
      ".greetingsWithName"
    ).innerText = `Good Morning Mr. ${name}`;
  } else if (time > 12 && time < 18) {
    // alert(`Good After noon! Mr. ${name}`);
    console.log(`Good After Noon!! Mr. `, name);
    document.querySelector(
      ".greetingsWithName"
    ).innerText = `Good After Noon Mr. ${name}`;
  } else {
    // alert(`Good night! Mr. ${name}`);
    console.log(`Good Night!! Mr. `, name);
    document.querySelector(
      ".greetingsWithName"
    ).innerText = `Good Night Mr. ${name}`;
  }
}

greetingOnTimeWithName(currentTime, `Himanshu Kumar`);

// Q3

// document.querySelector(".pressButtonCount").innerText = localStorage.getItem('pressCount');
// function pressButtonCount() {
//   // document.querySelector(".pressButtonCount").innerText = 1;
//   if(document.querySelector(".pressButtonCount").innerHTML % 2 == 0){
//     document.querySelector(".pressButtonCount").style.background = 'Yellow';
//   }else{
//     document.querySelector(".pressButtonCount").style.background = 'Red';
//   }
//   localStorage.setItem('pressCount',document.querySelector(".pressButtonCount").innerText++);
// }

function clearCount() {
  localStorage.setItem('noOfTimesClicked',0);
  document.querySelector(".pressButtonCount").innerText = localStorage.getItem('noOfTimesClicked');
}


let noOfTimesClicked = localStorage.getItem('noOfTimesClicked') || 0;

function pressButtonCount() {
  noOfTimesClicked++; 
  localStorage.setItem('noOfTimesClicked',noOfTimesClicked);
  updateButton();
}

function updateButton(){
  let buttonClicked = document.querySelector('.pressButtonCount');
  if(noOfTimesClicked % 2 === 0){
    buttonClicked.classList.remove('js-odd');
    buttonClicked.classList.add('js-even');
  }else{
    buttonClicked.classList.remove('js-even');
    buttonClicked.classList.add('js-odd');
  }

  buttonClicked.innerText = noOfTimesClicked;
}

updateButton();

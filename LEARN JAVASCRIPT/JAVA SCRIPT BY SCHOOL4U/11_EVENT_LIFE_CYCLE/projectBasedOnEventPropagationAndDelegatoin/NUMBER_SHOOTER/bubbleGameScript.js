let numberContainer = document.querySelector(".numberContainer");
let timerValue = document.querySelector(".timerValue");
let targetValue = document.querySelector(".targetValue");
let scoreValue = document.querySelector(".scoreValue");

let numberOfCircles = 60;
let timer = 5;
let finalScore = 0;

restartGame();
startTimer();
//  function for restart the game
function restartGame() {
  ResetTime();
  targetGeneration();
  generateCircles();
  scoreValue.innerText = Number("0");
}

// start timer
function startTimer() {
  setInterval(() => {
    if (timer <= 0) {
      numberContainer.className = "finalResult";
      numberContainer.innerHTML = `
    <div class='gameOver'> Game Over </div>
    <div>Final Score : <span class='result'>${finalScore}</span> </div>
    <button class='restartGame' onClick=restartGame()>Restart Game </button>
    `;
      return;
    }
    timer--;
    timerValue.innerText = timer;
  }, 1000);
}
// function for reset time when restart game
function ResetTime() {
  timer = 5;
  timerValue.innerText = timer;
}

// target generation function
function targetGeneration() {
  target = Math.ceil(Math.random() * 10);
  targetValue.innerText = target.toString();
}

// function for generation circles with random numbers;
function generateCircles() {
  numberContainer.innerHTML = "";
  numberContainer.className = "numberContainer";
  for (let i = 0; i < numberOfCircles; i++) {
    let divElem = document.createElement("div");
    divElem.className = "circle";
    divElem.innerText = Math.ceil(Math.random() * 10);
    numberContainer.append(divElem);
  }
}

// circles click event handler what will be the output
numberContainer.addEventListener("click", function (e) {
  if (e.target.className === "circle") {
    let targetNumber = Number(targetValue.innerText);
    let number = Number(e.target.innerText);
    if (number === targetNumber) {
      scoreValue.innerText = Number(scoreValue.innerText) + 10;
      finalScore = undefined ?? scoreValue.innerText;
      targetGeneration();
    }
  }
});

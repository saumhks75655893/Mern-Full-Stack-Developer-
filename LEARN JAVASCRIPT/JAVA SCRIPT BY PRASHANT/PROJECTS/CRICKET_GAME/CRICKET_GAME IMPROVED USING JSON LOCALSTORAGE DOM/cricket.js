let scoreStr = localStorage.getItem("Score");

// console.log(scoreStr);

// scoring showing from the lost played
// let score;
// if(JSON.parse(scoreStr) !== undefined){
//   score = JSON.parse(scoreStr);
// }else{
//   score = {
//     win:0,
//     lost:0,
//     tie:0,
//   };
// }

// shorthand of upper code

// reset the previous result
let score = JSON.parse(scoreStr) || {
  win: 0,
  lost: 0,
  tie: 0,
};

resetScore(scoreStr);
function resetScore(scoreStr) {
  // score showing
  score = scoreStr ? JSON.parse(scoreStr) : {
    win: 0,
    lost: 0,
    tie: 0,
  };
  // score Display
  score.displayScore = function () {
    return `Score => Won: ${score.win}   Lost: ${score.lost}    Tie: ${score.tie}`;
  };
}

// for generation of computer choice
function generateComputerChoice() {
  let computerChoice;
  let randomNumber = Math.random() * 3;
  if (randomNumber > 0 && randomNumber <= 1) {
    computerChoice = "Bat";
    //console.log('Computer choice is ',computerChoice);
  } else if (randomNumber > 1 && randomNumber <= 2) {
    computerChoice = "Ball";
    //console.log('Computer choice is ',computerChoice);
  } else {
    computerChoice = "Stump";
    //console.log('Computer choice is ',computerChoice);
  }

  return computerChoice;
}

// for checking who is winning ,losing or draw
function getResult(userMove, computerMove) {
  if (computerMove === userMove) {
    score.tie++;
    return `It's a draw!`;
  } else if (
    (computerMove === "Bat" && userMove === "Ball") ||
    (computerMove === "Ball" && userMove === "Stump") ||
    (computerMove === "Stump" && userMove === "Bat")
  ) {
    score.lost++;
    return "Computer has won !!";
  } else {
    score.win++;
    return "User has won!";
  }
}

// for the showing the result
function showResult(userMove, computerMove, result) {
  // console.log(score);
  localStorage.setItem("Score", JSON.stringify(score));

  document.querySelector('#user-move').innerText = userMove ? `User choice is ${userMove}` : '';  

  document.querySelector('#computer-move').innerText = computerMove ? `Computer choice is ${computerMove}` : ''; 

  document.querySelector('#result').innerText = result || ''; 

  document.querySelector('#score').innerText = `${score.displayScore()}`; 

}

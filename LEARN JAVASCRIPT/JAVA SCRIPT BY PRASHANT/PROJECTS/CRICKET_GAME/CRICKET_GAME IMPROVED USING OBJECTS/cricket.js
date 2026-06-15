let score = {
  win:0,
  lost:0,
  tie:0,
  displayScore: function(){
    return `No of matches Win:${score.win}   Lost: ${score.lost}    Tie: ${score.tie}`; 
  }
}


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

function getResult(userMove, computerMove) {

  if (computerMove === userMove) {
    score.tie++; 
    return `It's a draw!`;
  } else if ((computerMove === 'Bat' && userMove === 'Ball') || (computerMove === 'Ball' && userMove === 'Stump') || (computerMove === 'Stump' && userMove === 'Bat')) {
    score.lost++; 
    return 'Computer has won !!'; 
  } else {
    score.win++; 
    return "User has won!";
  }
}

function showResult(userMove, computerMove, result){   
  // console.log(score);
  alert(`User choice is ${userMove}. and Computer choice is ${computerMove} and

     the result is ${result}
     
     ${score.displayScore()}`)
}

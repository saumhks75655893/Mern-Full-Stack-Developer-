let board = document.querySelector(".board");
let buttonStart = document.querySelector(".btn-start");
let modal = document.querySelector(".modal");
let startModal = document.querySelector(".start-game");
let restartModal = document.querySelector(".game-over");
let buttonRestart = document.querySelector(".restart-game");

let highScoreElement = document.querySelector("#high-score");
let scoreElement = document.querySelector("#score");
let timeElement = document.querySelector("#time");

let blockHeight = 40;
let blockWidth = 40;
let cols = Math.floor(board.clientWidth / blockWidth);
let rows = Math.floor(board.clientHeight / blockHeight);

let intervalId = null;
let timeIntervalId = null;

let blocks = [];
let snakeBody = [{ x: 4, y: 3 }];
let food = {
  x: Math.floor(Math.random() * rows),
  y: Math.floor(Math.random() * cols),
};

// definiting the score, time and high-score initial value
let score = 0;
let time = "00-00";
let highScore = Number(localStorage.getItem("high-score")) || 0;
let direction = "down";

highScoreElement.innerText = highScore;

// Create the head blocks for the snake
for (let i = 0; i < rows; i++) {
  for (let j = 0; j < cols; j++) {
    let block = document.createElement("div");
    block.classList.add("block");
    board.appendChild(block);
    // block.innerText = `${i}-${j}`;
    blocks[`${i}-${j}`] = block;
  }
}

function render() {
  let head = null;

  // Random food generation
  blocks[`${food.x}-${food.y}`].classList.add("food");

  if (direction === "left") {
    head = { x: snakeBody[0].x, y: snakeBody[0].y - 1 };
  } else if (direction === "right") {
    head = { x: snakeBody[0].x, y: snakeBody[0].y + 1 };
  } else if (direction === "down") {
    head = { x: snakeBody[0].x + 1, y: snakeBody[0].y };
  } else if (direction === "up") {
    head = { x: snakeBody[0].x - 1, y: snakeBody[0].y };
  }

  if (head.x < 0 || head.x >= rows || head.y < 0 || head.y >= cols) {
    clearInterval(intervalId);
    modal.style.display = "flex";
    startModal.style.display = "none";
    restartModal.style.display = "flex";
    return;
  }

  snakeBody.forEach((segment) => {
    blocks[`${segment.x}-${segment.y}`].classList.remove("fill");
  });

  // Check if the snake has eaten the food
  if (head.x === food.x && head.y === food.y) {
    blocks[`${food.x}-${food.y}`].classList.remove("food");
    food = {
      x: Math.floor(Math.random() * rows),
      y: Math.floor(Math.random() * cols),
    };

    snakeBody.unshift(head);
    score += 10;
    scoreElement.innerText = score;

    if (score > highScore) {
      highScore = score;
      localStorage.setItem("high-score", highScore.toString());
    }
  }

  snakeBody.unshift(head);
  snakeBody.pop();

  snakeBody.forEach((segment) => {
    blocks[`${segment.x}-${segment.y}`].classList.add("fill");
  });
}

// ArrowUp
// ArrowLeft
// ArrowDown
// ArrowRight
addEventListener("keydown", (event) => {
  if (event.key === "ArrowUp" && direction !== "down") {
    direction = "up";
  } else if (event.key === "ArrowDown" && direction !== "up") {
    direction = "down";
  } else if (event.key === "ArrowLeft" && direction !== "right") {
    direction = "left";
  } else if (event.key === "ArrowRight" && direction !== "left") {
    direction = "right";
  }
});

buttonStart.addEventListener("click", () => {
  modal.style.display = "none";
  intervalId = setInterval(() => {
    render();
  }, 300);
  timeIntervalId = setInterval(() => {
    let [min, sec] = time.split("-").map(Number);

    if (sec == 59) {
      min += 1;
      sec = 0;
    } else {
      sec += 1;
    }

    time = `${min}-${sec}`;

    timeElement.innerText = time;
  }, 1000);
});

// Restart Game logic
buttonRestart.addEventListener("click", restartGame);
//Restart Game Function
function restartGame() {
  blocks[`${food.x}-${food.y}`].classList.remove("food");

  snakeBody.forEach((segment) => {
    blocks[`${segment.x}-${segment.y}`].classList.remove("fill");
  });

  modal.style.display = "none";
  snakeBody = [
    {
      x: Math.floor(Math.random() * rows),
      y: Math.floor(Math.random() * cols),
    },
  ];
  food = {
    x: Math.floor(Math.random() * rows),
    y: Math.floor(Math.random() * cols),
  };

  score = 0;
  time = "00-00";

  scoreElement.innerText = score;
  timeElement.innerText = time;
  highScoreElement.innerText = highScore;

  intervalId = setInterval(() => {
    render();
  }, 300);
}

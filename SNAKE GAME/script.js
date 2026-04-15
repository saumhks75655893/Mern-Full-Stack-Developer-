let board = document.querySelector(".board");
let blockHeight = 40;
let blockWidth = 40;
let cols = Math.floor(board.clientWidth / blockWidth);
let rows = Math.floor(board.clientHeight / blockHeight);
let intervalId = null;

let blocks = [];
let snakeBody = [{ x: 4, y: 3 }];
let food = {
  x: Math.floor(Math.random() * rows),
  y: Math.floor(Math.random() * cols),
};

let direction = "down";

// Create the head blocks for the snake
for (let i = 0; i < rows; i++) {
  for (let j = 0; j < cols; j++) {
    let block = document.createElement("div");
    block.classList.add("block");
    board.appendChild(block);
    block.innerText = `${i}-${j}`;
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
    alert("Game Over!");
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
    console.log(food.x, food.y);
  }

  snakeBody.unshift(head);
  snakeBody.pop();

  snakeBody.forEach((segment) => {
    blocks[`${segment.x}-${segment.y}`].classList.add("fill");
  });
}

// Start the game loop
intervalId = setInterval(() => {
  render();
}, 500);

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

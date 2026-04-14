let board = document.querySelector(".board");
let blockHeight = 40;
let blockWidth = 40;
let cols = Math.floor(board.clientWidth / blockWidth);
let rows = Math.floor(board.clientHeight / blockHeight);

let blocks = [];
let snakeBody = [{ x: 1, y: 3 }];

let direction = "up";

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
  snakeBody.forEach((segment) => {
    blocks[`${segment.x}-${segment.y}`].classList.add("fill");
  });
}

// setInterval(() => {
//   let head = null;
//   if (direction === "left") {
//     head = { x: snakeBody[0].x, y: snakeBody[0].y - 1 };
//   } else if (direction === "right") {
//     head = { x: snakeBody[0].x, y: snakeBody[0].y + 1 };
//   } else if (direction === "down") {
//     head = { x: snakeBody[0].x + 1, y: snakeBody[0].y };
//   } else if (direction === "up") {
//     head = { x: snakeBody[0].x - 1, y: snakeBody[0].y };
//   }

//   snakeBody.forEach((segment) => {
//     blocks[`${segment.x}-${segment.y}`].classList.remove("fill");
//   });

//   snakeBody.unshift(head);
//   snakeBody.pop();
//   render();
// }, 400);

// ArrowUp
// ArrowLeft
// ArrowDown
// ArrowRight
addEventListener("keydown", (event) => {
  console.log(event.key);
});

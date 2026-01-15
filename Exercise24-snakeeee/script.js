const board = document.querySelector(".board");
const box_hight = 50;
const box_width = 50;

const colomns = Math.floor(board.clientWidth / box_width);
const rows = Math.floor(board.clientHeight / box_hight);

const boardArray = [];
snake = [
  {
    x: 2,
    y: 4,
  },
  {
    x: 2,
    y: 5,
  },
  {
    x: 2,
    y: 6,
  },
];

const directions = "right";

for (let i = 0; i < rows; i++) {
  for (let j = 0; j < colomns; j++) {
    const box = document.createElement("div");
    box.classList.add("box");
    board.appendChild(box);
    box.innerHTML = `${i},${j}`;
    boardArray[`${i},${j}`] = box;
  }
}

function render() {
  snake.forEach((element) => {
    boardArray[`${element.x},${element.y}`].classList.add("filled");
  });
}

setInterval(() => {
  render();
}, 300);

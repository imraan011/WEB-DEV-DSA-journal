const board = document.querySelector(".board");
const box_hight = 50;
const box_width = 50;

const colomns = Math.floor(board.clientWidth / box_width);
const rows = Math.floor(board.clientHeight / box_hight);
let intervalid = null;
let directions = "right";
let food = {
  x: Math.floor(Math.random() * rows),
  y: Math.floor(Math.random() * colomns),
};

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
  let head = null;
  //food rendering logic

  boardArray[`${food.x},${food.y}`].classList.add("food");

  //snake rendering logic
  if (directions === "left") {
    head = {
      x: snake[0].x,
      y: snake[0].y - 1,
    };
  } else if (directions === "right") {
    head = {
      x: snake[0].x,
      y: snake[0].y + 1,
    };
  } else if (directions === "up") {
    head = {
      x: snake[0].x - 1,
      y: snake[0].y,
    };
  } else if (directions === "down") {
    head = {
      x: snake[0].x + 1,
      y: snake[0].y,
    };
  }

  if (head.x < 0 || head.x >= rows || head.y < 0 || head.y >= colomns) {
    alert("Game Over");
    clearInterval(intervalid);
  }

  if (food.x === head.x && food.y === head.y) {
    boardArray[`${food.x},${food.y}`].classList.remove("food");
    food = {
      x: Math.floor(Math.random() * rows),
      y: Math.floor(Math.random() * colomns),
    };
    boardArray[`${food.x},${food.y}`].classList.add("food");
    snake.unshift(head);
  }

  snake.forEach((element) => {
    box = boardArray[`${element.x},${element.y}`];
    box.classList.remove("filled");
  });
  snake.unshift(head);
  snake.pop();

  snake.forEach((element) => {
    boardArray[`${element.x},${element.y}`].classList.add("filled");
  });
}

// intervalid = setInterval(() => {
//   render();
// }, 300);

addEventListener("keydown", (e) => {
  if (e.key == "ArrowLeft") {
    directions = "left";
  } else if (e.key == "ArrowRight") {
    directions = "right";
  } else if (e.key == "ArrowUp") {
    directions = "up";
  } else if (e.key == "ArrowDown") {
    directions = "down";
  }
});

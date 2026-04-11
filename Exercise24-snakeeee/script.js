const board = document.querySelector(".board");
const box_hight = 50;
const box_width = 50;
const StartBtn = document.querySelector(".Startbtn");
const RestartBtn = document.querySelector(".Restartbtn");
const modal = document.querySelector(".modal");
const scoreElem = document.querySelector("#score");
const HscoreElem = document.querySelector("#Hscore");
const timeElem = document.querySelector("#time");

let highScore = localStorage.getItem("highScore") || 0;
HscoreElem.innerHTML = highScore;
let score = 0;
let time = `00:00`;

const colomns = Math.floor(board.clientWidth / box_width);
const rows = Math.floor(board.clientHeight / box_hight);
let intervalid = null;
let timerId = null;

let directions = "right";

let food = {
  x: Math.floor(Math.random() * rows),
  y: Math.floor(Math.random() * colomns),
};

const boardArray = [];
snake = [
  {
    x: Math.floor(rows / 2),
    y: Math.floor(colomns / 2),
  },
];

for (let i = 0; i < rows; i++) {
  for (let j = 0; j < colomns; j++) {
    const box = document.createElement("div");
    box.classList.add("box");
    board.appendChild(box);
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

  //collision logic
  if (head.x < 0 || head.x >= rows || head.y < 0 || head.y >= colomns) {
    clearInterval(intervalid);
    modal.style.display = "flex";
    modal.querySelector(".startgame").style.display = "none";
    modal.querySelector(".gameover").style.display = "flex";

    return;
  }

  //food consumption logic
  if (food.x === head.x && food.y === head.y) {
    boardArray[`${food.x},${food.y}`].classList.remove("food");
    food = {
      x: Math.floor(Math.random() * rows),
      y: Math.floor(Math.random() * colomns),
    };
    boardArray[`${food.x},${food.y}`].classList.add("food");
    snake.unshift(head);

    score += 10;
    scoreElem.innerHTML = score;

    if (score > highScore) {
      highScore = score;
      HscoreElem.innerHTML = highScore;
      localStorage.setItem("highScore", highScore.toString());
    }
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

StartBtn.addEventListener("click", (e) => {
  modal.style.display = "none";
  intervalid = setInterval(() => {
    render();
  }, 300);
  timerId = setInterval(() => {
    let [min , sec] = time.split(":").map(Number)

    if(sec === 59){
      min += 1;
      sec = 0
    }else{
      sec++
    }

    time = `${min < 10 ? "0" + min : min}:${sec < 10 ? "0" + sec : sec}`;
    timeElem.innerHTML = time;
  } , 1000)
});

RestartBtn.addEventListener("click", (e) => {
  clearInterval(intervalid);
  clearInterval(timerId);
  boardArray[`${food.x},${food.y}`].classList.remove("food");
  snake.forEach((element) => {
    box = boardArray[`${element.x},${element.y}`];
    box.classList.remove("filled");
  });
  modal.style.display = "none";
  snake = [
    {
      x: Math.floor(rows / 2),
      y: Math.floor(colomns / 2),
    },
  ];
  food = {
    x: Math.floor(Math.random() * rows),
    y: Math.floor(Math.random() * colomns),
  };
  score = 0;
  scoreElem.innerHTML = score;

  intervalid = setInterval(() => {
    render();
  }, 300);
});

const board = document.querySelector(".board")
const box_hight = 30;
const box_width = 30;

const colomns = Math.floor(board.clientWidth / box_width)
const rows = Math.floor(board.clientHeight / box_hight)

for(let i =1 ; i<= colomns * rows ; i++){
    const box = document.createElement("div");
    box.classList.add("box");
    board.appendChild(box);
}
let arr = [1, 5, 4, 132, 78, 5, 69, 2];
const prompt = require("prompt-sync")();

let index = -1;
let target = Number(prompt("Enter the number to Find In the array : "));
for (let i = 0; i < arr.length; i++) {
  if (arr[i] == target) {
    index = i;
    break;
  }
}

if (index == -1) console.log("Not Found");
else console.log("Found at the index: " + index);

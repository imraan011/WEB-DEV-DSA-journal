const prompt = require("prompt-sync")();
let Target = Number(prompt("Enter a number: "));
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function BinarySearch(arr, Target) {
  let index = -1;
  let i = 0,
    j = arr.length - 1;
  while (i <= j) {
    let mid = Math.floor((i + j) / 2);
    if (arr[mid] == Target) {
      index = mid;
      break;
    } else if (arr[mid] > Target) j = mid - 1;
    else i = mid + 1;
  }
  if (index == -1) console.log("Not found");
  else console.log("found at : " + index);
}

BinarySearch(arr, Target);
const prompt = require("prompt-sync")();
let n = Number(prompt("Enter row of array "));

let arr = new Array(n);

for (let i = 0; i < n; i++) {
  let size = Number(prompt(`Enter the size of the inner array ${i} `));
  arr[i] = new Array(size);
}
for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr[i].length; j++) {
    arr[i][j] = Number(prompt("Enter the Element "));
  }
}

function DiagnalSum(arr) {
  let n = arr.length;
  for (let i = 0; i < n; i++) {
    if (arr[i].length !== n) {
      console.log("Diagonal sum requires a square matrix");
      return;
    }
  }

  let leftSum = 0;
  let rightSum = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (i === j) leftSum += arr[i][j];
      if (i + j == arr.length - 1) rightSum += arr[i][j];
    }
  }
  console.log(`left diagnol Sum = ${leftSum}`);
  console.log(`right diagnol Sum = ${rightSum}`);
}
DiagnalSum(arr);

function printarr(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      process.stdout.write(`${arr[i][j]} `);
    }
    console.log();
  }
  
}
printarr(arr);

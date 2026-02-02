const prompt = require("prompt-sync")();
let n = Number(prompt("Enter row of array "));


let arr = new Array(n)

for (let i = 0; i < n; i++) {
    let size = Number(prompt(`Enter the size of the inner array ${i} `))
    arr[i] = new Array(size)
}
for(let i = 0 ; i<arr.length ; i++){
for(let j = 0 ; j<arr[i].length ; j++){
    arr[i][j] = Number(prompt("Enter the Element "))
}}

console.log(arr);

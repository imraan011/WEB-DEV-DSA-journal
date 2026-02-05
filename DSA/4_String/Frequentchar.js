let prompt = require("prompt-sync")()

let s = prompt("Enter the string")
let arr = new Array(123).fill(0)

for(let i = 0 ; i<s.length ;i++){
    let ch = s.charCodeAt(i)
    arr[ch]++
}

for(let i=0;i<arr.length ; i++){
    if(arr[i]>0){
        console.log(`${String.fromCharCode(i)} occure ${arr[i]} times`);
    }
}
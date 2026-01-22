

let arr = [1,2,3,4,5]
let n = arr.length;
for (let i = 0; i < n-1; i++) {
    arr[i]=arr[i+1]    
}
arr.length = n-1 
console.log(arr);
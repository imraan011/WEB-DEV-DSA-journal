//optimal
let arr = [1, 2, 3, 4, 5];

let k = 13;
k = k % arr.length;
console.log(arr);

reversal(arr, 0, arr.length - 1);
reversal(arr, 0, k - 1);
reversal(arr, k, arr.length - 1);

function reversal(arr, i, j) {
  while (i < j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    j--;
    i++;
  }
}
console.log(arr);



//brute force
let arr1 = [1, 2, 3, 4, 5];
let temp = new Array(arr1.length);
let n = 1;
n = n % arr1.length;
for (let i = 0; i < arr1.length; i++) {
  temp[i] = arr1[[i -n+arr1.length]%arr1.length];
}
console.log(temp);

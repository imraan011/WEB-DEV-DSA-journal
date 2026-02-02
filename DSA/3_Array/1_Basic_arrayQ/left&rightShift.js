//left shift

let arr = [1, 2, 3, 4, 5];
let temp = arr[0];
for (let i = 0; i < arr.length; i++) {
  arr[i] = arr[i + 1];
}
arr[arr.length - 1] = temp;
console.log(arr);

//right shift

let arr1 = [1, 2, 3, 4, 5];
let temp1 = arr1[arr1.length - 1];
for (let i = arr1.length - 1; i >= 0; i--) {
  arr1[i] = arr1[i - 1];
}
arr1[0] = temp1;
console.log(arr1);

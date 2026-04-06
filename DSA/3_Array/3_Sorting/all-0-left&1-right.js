//all 0 to left and all 1 to right in an array

let arr = [0, 1, 1, 0, 1, 0, 1, 0, 1, 1, 0, 0];
let i,
  j = 0;
for (i = 0; i < arr.length; i++) {
  if (arr[i] == 0) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    j++;
  }
}

console.log(arr);

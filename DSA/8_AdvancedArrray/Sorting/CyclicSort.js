//cyclic sort

let arr = [3, 5, 2, 1, 4, 0];
cyclicSort(arr);
console.log(arr);

function cyclicSort(arr) {
  let i = 0;
  while (i < arr.length) {
    if(arr[i] != i ) {
      swap(arr , arr[i], i);
    }else
       i++;
  }
}
function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

//quick Sort
let arr = [5, 4, 3, 2, 1];
QuickSort(arr, 0, arr.length - 1);
console.log(arr);

function QuickSort(arr, f, l) {
  if (f >= l) return;
  let pIdx = partition(arr, f, l);
  QuickSort(arr, f, pIdx - 1);
  QuickSort(arr, pIdx + 1, l);
}

function partition(arr, f, l) {
  let i = f - 1,
    pivot = arr[l];
  for (let j = f; j < l; j++) {
    if (arr[j] < pivot) {
      i++;
      Swap(arr, i, j);
    }
  }
  i++;
  Swap(arr, i, l);
  return i;
}

function Swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

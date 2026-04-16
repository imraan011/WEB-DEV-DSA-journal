//merge sort

function conquer(arr, f, l, mid) {
  let temp = new Array(l - f + 1);
  let i = f,
    j = mid + 1,
    k = 0;
  while (i <= mid && j <= l) {
    if (arr[i] < arr[j]) {
      temp[k] = arr[i];
      i++;
      k++;
    } else {
      temp[k] = arr[j];
      j++;
      k++;
    }
  }

  while (i <= mid) {
    temp[k] = arr[i];
    i++;
    k++;
  }
  while (j <= l) {
    temp[k] = arr[j];
    j++;
    k++;
  }
   k =0 , i = f
  while (k < temp.length) {
    arr[i] = temp[k];
    i++;
    k++;
  }
}

function divide(arr, f, l) {
  if (f >= l) return;
  let mid = Math.floor((f + l) / 2);
  divide(arr, f, mid);
  divide(arr, mid + 1, l);
  conquer(arr, f, l, mid);
}

let arr = [5, 4, 3, 2, 1];
divide(arr, 0, arr.length - 1);
console.log(arr);

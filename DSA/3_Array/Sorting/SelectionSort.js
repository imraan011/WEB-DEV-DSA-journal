let arr = [1, 2, 57, 4, 6, 3, 2, 1];
for (let i = 0; i < arr.length; i++) {
  let small = i;
  for (let j = i + 1; j < arr.length; j++) {
    if (arr[small] > arr[j]) {
      small = j;
    }
  }
  let temp = arr[i];
  arr[i] = arr[small];
  arr[small] = temp;
}

console.log(arr);


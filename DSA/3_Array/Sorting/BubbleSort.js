let arr = [2, 6, 45, 7, 2, 1, 3, 6, 8, 4, 1, 3];

function bubbleSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    //for control the number of passes
    for (let j = 0; j < arr.length - i - 1; j++) {
      //for control the number of comparisons in each pass
      if (arr[j] > arr[j + 1]) {
        //swapping
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
}

bubbleSort(arr);
console.log(arr);

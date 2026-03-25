// //cyclic sort

// let arr = [3, 5, 2, 1, 4];
// cyclicSort(arr);
// console.log(arr);

// function cyclicSort(arr) {
//   let i = 0;
//   while (i < arr.length) {
//     if(arr[i] != i+1 ) {
//       swap(arr , arr[i]-1, i);
//     }else
//        i++;
//   }
// }
function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

//Time complexity O(n) and space complexity O(1)
//this is only applicable when the array contains elements from 1 to n or 0 to n-1
//other approch by uing the current index to the correct index and swap the element to the correct index until the current index has the correct element
let arr = [3, 5, 2, 1, 4];
cyclicSort1(arr);
console.log(arr);
function cyclicSort1  (arr) {
  let  i =0;
  while(i < arr.length) {
    let curIdx = arr[i]-1
    if(arr[i] != arr[curIdx]){
      swap(arr , i , curIdx)
    }
    else i++
  }
}
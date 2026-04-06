function SingleNo(arr) {
  let res = 0;

  for (let i = arr.length-1; i >=0 ; i++) {
    if (arr[i] < 9) {
      res = res ^ arr[i];
    }
    return res;
  }
}

console.log(SingleNo([2, 2, 1]));

function findGreatestElementAndIndex(arr) {
  let g1, g2;
  g1 = arr[0];
  let index = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > g1) {
      g1 = arr[i];
      index = i;
    }
  }
 console.log(g1 + " " + index);
  return [g1, index];
}

findGreatestElementAndIndex([1, 2, 3, 4, 5]);
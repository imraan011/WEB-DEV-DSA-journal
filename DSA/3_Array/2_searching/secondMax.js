function findSecondGreatestElement(arr) {
  let g1 = -Infinity;
  let g2 = -Infinity;

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > g1) {
      g2 = g1;
      g1 = arr[i];
    } else if (arr[i] > g2 && arr[i] !== g1) {
      g2 = arr[i];
    }
  }

  console.log(g2);
  return g2;
}
findSecondGreatestElement([12, 35, 1, 10, 34, 1]);

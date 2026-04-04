var maximumCount = function (arr) {
  let first0 = find(arr, 0);
  let firstpos = find(arr, 1);

  let neg = first0;
  let pos = arr.length - firstpos;

  return Math.max(neg, pos);
};
function find(arr, tar) {
  let f = 0,
    l = arr.length - 1;
  while (f <= l) {
    let mid = Math.floor((f + l) / 2);
    if (arr[mid] < tar) f = mid + 1;
    else l = mid - 1;
  }
  return f;
}
let arr = [-2, -1, -1, 1, 2, 3];
console.log(maximumCount(arr));


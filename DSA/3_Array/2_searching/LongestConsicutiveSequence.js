function longestConsecutive(arr) {
  let max = 1;

  let set = new Set(arr);
  for (let i of set) {
    if (!set.has(i - 1)) {
      let count = 1;

      while (set.has(i + count)) {
        count++;
      }
      max = Math.max(max, count);
    }
  }
  return max;
}

let arr = [100, 4, 200, 1, 3, 2];
console.log(longestConsecutive(arr));
var findMaxConsecutiveOnes = function (nums) {
  let count = 0;
  let ans = 0;
  for (let i of nums) {
    count = i === 1 ? count + 1 : 0;
    ans = Math.max(ans, count);
  }
  return ans;
};
let nums = [1, 1, 0, 1, 1, 1];
console.log(findMaxConsecutiveOnes(nums));

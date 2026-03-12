
var maxSubArray = function (nums) {
    let sum = 0
    let maxsum = nums[0]
    for (let i of nums) {
        sum = sum + i
        if (sum > maxsum) {
            maxsum = sum
        }

        if (sum < 0) sum = 0

    }
    return maxsum
};
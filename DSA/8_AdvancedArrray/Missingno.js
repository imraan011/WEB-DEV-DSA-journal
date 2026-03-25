
function missingNumber(nums) {
    // Your code here
    let n = nums.length
    let actualsum = Math.floor(n*(n+1)/2)
    let sum = 0 
    for(let i of nums) sum += i
    return actualsum - sum
}

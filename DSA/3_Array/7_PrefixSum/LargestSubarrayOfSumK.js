 
function longestSubarrayWithSumK(arr, k) {
    let max = 0, sum = 0
    let map = new Map()
    map.set(sum, -1)
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]
        if (map.has(sum - k))
            max = Math.max(max, i - map.get(sum - k))
        if (!map.has(sum))
            map.set(sum, i)
    }
    return max
}

let arr = [1, 2, 3, 7, 5]
let k = 12
console.log(longestSubarrayWithSumK(arr, k))

// from 2 pointer approach
 
var subarraySum = function (arr, k) {
    let count = 0
    let i = 0
    while (i < arr.length) {
        let sum = 0 ,j=i
        while (j < arr.length) {
            sum = sum + arr[j]
            if (sum == k) {
                count++
            }

            j++
        }
        i++
    }
    return count
};

let arr1 = [1, 1, 1] , h = 2
console.log(subarraySum(arr1, h))
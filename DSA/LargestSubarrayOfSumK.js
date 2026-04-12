 
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
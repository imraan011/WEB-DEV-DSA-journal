
function countDistinctInWindow(arr, k) {
    let map = new Map()
    let j = 0, ans = []
    for (let i = 0; i < k - 1; i++) {
        map.set(arr[i], (map.get(arr[i]) || 0) + 1)
    }

    for (let i = k - 1; i < arr.length; i++) {
        map.set(arr[i], (map.get(arr[i]) || 0) + 1)
        ans.push(map.size)

        if (map.get(arr[j]) > 1)
            map.set(arr[j], (map.get(arr[j]) || 0) - 1)
        else map.delete(arr[j])

        j++
    }

    return ans
}

let arr = [1, 2, 1, 3, 4, 2, 3]
let k = 4
console.log(countDistinctInWindow(arr, k))  
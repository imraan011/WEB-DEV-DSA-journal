
var fourSum = function (arr, target) {
    arr.sort((a, b) => a - b)
    let i = 0, j = i + 1
    let ans = []

    for (let i = 0; i < arr.length; i++) {
        if (i > 0 && arr[i] == arr[i - 1]) continue

        for (let j = i + 1; j < arr.length; j++) {
            if (j > i + 1 && arr[j] == arr[j - 1]) continue

            let k = j + 1, l = arr.length - 1
            while (k < l) {
                let sum = arr[i] + arr[j] + arr[k] + arr[l]
                if (sum == target) {
                    ans.push([arr[i], arr[j], arr[k], arr[l]])
                    k++
                    l--
                    //duplicae handling
                    while (k < l && arr[k] == arr[k - 1]) k++
                    while (k < l && arr[l] == arr[l + 1]) l--
                } else if (sum < target) k++
                else l--
            }

        }
    }
    return ans

};

let arr = [1, 0, -1, 0, -2, 2]
let target = 0
console.log(fourSum(arr, target))

//using recursion
var nSum = function (arr, target, n) {
    arr.sort((a, b) => a - b);
    let ans = [];
    
    function helper(arr, target, n, start, currentCombo) {
        if (n === 2) {
            let left = start, right = arr.length - 1;
            while (left < right) {
                let sum = arr[left] + arr[right];
                if (sum === target) {
                    ans.push([...currentCombo, arr[left], arr[right]]);
                    while (left < right && arr[left] === arr[left + 1]) left++;
                    while (left < right && arr[right] === arr[right - 1]) right--;
                    left++;
                    right--;
                } else if (sum < target) {
                    left++;
                } else {
                    right--;
                }
            }
            return;
        }
        
        for (let i = start; i < arr.length; i++) {
            if (i > start && arr[i] === arr[i - 1]) continue;
            helper(arr, target - arr[i], n - 1, i + 1, [...currentCombo, arr[i]]);
        }
    }
    
    helper(arr, target, n, 0, []);
    return ans;
};

// Test with 4Sum
console.log(nSum(arr, target, 4));

// Test with 3Sum
console.log(nSum(arr, 0, 3));
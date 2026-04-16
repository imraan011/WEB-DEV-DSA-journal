 
var productExceptSelf = function (arr) {
    let ans = new Array(arr.length).fill(1)

    let pref = 1
    for (let i = 0; i < arr.length; i++) {
        ans[i] = pref
        pref *= arr[i]
    }

    let suf = 1
    for (let i = arr.length - 1; i >= 0; i--) {
        ans[i] *= suf
        suf *= arr[i]
    }

    return ans;


}

let arr = [1, 2, 3, 4]
console.log(productExceptSelf(arr))

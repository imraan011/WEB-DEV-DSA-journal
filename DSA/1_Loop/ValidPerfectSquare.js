 
var isPerfectSquare = function (num) {
    let i = 0, j = num / 2
    if (num == 0) return false
    if (num == 1) return true
    while (i <= j) {
        let mid = Math.floor((i + j) / 2)
        if (mid == num / mid && num % mid == 0) return true
        else if (mid < num / mid) i = mid + 1
        else j = mid - 1
    }
    return false
};
let num = 16
console.log(isPerfectSquare(num))
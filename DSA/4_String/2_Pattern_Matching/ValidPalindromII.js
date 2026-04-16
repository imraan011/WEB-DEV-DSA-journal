 
var validPalindrome = function (s) {
    if(s.length <= 2) return true;
    let ispalind = function (l, r) {
        while (l < r) {
            if (s[l] != s[r]) return false
            else {
                l++
                r--
            }
        }
        return true
    }
    let i = 0; j = s.length - 1
    while (i < j) {
        if (s[i] != s[j]) {
            return ispalind(i + 1, j) || ispalind(i, j - 1)
        }
        else {
            i++
            j--
        }
    }
    return true
};

let s = "abca"
console.log(validPalindrome(s))
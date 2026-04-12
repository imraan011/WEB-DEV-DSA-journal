 
var minimumLength = function (s) {
    let i = 0, j = s.length - 1
    while (i <= j) {
        if (s[i] == s[j]) {
            let ch = s[i]
            while (i <= j && ch == s[j]) j--
            while (i <= j && ch == s[i]) i++

        } else break
    }
    return j - i + 1
};
let s = "cabaabac"
console.log(minimumLength(s))
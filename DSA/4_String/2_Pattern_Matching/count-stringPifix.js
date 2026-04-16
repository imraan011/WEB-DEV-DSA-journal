
function countPrefixMatch(words, pref) {
    // Write your code here
    
    let count = 0

    for(let i of words)
        if(i.startsWith(pref)) count++
    return count
}

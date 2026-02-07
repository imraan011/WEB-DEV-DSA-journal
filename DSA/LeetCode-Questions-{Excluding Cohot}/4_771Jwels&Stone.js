var numJewelsInStones = function(jewels, stones) {
    let jewelset = new Set(jewels)
    let count = 0
    for(let s of stones){
     if(jewelset.has(s)){
         count++
     }
    }
    return count
 };
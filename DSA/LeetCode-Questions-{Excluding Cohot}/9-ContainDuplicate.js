
var containsDuplicate = function(arr) {
    let s = new Set()
    for(let i of arr){
     if( s.has(i))return true
     else s.add(i)
    }
    return false
 };
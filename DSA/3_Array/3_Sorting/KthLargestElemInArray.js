 
var findKthLargest = function(arr, k) {
       arr.sort((a,b)=>a-b)
    return arr[arr.length-k]
};
let arr = [3,2,1,5,6,4] , k = 2        
console.log(findKthLargest(arr, k))

// quick select algo
//heap data structure
//do baad me 
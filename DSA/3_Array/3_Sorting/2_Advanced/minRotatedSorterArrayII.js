 
var findMin = function(arr) {
    let l = 0 , r = arr.length-1
    while(l<r){
        let mid = Math.floor((l+r)/2)
        if(arr[mid] == arr[r]) r--
        else if (arr[mid] < arr[r])
                r=mid
        else 
                l=mid+1
    }
    return arr[r]
};
let arr = [1,1,1,0,1]
console.log(findMin(arr))
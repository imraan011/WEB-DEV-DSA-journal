
function searchInsert(arr, target) {
    let f  = 0 , l = arr.length-1
    while(f<=l){
        let mid = Math.floor((f+l)/2)
        if(arr[mid]== target) return mid
        else if(arr[mid]<target) f=mid+1
        else l=mid-1
    }
    return f
    
}

let arr = [1,3,5,6]
let target = 2
console.log(searchInsert(arr,target)) 

function peakIndexInMountainArray(arr) {
    let i = 0 , j = arr.length-1
    while(i<=j){
        let mid = Math.floor((i+j)/2)

        if(arr[mid]<arr[mid+1]) i=mid+1
        else j = mid-1
    }
return i
    
}
let arr = [0,1,0]
console.log(peakIndexInMountainArray(arr))
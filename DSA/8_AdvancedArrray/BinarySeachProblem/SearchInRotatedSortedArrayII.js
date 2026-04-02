
function searchINRotatedSortArrayII(arr, target) {
    let f = 0 , l =arr.length-1
    while(f<=l){
        let mid = Math.floor((f+l)/2)

        if(arr[mid] == target) return mid
        if(arr[f] == arr[mid]&& arr[mid]==arr[l]){
            f++
            l--
        }
        if(arr[f]<arr[mid]){
            if(target>=arr[f] && target<arr[mid]) l = mid-1
            else f = mid+1
        }else {
            if(target<=arr[l] && target > arr[mid]) f =mid+1
            else l=mid-1
        }

    }

}
let arr = [4,5,5,5,5,5,6,6,7,0,1,2]
console.log(searchINRotatedSortArrayII(arr,0))

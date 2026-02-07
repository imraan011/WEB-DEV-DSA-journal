/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(arr, target) {
    function leftElem(){
        let i =0 , j = arr.length-1 , index =-1
        
        while(i<=j){
            let mid = i + Math.floor((j-i)/2)

            if(arr[mid]==target){
                index = mid
                j = mid-1
            }
            else if(arr[mid]>target){
                j=mid-1
            }
            else{
                i=mid+1
            }

        }
        return index
    }
      function rightElem(){
        let i =0 , j = arr.length-1 , index =-1
        
        while(i<=j){
            let mid = i + Math.floor((j-i)/2)

            if(arr[mid]==target){
                index = mid
            i= mid+1
            }
            else if(arr[mid]>target){
                j=mid-1
            }
            else{
                i=mid+1
            }

        }
        return index
    }
    
  return [leftElem(), rightElem()]

}
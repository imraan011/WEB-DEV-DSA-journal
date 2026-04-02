
 var search  = function(arr , target , isfisrt){

     let f = 0 , l= arr.length-1 , index =-1
     while(f<=l){
         let mid = Math.floor((f+l)/2)
         if(arr[mid]  == target){
              index = mid
              if(isfisrt) l =mid-1
              else f = mid+1
         }else if(arr[mid]<target) f=mid+1
         else l =mid-1
     }
     return index
    }
function searchRange(arr, target) {
    let st = search(arr , target , true)
    let ls = search(arr , target ,false)
        return [st , ls]
   
}

let arr = [5,7,7,8,8,10]
let target = 8
console.log(searchRange(arr,target))
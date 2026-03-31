// count the number of element in the sorted array


let arr  = [ 0,0,0,1,2,2,3,3,5,5,6,6,8,9,10]

function count(arr , tar ){
   let first = binary(arr , tar , true)
  
   let last = binary(arr , tar , false)
   
   if(first==-1 || last==-1) return 0
   
   return last-first+1  

}

function binary(arr , tar , isStart){
   let f = 0 , l = arr.length-1 , index = -1

   while(f<=l){
      let mid = Math.floor((f+l) / 2)

      if(arr[mid]==tar){
         index = mid
         if(isStart) l = mid-1
         else f=mid+1
      }else if(arr[mid]<tar) f=mid+1
      else l=mid-1
   }
   return index
}

console.log(count(arr , 8))
function moveZerosInPlace(arr) {
    // Write your logic here
       let i = 0 ;
    
    for(let j = 0 ; j<arr.length ; j++){
        if(arr[j]!=0){
            arr[i]=arr[j]
            i++
      }   
    }
        while(i<arr.length){
            arr[i]=0
            i++
        }
   console.log(arr);
}
moveZerosInPlace([0,2,3,0,4,0,5,6,0,7,0,0,8,9])
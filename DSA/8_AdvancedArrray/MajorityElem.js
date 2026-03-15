// majority element brute force
let arr = [2, 2, 1, 1, 1, 2, 2];
let map = new Map()

for(let i of arr){
   if(map.has(i)){
      map.set(i , map.get(i)+1)
   }
   else{
      map.set(i,1)
   }
}

for(let i of map){
   if(i[1] > arr.length/2){
      console.log(i[0]);
      
   }
}

 // optimized solution
 
var majorityElement = function(arr) {
    let count = 1
    let ans = arr[0]
    for(let i =1 ; i<arr.length ; i++){
        if(count == 0){
            ans = arr[i]
            count++
        }
        else if (arr[i]==ans){
            count++
        }
        else count--
    
    }
    return ans
};


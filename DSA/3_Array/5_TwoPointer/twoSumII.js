 
var twoSum = function(nums, target) {
    let map = new Map()
    for(let i =0 ; i <nums.length ; i++){
     let y = target - nums[i]
     if(map.has(y)) 
     return[i,map.get(y)]
      else{
        map.set( nums[i] , i)
      }  
    }
    return
};
let nums = [2,7,11,15] , target = 9
console.log(twoSum(nums,target))
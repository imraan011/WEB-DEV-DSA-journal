 
var findIntersectionValues = function(nums1, nums2) {
    let count1 = 0 , count2 = 0
    let set1 = new Set(nums1)
    let set2 = new Set(nums2)

    for(let i of nums1){
        if(set2.has(i)) count1++
    }
    
    for(let i of nums2){
        if(set1.has(i)) count2++
    }
    return [count1 , count2]
};
let nums1 = [1,2,3,4] , nums2 = [3,4,5,6]
console.log(findIntersectionValues(nums1,nums2))
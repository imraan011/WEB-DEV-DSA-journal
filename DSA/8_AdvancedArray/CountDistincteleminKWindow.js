 
class Solution {
    countDistinct(arr, k) {
        // code here
        let i = 0 ; 
        let ans= []
        
        let map  = new Map()
        for(let j = 0 ; j<k-1 ; j++){
                map.set(arr[j] , (map.get(arr[j]) || 0)+1)
        }
        
        for(let j = k-1 ; j<arr.length ; j++){
                map.set(arr[j] , (map.get(arr[j])|| 0)+1 )
            
              ans.push(map.size)
            if( map.get(arr[i])>1)
                map.set(arr[i]  , map.get(arr[i]) -1)
            else
                map.delete(arr[i])
                
            i++
        }
        
        return ans
    }
}

let arr = [1, 2, 1, 3, 4, 2, 3] , k = 4
let obj = new Solution()
console.log(obj.countDistinct(arr,k))
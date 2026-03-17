
var trap = function(arr) {
    let leftMax = arr[0] , rightMax = arr[arr.length-1]
    let left = new Array(arr.length)
    left[0] = arr[0]
    let right = new Array(arr.length)
    right[arr.length-1] = arr[arr.length-1]
    for(let i = 1 ; i<arr.length ; i++){
        leftMax = Math.max(leftMax , arr[i])
        left[i] = leftMax
    }
    for(let i = arr.length-2 ; i>=0 ; i--){
        rightMax = Math.max(rightMax , arr[i])
        right[i] = rightMax
    }

    let ans=0

    for(let i =0 ; i<arr.length ; i++){
        ans+= Math.min(left[i] , right[i]) - arr[i]
    }

    return console.log(ans)
};

trap([0,1,0,2,1,0,1,3,2,1,2,1])
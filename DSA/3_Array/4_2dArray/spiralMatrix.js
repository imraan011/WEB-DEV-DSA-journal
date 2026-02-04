
var spiralOrder = function(arr) {

    let ans = []
        let left = 0 , right = arr[0].length-1
        let top = 0 , bottom =  arr.length-1

    while(left<=right && top<=bottom){
        for(let i = left ; i <= right ; i++){
            ans.push(arr[top][i])

        }
        top++;
        for(let j = top ; j<= bottom ; j++){
            ans.push(arr[j][right])
        }
        right--
        if(top<=bottom){

        for(let k = right ; k>=left ; k--){
            ans.push(arr[bottom][k])
        }
        bottom--
        }
        if(left<=right){

        for(let l = bottom ;l>=top ; l--){
            ans.push(arr[l][left])
        }
        left++
        }


    }
    return ans
};
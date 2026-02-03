
var diagonalSum = function(arr) {
    let n = arr.length
    let sum = 0
        for(let i = 0 ; i<arr.length ; i ++){
            sum += arr[i][i]
            sum += arr[i][n-1-i]

        }
            if(n%2!=0){
                sum-= arr[Math.floor(n/2)][Math.floor(n/2)]
            }
            return sum
};
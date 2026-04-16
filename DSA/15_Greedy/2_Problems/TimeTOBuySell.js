
var maxProfit = function(arr) {
    let maxprofit = 0;
    let min = arr[0]
    for(let i of arr){
        if(i<min) min = i
        let profit = i-min

        maxprofit = Math.max(maxprofit , profit)
    }
    return maxprofit
};
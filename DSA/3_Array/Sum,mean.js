function calculateSumAndMean(arr, n) {
    let sum = 0;
    for (var i = 0; i < arr.length; i++) {
         sum += arr[i];
         
    }
    const mean = (sum/n).toFixed(1)
    
    
    console.log(sum+ " " +mean);
    return [sum,mean]
}
calculateSumAndMean([1, 2, 3, 4, 5], 5)
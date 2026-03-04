function printNumbers(n) {
    //Write your code here
    if(n==0) return
    printNumbers(n-1)
    process.stdout.write(n+" ")
 }
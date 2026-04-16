function printNumbers(n) {
    //Write your code here
      if(n==0) return
   
   process.stdout.write(n+" ")
   printNumbers(n-1)
 }
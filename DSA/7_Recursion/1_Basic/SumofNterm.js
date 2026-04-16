function sumUpToN(n) {
    // Write your logic here
    let sum= 0
   if(n==0) return sum
   return sum = n+sumUpToN(n-1)
    
}
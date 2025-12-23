function sumOfDigits(n) {
    // Write your logic here
     let sum = 0;
    while(n>0){
        
     let temp= n % 10 ;
     sum+=temp;
     n=Math.floor(n/10);
    }
    console.log(sum);
    return sum;
    
}

sumOfDigits(1234); // Output: 10
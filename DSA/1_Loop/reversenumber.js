function reverseNumber(n) {
    // Write your logic here
    let rev = 0 ;
    while(n>0){
        let temp = n%10;
        rev = (rev*10)+temp;
        n=Math.floor(n/10);
        
    }
console.log(rev);
    return rev;
}

reverseNumber(12345) // Output: 54321
let n = 121;

let temp = n;
let sum = 0;
while(n>0){
    let rem = n%10;
    sum = sum + rem*10;
    n= Math.floor(n/10)
}
console.log(sum);
if (n==sum){
    console.log("Palindrome");
} {
    
}
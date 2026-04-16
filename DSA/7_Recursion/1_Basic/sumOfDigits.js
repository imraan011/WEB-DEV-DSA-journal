//using recursion
function sumofdigit(n){
    if(n==0) return 0

    return n%10+sumofdigit(Math.floor(n/10))
}

console.log(sumofdigit(123))
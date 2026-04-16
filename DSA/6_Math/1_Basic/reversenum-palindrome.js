let n = 123;
let temp = n;
let rev = 0;

while (n > 0) {
  let rem = n % 10;
  rev = rev * 10 + rem;
  n = Math.floor(n / 10);
}

if (temp === rev) {
    console.log("palindrome");
}else{
    console.log("not palindrome");
}

console.log(rev);


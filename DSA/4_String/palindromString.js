const prompt = require("prompt-sync")();

let s = prompt("Enter the string");
let ispalindrome = true;
let i = 0,
  j = s.length - 1;
while (i < j) {
  if (s[i] !== s[j]) ispalindrome = false;

  i++;
  j--;
}

if (ispalindrome == true) console.log("String Is Palindrome");
else console.log("String Is Not Palindrome");

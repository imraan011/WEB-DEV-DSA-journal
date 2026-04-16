const prompt = require("prompt-sync")();

let s = prompt("Enter the string ");
let result = ""
for (let i = 0; i < s.length; i++) {
  if (s.charCodeAt(i) >= 65 && s.charCodeAt(i) <= 90) {
    result+= s[i].toLowerCase()
  }
  else if (s.charCodeAt(i) >= 97 && s.charCodeAt(i) <= 122){
    result+= s[i].toUpperCase()
  }
  else result+=s[i]
}
console.log(result);

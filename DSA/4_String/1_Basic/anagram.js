let prompt = require("prompt-sync")();

function Anagram() {
  let s1 = prompt("Enter the string1 ");
  let s2 = prompt("Enter the string2 ");
  let arr = new Array(123).fill(0);
  if (s1.length != s2.length) {
    return console.log("Not Anagram");
  } else {
    for (let i = 0; i < s1.length; i++) {
      let ch = s1.charCodeAt(i);
      arr[ch]++;
    }

    for (let i = 0; i < s2.length; i++) {
      let ch = s2.charCodeAt(i);
      arr[ch]--;
    }
    
    let isangram = true;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] != 0) {
        isangram = false;
        break;
      }
    }
    console.log(isangram ? "Anagram" : "Not Anagram");
}

}
Anagram();

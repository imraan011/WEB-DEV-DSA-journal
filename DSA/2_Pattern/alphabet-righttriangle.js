var prompt = require("prompt-sync")();
function Alpha_righttripattern() {
  const n = Number(prompt("Enter the Number ... "));
  for (let i = 1; i <= n; i++) {
    // outer loop for rows
    temp = 65;
    for (let j = 1; j <= i; j++) {
      // inner loop for columns
      process.stdout.write(String.fromCharCode(temp) + " ");
      temp++;
    }

    console.log();
  }
}

Alpha_righttripattern();

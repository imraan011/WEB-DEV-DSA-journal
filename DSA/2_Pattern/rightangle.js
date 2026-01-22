var prompt = require("prompt-sync")();
function righttripattern() {
  const n = Number(prompt("Enter the Number ... "));
  for (let i = 1; i <= n; i++) { // outer loop for rows
    for (let j = 1; j <= i; j++) { // inner loop for columns
      process.stdout.write("* ");
    }
    console.log();
  }
}

righttripattern();


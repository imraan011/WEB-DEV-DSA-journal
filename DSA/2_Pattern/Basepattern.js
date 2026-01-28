var prompt = require("prompt-sync")();
function Basepattern() {
  const n = Number(prompt("Enter the Number ... "));
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      process.stdout.write("* ");
    }
    console.log();
  }
}


Basepattern();

//     *
//    * *
//   * * *
//  * * * *
// * * * * *

var prompt = require("prompt-sync")();
function trianglepattern() {
  const n = Number(prompt("Enter the Number ... "));
  for (let i = 1; i <= n; i++) {
    // outer loop for rows
    for (let j = 1; j <= n - i; j++) {
      // inner loop for columns
      process.stdout.write(" ");
    }
    for (let k = 1; k <= i; k++) {
      process.stdout.write("* ");
    }

    console.log();
  }
}
trianglepattern();

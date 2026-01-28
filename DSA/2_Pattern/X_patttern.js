// *       *
//   *   *
//     *
//   *   *
// *       *

var prompt = require("prompt-sync")();
function X_pattern() {
  const n = Number(prompt("Enter the Number ... "));
  for (let i = 1; i <= n; i++) {
    // outer loop for rows
    for (let j = 1; j <= n; j++) {
      // inner loop for columns
      if (i == j || i + j == n + 1) {
        process.stdout.write("* ");
      } else {
        process.stdout.write("  ");
      }
    }
    console.log();
  }
}
X_pattern();

//butterfly pattern

var prompt = require("prompt-sync")();
const n = 7;
// const n = Number(prompt("Enter the number "))
for (let i = 1; i <= n; i++) {
//   upper half
  for (let j = 1; j <= i; j++) {
    process.stdout.write("* ");
  }
  for (let k = 1; k <= 2 * (n - i); k++) {
    process.stdout.write("  ");
  }
  for (let l = 1; l <= i; l++) {
    process.stdout.write("* ");
  }
  console.log();
}

for (let i = n; i >= 1; i--) {
//   lower half
  for (let j = 1; j <= i; j++) {
    process.stdout.write("* ");
  }
  for (let k = 1; k <= 2 * (n - i); k++) {
    process.stdout.write("  ");
  }
  for (let l = 1; l <= i; l++) {
    process.stdout.write("* ");
  }
  console.log();
}


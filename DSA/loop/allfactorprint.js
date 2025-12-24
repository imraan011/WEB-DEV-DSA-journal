function printFactors(n) {
  // Write your logic here
  for (let i = 0; i <= n; i++) {
    if (n % i == 0) {
      process.stdout.write(i.toString() + " ");
    }
  }
}
printFactors(128); // Output: 1 2 3 4 8 16 32 64 128

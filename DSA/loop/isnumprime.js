function isPrime(n) {
  // Write your logic here
  if (n <= 1) return "Not Prime";
  if (n == 2) return "Prime";
  if (n % 2 == 0) return "Not Prime";
  for (let i = 3; i <= Math.floor(Math.sqrt(n)); i += 2) {
    if (n % i == 0) {
      console.log("not prime");
      return;
    }
  }
  console.log("prime");
}

// isPrime(11); // Prime
isPrime(15);

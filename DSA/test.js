function Isprime(n) {
  if (n <= 1) {
    return console.log("not prime");
  }

  for (let i = 2; i <= Math.floor(Math.sqrt(n)); i+=2) {
    if (n % i == 0) {
      return console.log("not prime");
      break;
    }
  }
  return console.log("prime");
}

Isprime(2485781);

//
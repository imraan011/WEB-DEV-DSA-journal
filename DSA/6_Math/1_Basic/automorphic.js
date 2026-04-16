function isAutomorphic(n) {
  // Write your logic here
  let copy = n;
  sq = n * n;
  let count = 0;
  while (n > 0) {
    let temp = n % 10;
    count += 1;
    n = Math.floor(n / 10);
  }

  if (sq % Math.pow(10, count) == copy) {
    console.log("yes");
  } else console.log("no");
}
isAutomorphic(76); // Output: "Yes" (76^2 = 5776)
isAutomorphic(7); // Output: "No" (7^2 = 49)

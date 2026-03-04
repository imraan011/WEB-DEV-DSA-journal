function isPowerOfTwo(n) {
    // Your code here
    return (n > 0 && ((n&(n-1)) == 0) ? "true" : "false")
}
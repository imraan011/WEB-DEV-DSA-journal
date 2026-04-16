function swapNumbers(a, b) {
    // Write your logic here
    a=a^b
    b=a^b
    a=a^b
    return [a,b]
}
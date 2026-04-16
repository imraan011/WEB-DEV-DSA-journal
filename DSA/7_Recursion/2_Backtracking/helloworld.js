function printHello(n) {
    // Your code here
    if(n==0) return
    console.log("Hello")
    
    printHello(--n);
}
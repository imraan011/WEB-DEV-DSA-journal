function isStrongNumber(n) {
    let copy = n;
    let factsum = 0 ;
    let sum = 0 ;
    
    while(n>0){
        let temp = n % 10;
        let fact = 1;
        for(let i=temp ; i >0 ; i--){
             fact *= i
        }
        
        factsum+=fact;
        n=Math.floor(n/10);
    
    }
    
    if(factsum === copy ){
        console.log("yes");
        return "Yes";
    }
    else{
        console.log("no");
        return "No";
    }
    
}
isStrongNumber(145); // Output: "Yes" (1! + 4! + 5! = 145)


function capitalizeEnds(str) {
    let s =str.split(" ")
    let result = []

    for(let i = 0 ; i<s.length ; i++){
        if(s[i].length ===0)
        result.push(s[i])

        else if(s[i].length==1){
            result.push(s[i].toUpperCase());
        }
        else{
            let first = s[i][0].toUpperCase()
            let middle = s[i].slice(1,-1)
            let last = s[i][s[i].length-1].toUpperCase() 

            result.push(first+middle+last)
        }
    }

    return result.join(" ")
}

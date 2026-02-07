
var checkIfPangram = function(sentence) {
    let set =  new Set()
    for(let i = 0; i<sentence.length ; i++){
        let char  = sentence.charAt(i)
        set.add(char)        
    }
    return set.size == 26

};
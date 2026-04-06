
var repeatedCharacter = function(s) {
    let map = new Map()

    for(let  i =  0 ; i<s.length ; i++){
      if(map.has(s[i])){
        // map.set(s[i] , map.get(s[i])+1)
        // if(map.get(s[i])==2)
         return s[i]
      }else{
        map.set(s[i] , 1)
      }
    }

};
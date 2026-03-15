// majority element
let arr = [2, 2, 1, 1, 1, 2, 2];
let map = new Map()

for(let i of arr){
   if(map.has(i)){
      map.set(i , map.get(i)+1)
   }
   else{
      map.set(i,1)
   }
}

for(let i of map){
   if(i[1] > arr.length/2){
      console.log(i[0]);
      
   }
}


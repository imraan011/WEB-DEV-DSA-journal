
var transpose = function(arr) {
    if (arr.length === 0) return [];
   // let ans = new Array()
    let ans =Array.from({length:arr[0].length}, ()=>Array(arr.length))
   for( let i = 0 ; i<ans.length ; i++){
       for(let j = 0 ; j<ans[i].length ; j++){
           ans[i][j]=arr[j][i]
       }
   }
   return ans
};
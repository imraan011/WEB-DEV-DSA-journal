/**
 * @param {number[][]} arr
 * @return {number[][]}
 */
var flipAndInvertImage = function(arr) {
    // for(let i = 0 ; i<arr.length; i++){
    //     let j=0,k=arr[i].length-1
    //     while(j<k){
    //         let temp = arr[i][j]
    //         arr[i][j] = arr[i][k]
    //         arr[i][k] = temp;
    //         j++
    //         k--
    //     }
    // }

    // for(let i = 0 ; i<arr.length ; i++){
    // for(let j = 0 ; j<arr[i].length ; j++){
    //     arr[i][j] ^=1
    // }
    // }


    // return arr
    for(let i=0;i<arr.length;i++){
        arr[i].reverse();
        
        for(let j=0;j<arr[i].length;j++){
            if(arr[i][j]==0){
                arr[i][j]=1;
            }
            else{
                arr[i][j]=0;
            }
        }
        
    }

    return arr;
};
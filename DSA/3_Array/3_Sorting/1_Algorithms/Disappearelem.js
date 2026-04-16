// disapper element in array 
function disapper(arr){ 
    let i = 0;
    while(i<arr.length){
        let corr = arr[i]-1
        if(arr[i]!=arr[corr]){
            let temp = arr[i];
            arr[i] = arr[corr];
            arr[corr] = temp;
        }else i++
    }

    let ans = [];
    let  n = arr.length;

    for(let i = 0 ;i<n ; i++){
        if(arr[i]!=i+1) ans.push(i+1);
    }
    return ans;
}

let arr = [4,3,2,7,8,2,3,1];
console.log(disapper(arr));
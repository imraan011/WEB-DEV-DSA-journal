
var threeSum = function(arr) {
    arr.sort((a,b) => a-b);
    
    let ans = new Array()
    
    for(let i = 0 ; i<arr.length ; i++){
        if(i!=0 && arr[i-1] == arr[i]) continue

        let  j=i+1 , k = arr.length-1
        while(j<k){
        if(arr[i]+arr[j]+arr[k] == 0){
        ans.push([arr[i],arr[j],arr[k]])
        j++ 
        k--
        while(j<k  && arr[j]==arr[j-1]) j++
        while(j<k  && arr[j]==arr[k+1]) k--
        }else if(arr[i]+arr[j]+arr[k]<0) {
            j++
        }
        else k--

    }}
    return ans
};
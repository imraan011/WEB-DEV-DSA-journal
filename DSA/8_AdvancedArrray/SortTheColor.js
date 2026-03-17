
var sortColors = function(arr) {
    let i = 0 , j = arr.length-1 ,k=0

    while(k<=j){
         if(arr[k]==0){
            let temp = arr[k]
            arr[k]= arr[i]
            arr[i] = temp
            k++
            i++
        } 
        else if(arr[k]==2){
            let temp = arr[k]
            arr[k]= arr[j]
            arr[j] = temp
            j--
           
        }
        else k++
    }

};
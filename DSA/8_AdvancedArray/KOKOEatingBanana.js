
var minEatingSpeed = function(arr, h) {
    let min = 1 , max = Math.max(...arr)

    while(min<max){
        let mid = Math.floor((min + max)/2)

        if(canEatbanana(arr , h , mid)){
             max = mid  
        }else
            min = mid+1
    }
    return min
};

function canEatbanana(arr , h ,mid ){
    let actualhr = 0

    for(let  i of arr){
        actualhr += Math.floor(i/mid)

        if(Math.ceil
        (i%mid) != 0) actualhr++
    }

    return actualhr<=h
}

let arr = [3,6,7,11] , h = 8
console.log(minEatingSpeed(arr , h))
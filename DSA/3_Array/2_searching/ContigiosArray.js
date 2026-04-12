 
function findMaxLength(arr) {
    let sum = 0 , long=0 , map =new Map()
    map.set(0 , -1)
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i] == 0 ? -1 : 1

        if(map.has(sum)) long = Math.max(long , i-(map.get(sum)))

        else map.set(sum , i)

    }

return long
}

let arr = [0,1,0,1,0,1,1]
console.log(findMaxLength(arr))

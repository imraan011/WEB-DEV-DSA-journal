
var findMin = function (arr) {
    let i = 0; j = arr.length - 1
    while (i < j) {
        let mid = Math.floor((i + j) / 2)

        if (arr[mid] < arr[j]) {
            j = mid
        } else i = mid + 1

    }

    return arr[i]

};

let arr = [4,5,6,7,0,1,2]
console.log(findMin(arr))

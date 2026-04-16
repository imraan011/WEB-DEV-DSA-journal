
var duplicateZeros = function (arr) {
    let count = 0
    for (let i of arr) {
        if (i == 0) count++
    }

    let j = (arr.length - 1) + count
    let i = arr.length - 1
    while (i >= 0) {

        if (arr[i] != 0) {
            if (j < arr.length) arr[j] = arr[i]
        }

        else {
            if (j < arr.length) arr[j] = 0
            j--
            if (j < arr.length) arr[j] = 0;
        }

        i--
        j--
    }
}
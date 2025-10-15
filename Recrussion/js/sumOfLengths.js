function sumOfLengths(arr){
    if(arr.length === 0){
        return 0
    }

return arr[0].length + sumOfLengths(arr.slice(1))
}
function sumNumbersRecursive(arr){
    if(arr.length === 0) return 0

    return arr[0] + sumNumbersRecursive(arr.slice(1))
}
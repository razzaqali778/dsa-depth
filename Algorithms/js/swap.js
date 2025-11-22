export function swap (items, leftIndex, rightIndex){
    const temp = items[leftIndex]
    items[leftIndex] = items[rightIndex]
    items[rightIndex] = temp
}
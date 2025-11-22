import { compareDefault } from "./compareDefault";

export function lowerBound(sortedItems, value, compareFn = compareDefault) {
    let low = 0;
    let high = sortedItems.length;
    while (low < high) {
        const mid = (low + high) >> 1;
        if (compareFn(sortedItems[mid], value) < 0) low = mid + 1; else high = mid;
    }
    return low;
}



export function upperBound(sortedItems, value, compareFn = compareDefault) {
    let low = 0;
    let high = sortedItems.length;
    while (low < high) {
        const mid = (low + high) >> 1;
        if (compareFn(sortedItems[mid], value) <= 0) low = mid + 1; else high = mid;
    }
    return low;
}
const runningSum = (arr) => {
    const res = []
    let total = 0

    for (let num of arr) {
        total += num
        res.push(total)
    }
    return res
}


runningSum([4, 2, 1, 6, 3, 6]); // -> [ 4, 6, 7, 13, 16, 22 ] 
const closestCarrot=(grid, startRow, startCol)=>{
    const queue = [[startRow, startCol, 0]]
    const visited = new Set([startRow + ',' + startCol])

    while(queue.length > 0){
        const [row, col, distance] = queue.shift()

        if(grid[row][col] === 'C') return distance

        const deltas = [[1,0], [-1,0], [0,1], [0,-1]]

        for(let delta of deltas){
            const [deltaRow, deltaCol] = delta
            const neighborRow = row + deltaRow
            const neighborCol = col + deltaCol

            const neighborPos = neighborRow + ',' + neighborCol

            const rowInbounds = 0 <= neighborRow && neighborRow < grid.length
            const colInbounds = 0 <= neighborCol && neighborCol < grid[0].length

            if(rowInbounds && colInbounds && !visited.has(neighborPos) && grid[neighborRow][neighborCol] !=='X'){
                visited.add(neighborPos)
                queue.push([neighborCol, neighborCol, distance+1])
            }
        }
    }
    return -1
}

const grid = [
  ['O', 'O', 'O', 'O', 'O'],
  ['O', 'X', 'O', 'O', 'O'],
  ['O', 'X', 'X', 'O', 'O'],
  ['O', 'X', 'C', 'O', 'O'],
  ['O', 'X', 'X', 'O', 'O'],
  ['C', 'O', 'O', 'O', 'O'],
];

closestCarrot(grid, 1, 2); // -> 4
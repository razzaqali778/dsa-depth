const levelAverages=(root)=>{
  const levels = []
  fillLevels(root, levels, 0)

  const avg = []

  for(let level of levels){
    avg.push(avg(level))
  }

  return avg
}


const fillLevels =(root, levels, levelNum)=>{
    if(root === null) return

    if(levels.length === levelNum){
        levels[levelNum] = [root.val]
    }else{
        levels[levelNum].push(root.val)
    }

    fillLevels(root.left, levels, levelNum+1)
    fillLevels(root.right, levels, levelNum+1)
}

const avg =(array)=>{
    let sum = 0 
    for(let num of array){
        sum += num
    }

    return sum / array.length
}
const nums = [2, 4, 5, 12, 7];


const nonAdjacentSum =(nums, i=0, memo={})=>{
    if(1 in memo) return memo[i]
    
    if(i>=nums.length) return 0

    const include = nums[i] + nonAdjacentSum(nums, i+2, memo)
    const exclude = nonAdjacentSum(nums, i+1, memo)

    memo[i] = Math.max(include, exclude)
    return memo[i]
}

nonAdjacentSum(nums); // -> 16
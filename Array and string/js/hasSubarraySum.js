const hasSubarraySum =(arr, target)=>{
   const prefixSum = [0]
   let total = 0

   for(let num of arr){
    total += num
    prefixSum.push(total)
   }

   for(let start = 0; start < prefixSum.length; start++){
    for(let end = start +1; end < prefixSum.length; end++){
        if(prefixSum[end] - prefixSum[start] === target){
            return true
        }
    }
   }
   return false
}

hasSubarraySum([1, 3, 1, 4, 3], 8); // -> true
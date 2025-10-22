const tribonacci =(n, memo={})=>{
    if(n=== 0 || n===1) return n
    if(n===2) return 1

    if(n in  memo) return memo[n]

  memo[n] =  tribonacci(n-1) + tribonacci(n-2) + tribonacci(n-3)

  return memo[n]
}
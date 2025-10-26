const nestingScore = (str)=>{
    const stack = [0]

    for(let char of str){
        if(char === '['){
            stack.push(0)
        }else{
            const poped = stack.pop()
            if(poped === 0){
                stack[stack.length -1] +=1
            }else{
                stack[stack.length -1] += 2 * poped
            }
        }
    }

    return stack[0]
}
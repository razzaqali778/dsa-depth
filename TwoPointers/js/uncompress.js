const uncompress=(s)=>{
    let i = 0
    let j = 0
    const result = []
    const numbers = '0123456789'

    while(j < s.length){
        if(numbers.includes(s[j])){
            j++
        }else{
            const count = Number(s.slice(i, j))

            for(let k = 0; k<count; k++){
                result.push(s[j])
            }
            j +=1
            i = j
        }
    }

    return result.join('')
}
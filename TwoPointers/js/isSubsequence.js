const isSubsequence=(string1, string2)=>{
    let i = 0
    let j = 0

    while(i<string1.length && j < string2.length){
        if(string1[i] === string2[j]){
            i +=1
            j +=1
        }else{
            j +=1
        }
    }

    return i === string1.length
} 
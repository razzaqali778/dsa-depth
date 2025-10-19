export const anagrams =(s1:string, s2:string):boolean=>{
    const count:Record<string, number> ={}

    for(const ch of s1){
        if(count[ch] === undefined) count[ch] =0
        count[ch] +=1
    }

    for(const ch of s2){
        if(count[ch] === undefined){
            return false
        }else{
            count[ch] -=1
        }
    }

    for(const k in count){
        if(Object.prototype.hasOwnProperty.call(count, k) && count[k] !==0){
            return false
        }
    }

    return true
}
const pairSum =(arr, target)=>{
    let obj ={}
    

    for(let i=0; i<arr.length;i++){
        const curr = arr[i]
        const diff = target - curr

        if(diff in obj){
            return [obj[diff], i]
        }
        obj[curr] = i
    }
}
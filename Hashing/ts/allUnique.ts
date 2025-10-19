function allUniques<T>(item:T[]):boolean{
    if(!item || item.length < 2) return false
    const seen = new Set<T>()

    for(const v of item){
        if(seen.has(v)) return false
        seen.add(v)
    }

    return true
}
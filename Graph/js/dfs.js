const graph ={
    a:['c', 'b'],
    b:['d'],
    c:['e'],
    d:['f'],
    e:[],
    f:[]
} 


const depthFirst=(graph, source)=>{
    const stack = [source]


    while(stack.length > 0){
        const current = stack.pop()
        console.log(current)
        for(let neighbor of graph[current]){
            stack.push(neighbor)
        }
    }   
}

const depthFirstRecrussive=(graph, source)=>{
    for(let neighbor of graph[source]){
        depthFirstRecrussive(graph, neighbor)
    }
}

depthFirst(graph, 'a')// abdfce
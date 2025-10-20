const graph = {
  f: ['g', 'i'],
  g: ['h'],
  h: [],
  i: ['g', 'k'],
  j: ['i'],
  k: []
};


const hasPathdfs =(graph, source, dst)=>{
    const stack = [source]

    while(stack.length > 0){
        const curr = stack.pop()

        if(curr === dst) return  true

        for(let neighbor of graph[curr]){
            stack.push(neighbor)
        }
    }
}

const hasPathRecrussive = (graph, src, dst) => {
  if (src === dst) return true;

  for (let neighbor of graph[src]) {
    if (hasPath(graph, neighbor, dst) === true) {
      return true;
    }
  }

  return false;
};

const hasPathbfs = (graph, src, dst) => {
  const queue = [src];

  while (queue.length) {
    const current = queue.shift();
    if (current === dst) return true;

    for (let neighbor of graph[current]) {
      queue.push(neighbor);
    }
  }

  return false;
};


hasPath(graph, 'f', 'k'); 
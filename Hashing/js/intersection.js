const intersection1=(arr1, arr2)=>{
    const set1 = new Set(arr1)
    const set2 = new Set(arr2)

    return [...set1].filter((item)=>set2.has(item))
}

const intersection2 = (a, b) => {
  const result = [];
  for (let item of b) {
    if (a.includes(item)) {
      result.push(item);
    }
  }
  return result;
};

const intersection3 = (a, b) => {
  const result = [];
  const setA = new Set(a);
  for (let item of b) {
    if (setA.has(item)) {
      result.push(item);
    }
  }
  return result;
};
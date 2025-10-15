const intersectionWithDupes = (a, b) => {
  const count1 = eleCount(a);
  const count2 = eleCount(b);
  const result = [];
  for (let ele in count1) {
    if (ele in count2) {
      for (let i = 0; i < Math.min(count1[ele], count2[ele]); i += 1) {
        result.push(ele);
      }
    }
  }
  return result;
};

const eleCount = (elements) => {
  const count = {};
  for (let ele of elements) {
    if (!(ele in count)) {
      count[ele] = 0;
    }
    count[ele] += 1;
  }
  return count;
};

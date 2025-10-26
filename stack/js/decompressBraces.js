const decompressBraces = (s) => {
  const nums = '123456789';
  const stack = [];
  for (let char of s) {
    if (nums.includes(char)) {
      stack.push(Number(char));
    } else {
      if (char === '}') {
        let segment = '';
        while (typeof stack[stack.length - 1] !== 'number') {
          const popped = stack.pop();
          segment = popped + segment;
        }
        const number = stack.pop();
        stack.push(repeat(segment, number));
      } else if (char !== '{') {
        stack.push(char);
      }
    }
  }
  
  return stack.join('');
};

const repeat = (str, n) => {
  let result = '';
  for (let i = 0; i < n; i += 1) {
    result += str;
  }
  return result;
};

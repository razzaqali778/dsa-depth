const reverseSomeChars = (str, chars) => {
  const charSet = new Set(chars);
  const stack = [];
  for (let c of str) {
    if (charSet.has(c)) {
      stack.push(c);
    }
  }

  let newStr = [];
  for (let c of str) {
    if (charSet.has(c)) {
      newStr.push(stack.pop());
    } else {
      newStr.push(c);
    }
  }

  return newStr.join('');
};

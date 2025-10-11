const longestWord = (sentence) => {
  const words = sentence.split(" ");
  let longest = "";
  
  for (let word of words) {
    if (word.length >= longest.length) {
      longest = word;
    }
  }
  
  return longest;
};

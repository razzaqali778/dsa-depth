const canConcat = (s, words, memo={}) => {
    if(s in memo) return memo[s]
    if (s === "") return true

    for(let word of words){
        if(s.startsWith(word) === true){
            const suffix = s.slice(word.length)

            if(canConcat(suffix, words, memo) === true){
                memo[s] = true
                return true
            }
        }
    }

    memo[s] = false
    return false
}

const canConcat = (s, words, i = 0, memo = {}) => {
  if (i in memo) return memo[i];
  
  if (i === s.length) return true;
  
  for (let word of words) {
    if (s.startsWith(word, i)) {
      if (canConcat(s, words, i + word.length, memo)) {
        memo[i] = true;
        return true
      }
    }
  }
  
  memo[i] = false;
  return false;
};
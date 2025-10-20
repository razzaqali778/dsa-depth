const compress =(s)=>{
    let i = 0
    let j = i+1
    let result = ''

    while(j <= s.length){
        if(s[i] === s[j]){
            j++
        }else{
            num =  j -i

            if(num === 1){
                result += s[i]
            }else{
                result += num + s[i]
            }
            i=j
        }
    }

    return result
}

const compress = (s) => {
  let result = [];
  let i = 0;
  let j = 0;
  
  while (j <= s.length) {
    if (s[i] === s[j]) {
      j += 1;
    } else {
      const num = j - i;
      if (num === 1) {
        result.push(s[i]);
      } else {
        result.push(String(num), s[i]);
      }
      i = j;
    }
  }
  
  return result.join('');
};
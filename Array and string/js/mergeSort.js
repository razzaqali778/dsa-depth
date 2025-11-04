const mergeSort = (nums) => {
 if (nums.length <= 1) return nums;
 const mid = Math.floor(nums.length / 2);
 const left = nums.slice(0, mid);
 const right = nums.slice(mid);
 const sortedLeft = mergeSort(left);
 const sortedRight = mergeSort(right);
 return merge(sortedLeft, sortedRight);
};

const merge = (array1, array2) => {
 array1.reverse();
 array2.reverse();
 const merged = [];
 
 while (array1.length > 0 && array2.length > 0) {
  if (array1[array1.length - 1] < array2[array2.length - 1]) {
   merged.push(array1.pop());
  } else {
   merged.push(array2.pop());
  }
 }

 merged.push(...array1.reverse());
 merged.push(...array2.reverse());

 return merged;
};
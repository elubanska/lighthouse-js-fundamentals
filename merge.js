function merge(array1,array2){
  let merged = [];
  merged = array1.concat(array2);
  merged.sort((a, b) => a - b);
  console.log(merged.length);
  return merged;
}
console.log(merge([4,5,6],[1,2,3,4]));

function lastIndexOf(array,val){
    for(let i = array.length; i > 0; i--){
        if(array[i - 1] === val)
          return i - 1;
      }
      return -1;
}
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 1));
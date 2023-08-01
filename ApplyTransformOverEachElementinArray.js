/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
    let res = new Array(arr.length);
  
    for(i in arr){
      res[i] = fn(arr[i],Number(i)); 
    }
    return res;
  
  };
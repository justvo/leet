/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let res = nums.sort((a,b)=>a-b);
    let count = res[0];
    for(let i = 0; i<res.length;i++){
      if(count !== res[i]){
        return count;
        }
        count++;
    }
    if(res[0]!==0){
      return 0;
    }
    return count;
  };
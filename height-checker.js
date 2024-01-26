/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function(heights) {
    let count = 0;
    const ss=[...heights];
    ss.sort((a,b)=>a-b);
    for(let i=0;i<heights.length;i++)
    {
        if(ss[i]!==heights[i]){
            count++
        }
    }  
    return count;
  };
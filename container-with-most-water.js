/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let start = 0, end = height.length-1;
    let maxLeft = start;
    let maxRight = end;
    let maxVol = 0;
    while( start <= end ){
        if(height[start]>height[maxLeft]){
            maxLeft=start;
        }
        if(height[end]>height[maxRight]){
            maxRight=end;
        }

        maxVol = Math.max(maxVol,(maxRight-maxLeft)*Math.min(height[maxLeft],height[maxRight]));
         if(height[start] < height[end]){
            start++;
        } else {
            end--;
        }
    }
    return maxVol;
};
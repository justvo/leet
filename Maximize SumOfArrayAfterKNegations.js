/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var largestSumAfterKNegations = function(nums, k) {
    nums.sort((a,b) => a-b);
    let minIndex = 0;

    for (let i = 0; i < k; i++){
        nums[minIndex] = -nums[minIndex];
        if(minIndex + 1 < nums.length){
            minIndex = nums[minIndex] < nums[minIndex+1] ? minIndex : minIndex+1;
        }
    }
    return nums.reduce((curr, prev) => curr+prev);
};
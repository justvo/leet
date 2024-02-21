/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function(nums1, nums2) {
    const answer =[[],[]]

    for (let i of nums1){
        (!nums2.includes(i))&&(!answer[0].includes(i))?answer[0].push(i):0;
    }
    for (let i of nums2){
        (!nums1.includes(i))&&(!answer[1].includes(i))?answer[1].push(i):0;
    }
    return answer;
};
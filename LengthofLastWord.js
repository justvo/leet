/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    const trimmedStr = s.trim();
    return  trimmedStr.length - trimmedStr.lastIndexOf(' ')-1;
    
};
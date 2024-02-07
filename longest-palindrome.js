/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    let ans = 0;
    let hashTable = {};
    for(let ch of s){
        hashTable[ch]= (hashTable[ch]||0)+1;
        if(hashTable[ch] %2===0){
            ans +=2;
        }
    }
    return s.length> ans? ans +1 : ans
};
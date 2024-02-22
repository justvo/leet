/**
 * @param {string[]} words
 * @return {string}
 */
var firstPalindrome = function (words) {
    for (let word of words) {
        const result = (word === word.split('').reverse().join('')) ? word : null;
        if(result) return result;
    }
    return ""
};
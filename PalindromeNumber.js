/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    const string = `${x}`.split('').reverse().join('')
    return `${x}` === string;
   
    
};
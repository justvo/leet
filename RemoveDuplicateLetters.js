/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicateLetters = function(s) {
    let result = '';
    for(let i = 0; i < s.length; i++) {
        const char = s[i];
        if(result.includes(char)) continue;
        while(result.length > 0 && result.slice(-1) > char && s.indexOf(result.slice(-1), i) > i) {
            result = result.slice(0, -1)
        }
        result += char
    }
    return result
    
};
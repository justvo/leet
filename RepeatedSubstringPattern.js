/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function(s) {
    const n = s.length;

for (let len = 1; len <= n / 2; len++) {
    if (n % len === 0) {
        const substring = s.slice(0, len);
        let repeated = '';
        
        for (let i = 0; i < n / len; i++) {
            repeated += substring;
        }
        
        if (repeated === s) {
            return true;
        }
    }
}

return false;

};
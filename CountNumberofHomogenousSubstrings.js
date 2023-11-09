/**
 * @param {string} s
 * @return {number}
 */
var countHomogenous = function(s) {
    let prev = 1
    let sum = 1
    let m = 1e9 + 7
    for(let i = 1; i < s.length; i++)
    {
        let curr = 1
        if(s[i] == s[i-1])
        {
            curr = (curr + prev) % m
        }
        sum = (sum + curr) % m
        prev = curr
    }
    return sum
};
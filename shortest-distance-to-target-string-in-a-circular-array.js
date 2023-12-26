/**
 * @param {string[]} words
 * @param {string} target
 * @param {number} startIndex
 * @return {number}
 */
var closetTarget = function(words, t, s) {
    if(!words.includes(t)){
        return -1;
    }
    let a = words.concat(words.slice(0,s+1));
    a = a.reverse();
    let l  = a.indexOf(t);
    let b = words.slice(s).concat(words)
    let m = b.indexOf(t)
    return Math.min(l,m)
    
};
/**
 * @param {string} s
 * @return {string}
 */
var makeGood = function(s) {
    const stack = [];
    for(const char of s){
        const last = stack.at(-1)
        if(last && char!==last && char.toLowerCase() === last.toLowerCase()){
            stack.pop()
        }
        else{
            stack.push(char)
        }
    }
    return stack.join('')
};
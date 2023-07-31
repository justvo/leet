/**
 * @param {string} val
 * @return {Object}
 */
var expect = function(val) {
    return {
        toBe:(v) => {
            if (v === val) return true;
            else  throw  new Error("Not Equal");  
        },
        notToBe:(v) => {
            if (v !== val) return true;
            else  throw  new Error("Equal");  
        }
    }
    
};

console.log(expect(5).toBe(5)); // true
console.log(expect(5).notToBe(6)); // throws "Equal"

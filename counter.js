/**
 * @param {number} n
 * @return {Function} counter
 */
var count = 0;
var createCounter = function(n) {
    let count = n;
    return function() {

        return count++;
    };
};
 
const counter = createCounter(10)
console.log(counter()) // 10
console.log(counter()) // 11
console.log(counter()) // 12
console.log(counter()) // 13
 
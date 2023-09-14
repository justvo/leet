/**
 * @param {number} n
 * @return {boolean}
 */
var isUgly = function(n) {
    if (n < 1) return false;
   if (n === 1 || n === 2 || n === 3 || n === 4 || n === 5) return true;

 const divisor = [2, 3, 5];

 for (var i = 0; i < divisor.length; i++) {
   while (n && n % divisor[i] === 0) {
     n = Math.floor(n / divisor[i]);
   }
 }

 return n === 1;
};
   

/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {
    n = n.toString(2);
    
     if(n.length != 32){
		let addSize = 32 - n.length
        for(let i=1; i<=addSize; i++){
            n = '0' + n
        }
    }
     const m = (n+'').split('').reverse().join('');
    return parseInt(m, 2);
};
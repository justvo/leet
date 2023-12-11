/**
 * @param {string} s
 * @return {number}
 */
var countSegments = function(s) {
    const segments = s.split(' ');

    let count = 0;
    
    for (const segment of segments){
        if (segment !==''){
            count++;
        }
    }
    
    return count;
};
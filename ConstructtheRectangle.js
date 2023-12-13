/**
 * @param {number} area
 * @return {number[]}
 */
var constructRectangle = function(area) {
    const mid = Math.floor(Math.sqrt(area));
    for(let i=mid;i>=1;i--){
        if(!(area%i)) return [area/i,i];
    }
    return [area,1];
    
};
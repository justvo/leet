/**
 * @param {number[]} timeSeries
 * @param {number} duration
 * @return {number}
 */
var findPoisonedDuration = function(timeSeries, duration) {
    let poison = 0;
       if(!duration||!timeSeries.length) return 0;
       for(let i=1;i<timeSeries.length;i++) {
           if(timeSeries[i]-timeSeries[i-1]>duration) {
               poison+=duration;
           }
           else {
               let exist=timeSeries[i]-timeSeries[i-1];
               poison+=exist;
           }        
       }
        poison+=duration;
       return poison;
   };
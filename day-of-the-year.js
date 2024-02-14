/**
 * @param {string} date
 * @return {number}
 */
var dayOfYear = function(date) {
    const start = new Date(date.slice(0,4), 0, 1);
    const curr =new Date(date);
    return (curr-start)/86400000 + 1

};
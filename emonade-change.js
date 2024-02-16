/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function (bills) {
    let counter = { 5: 0, 10: 0, 20: 0 }

    for (let bill of bills) {
        counter[bill] += bill;
        if (bill === 5) continue;
        else if (!counter[5]) return false;
        else if (bill === 10) counter[5] -= 5;
        else if (counter[5] + counter[10] < 15) return false;
        else if (counter[10]) (counter[10] -= 10), (counter[5] -= 5);
        else counter[5] -= 15;
    }
    return true;
};
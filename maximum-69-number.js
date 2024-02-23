/**
 * @param {number} num
 * @return {number}
 */
var maximum69Number = function (num) {
    let temp = num.toString().split('');
    for (let i in temp) {
        if (temp[i] == "6") {
            temp[i] = "9";
            break;
        }
    }
    return temp.join("")

};
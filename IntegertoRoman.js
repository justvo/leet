/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function (num) {
    const romanNumerals = [
        { value: 1000, symbol: 'M' },
        { value: 900, symbol: 'CM' },
        { value: 500, symbol: 'D' },
        { value: 400, symbol: 'CD' },
        { value: 100, symbol: 'C' },
        { value: 90, symbol: 'XC' },
        { value: 50, symbol: 'L' },
        { value: 40, symbol: 'XL' },
        { value: 10, symbol: 'X' },
        { value: 9, symbol: 'IX' },
        { value: 5, symbol: 'V' },
        { value: 4, symbol: 'IV' },
        { value: 1, symbol: 'I' }
    ];

    const res = [];
    for (const el of romanNumerals) {
        while (num >= el.value) {
            num = num - el.value
            res.push(el.symbol)
        }
    }

    return res.join('')

};
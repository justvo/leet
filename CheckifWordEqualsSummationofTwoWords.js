/**
 * @param {string} firstWord
 * @param {string} secondWord
 * @param {string} targetWord
 * @return {boolean}
 */
var isSumEqual = function(firstWord, secondWord, targetWord) {
    function valueOfString(str){
        let value = '';
        for (let index = 0; index<str.length; index++){
            value +=(str.charCodeAt(index)-97)
        }
        return value
    }
    return (parseInt(valueOfString(firstWord))+parseInt(valueOfString(secondWord))) === parseInt(valueOfString(targetWord))
};
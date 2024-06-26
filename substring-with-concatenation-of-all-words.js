/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function (s, words) {
    if (s.length < words.length * words[0].length) return [];
  
    const res = [];
    const wordMap = new Map();
  
    // Заповнення Map словами та їх кількістю
    for (const word of words) {
      wordMap.set(word, (wordMap.get(word) || 0) + 1);
    }
  
    const wordLen = words[0].length;
    const wordsLen = words.length;
    const totalLen = wordLen * wordsLen;
    const sl = s.length;
  
    for (let i = 0; i <= sl - totalLen; i++) {
      const seenWords = new Map();
      let j = 0;
  
      while (j < wordsLen) {
        const word = s.substring(i + j * wordLen, i + (j + 1) * wordLen);
        
        if (!wordMap.has(word)) break;
  
        seenWords.set(word, (seenWords.get(word) || 0) + 1);
  
        if (seenWords.get(word) > wordMap.get(word)) break;
  
        j++;
      }
  
      if (j === wordsLen) res.push(i);
    }
  
    return res;
  };



let s1 ="barfoothefoobarman";
const words1 = ["foo","bar"]
console.log(findSubstring(s1, words1));
const { config } = require("process");

/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
var fullJustify = function (words, maxWidth) {

  const res = [];
  let buff = [words[0]];
  let buffString = words[0];
  const wl = words.length;
  let isLast = false;

  if(wl === 1){
    while(buffString.length !== maxWidth){
      buffString+=' ';
    }
    return [buffString]
  }

  for (let i = 1; i <= wl; i++) {
    console.log((buffString + " " + words[i]).length);
    if(i==wl) isLast=true
    if ((buffString + " " + words[i]).length <= maxWidth && i < wl) {
      buffString += " " + words[i];
      buff.push(" ");
      buff.push(words[i]);
      continue;
    } else if (buffString.length !== maxWidth) {
      if(isLast){
        for (let j = buff.length; buffString.length !== maxWidth; ) {

          if (!buff[j]) buff[j] = "";
          buff[j] += " ";
          buffString = buff.join("");
        }
        res.push(buffString);
        break;
      }

      for (let j = 1; buffString.length !== maxWidth; j += 2) {
        if (j > buff.length - 1) {
          j = 1;
        }
        if (!buff[j]) buff[j] = "";
        buff[j] += " ";
        buffString = buff.join("");
      }
    }

    res.push(buffString);
    buffString = words[i];
    buff = [words[i]];
  }
  return res;
};
words = ["Here","is","an","example","of","text","justification."]
maxWidth = 15;
console.log(fullJustify(words, maxWidth));
